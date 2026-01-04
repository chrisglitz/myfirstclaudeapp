'use client';

import { useState, useMemo } from 'react';
import { restaurants } from '@/data/restaurants';
import { Restaurant, Meal } from '@/types';

export default function RestaurantFinder() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [sortBy, setSortBy] = useState<'carbs' | 'protein' | 'price'>('carbs');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(restaurants.map(r => r.category)));
    return ['All', ...uniqueCategories.sort()];
  }, []);

  // Filter restaurants by category
  const filteredRestaurants = useMemo(() => {
    if (selectedCategory === 'All') return restaurants;
    return restaurants.filter(r => r.category === selectedCategory);
  }, [selectedCategory]);

  const sortedMeals = (meals: Meal[]) => {
    return [...meals].sort((a, b) => {
      if (sortBy === 'carbs') return a.carbs - b.carbs;
      if (sortBy === 'protein') return b.protein - a.protein;
      if (sortBy === 'price') return (a.price || 0) - (b.price || 0);
      return 0;
    });
  };

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-keto-primary mb-4">Restaurant Finder</h2>
        <p className="text-gray-600 mb-4">Find the best keto meals at your favorite spots</p>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-3">
        <label htmlFor="category-filter" className="font-semibold text-gray-700">
          Filter by Category:
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-keto-primary"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <span className="text-sm text-gray-600">
          ({filteredRestaurants.length} restaurants)
        </span>
      </div>

      {/* Restaurant Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredRestaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => handleRestaurantClick(restaurant)}
            className="p-4 rounded-lg border-2 transition-all border-gray-300 hover:border-keto-primary hover:shadow-lg"
          >
            <div className="font-semibold">{restaurant.name}</div>
            <div className="text-xs text-gray-500 mt-1">{restaurant.category}</div>
            <div className="text-sm mt-1 text-keto-primary font-medium">{restaurant.meals.length} options</div>
          </button>
        ))}
      </div>

      {/* Modal Popup for Meal Display */}
      {isModalOpen && selectedRestaurant && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-keto-primary">{selectedRestaurant.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{selectedRestaurant.category} - Keto Options</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-3xl font-bold leading-none"
                >
                  &times;
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSortBy('carbs')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    sortBy === 'carbs' ? 'bg-keto-primary text-white' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  Lowest Carbs
                </button>
                <button
                  onClick={() => setSortBy('protein')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    sortBy === 'protein' ? 'bg-keto-primary text-white' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  Highest Protein
                </button>
                <button
                  onClick={() => setSortBy('price')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    sortBy === 'price' ? 'bg-keto-primary text-white' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  Best Price
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {sortedMeals(selectedRestaurant.meals).map((meal) => (
                <div
                  key={meal.id}
                  className={`p-4 rounded-lg border-2 ${
                    meal.isOptimal ? 'border-keto-primary bg-green-50' : 'border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{meal.name}</h4>
                      {meal.description && (
                        <p className="text-sm text-gray-600 mt-1">{meal.description}</p>
                      )}
                    </div>
                    {meal.price && (
                      <div className="text-lg font-bold text-keto-primary ml-4">
                        ${meal.price.toFixed(2)}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-4 gap-4 mt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-keto-primary">{meal.carbs}g</div>
                      <div className="text-xs text-gray-600">Net Carbs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{meal.protein}g</div>
                      <div className="text-xs text-gray-600">Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{meal.fat}g</div>
                      <div className="text-xs text-gray-600">Fat</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{meal.calories}</div>
                      <div className="text-xs text-gray-600">Calories</div>
                    </div>
                  </div>

                  {meal.isOptimal && (
                    <div className="mt-3 text-sm font-semibold text-keto-primary">
                      ⭐ Optimal Keto Choice
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
