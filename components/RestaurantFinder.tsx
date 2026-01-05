'use client';

import { useState, useMemo } from 'react';
import { restaurants } from '@/data/restaurants';
import { Restaurant, Meal } from '@/types';

export default function RestaurantFinder() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [sortBy, setSortBy] = useState<'carbs' | 'protein' | 'price'>('carbs');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedMealType, setSelectedMealType] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(restaurants.map(r => r.category)));
    return ['All', ...uniqueCategories.sort()];
  }, []);

  // Filter restaurants by category and search query
  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(r => r.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(r =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  // Get all meals from all restaurants filtered by meal type
  const getAllMealsByType = useMemo(() => {
    if (selectedMealType === 'All') return [];

    const allMeals: Array<Meal & { restaurantName: string; restaurantId: string }> = [];

    filteredRestaurants.forEach(restaurant => {
      restaurant.meals.forEach(meal => {
        if (
          meal.mealType === selectedMealType.toLowerCase() ||
          meal.mealType === 'anytime' ||
          !meal.mealType
        ) {
          allMeals.push({
            ...meal,
            restaurantName: restaurant.name,
            restaurantId: restaurant.id
          });
        }
      });
    });

    // Sort meals
    return allMeals.sort((a, b) => {
      if (sortBy === 'carbs') return a.carbs - b.carbs;
      if (sortBy === 'protein') return b.protein - a.protein;
      if (sortBy === 'price') return (a.price || 0) - (b.price || 0);
      return 0;
    });
  }, [selectedMealType, filteredRestaurants, sortBy]);

  const sortedMeals = (meals: Meal[]) => {
    let filtered = meals;

    // Filter by meal type
    if (selectedMealType !== 'All') {
      filtered = filtered.filter(meal =>
        meal.mealType === selectedMealType.toLowerCase() ||
        meal.mealType === 'anytime' ||
        !meal.mealType // Include meals without a type (backwards compatibility)
      );
    }

    return [...filtered].sort((a, b) => {
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
        <h2 className="text-3xl md:text-2xl font-bold text-keto-dark mb-4">Restaurant Finder</h2>
        <p className="text-gray-700 text-base md:text-sm mb-4">Find the best keto meals at your favorite spots</p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <label htmlFor="search-input" className="font-semibold text-gray-800 text-lg md:text-base">
          Search:
        </label>
        <input
          id="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by restaurant name..."
          className="flex-1 px-4 py-3 md:py-2 text-base border-2 border-gray-400 rounded-lg focus:outline-none focus:border-keto-secondary focus:ring-2 focus:ring-keto-primary"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="px-5 py-3 md:py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg transition-all active:bg-gray-500"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filters Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Category Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
          <label htmlFor="category-filter" className="font-semibold text-gray-800 text-lg md:text-base whitespace-nowrap">
            Category:
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="flex-1 px-4 py-3 md:py-2 text-base border-2 border-gray-400 rounded-lg focus:outline-none focus:border-keto-secondary focus:ring-2 focus:ring-keto-primary bg-white font-medium"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Meal Type Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
          <label htmlFor="mealtype-filter" className="font-semibold text-gray-800 text-lg md:text-base whitespace-nowrap">
            Meal Type:
          </label>
          <select
            id="mealtype-filter"
            value={selectedMealType}
            onChange={(e) => setSelectedMealType(e.target.value)}
            className="flex-1 px-4 py-3 md:py-2 text-base border-2 border-gray-400 rounded-lg focus:outline-none focus:border-keto-secondary focus:ring-2 focus:ring-keto-primary bg-white font-medium"
          >
            <option value="All">All</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Anytime">Anytime</option>
          </select>
        </div>
      </div>

      {/* Sorting Options (shown when viewing meals by type) */}
      {selectedMealType !== 'All' && (
        <div className="flex flex-wrap gap-3 md:gap-2">
          <button
            onClick={() => setSortBy('carbs')}
            className={`px-5 py-3 md:px-4 md:py-2 rounded-lg transition-all font-medium text-base md:text-sm ${
              sortBy === 'carbs' ? 'bg-keto-secondary text-white shadow-md' : 'bg-gray-200 hover:bg-gray-300 text-gray-800 active:bg-gray-400'
            }`}
          >
            Lowest Carbs
          </button>
          <button
            onClick={() => setSortBy('protein')}
            className={`px-5 py-3 md:px-4 md:py-2 rounded-lg transition-all font-medium text-base md:text-sm ${
              sortBy === 'protein' ? 'bg-keto-secondary text-white shadow-md' : 'bg-gray-200 hover:bg-gray-300 text-gray-800 active:bg-gray-400'
            }`}
          >
            Highest Protein
          </button>
          <button
            onClick={() => setSortBy('price')}
            className={`px-5 py-3 md:px-4 md:py-2 rounded-lg transition-all font-medium text-base md:text-sm ${
              sortBy === 'price' ? 'bg-keto-secondary text-white shadow-md' : 'bg-gray-200 hover:bg-gray-300 text-gray-800 active:bg-gray-400'
            }`}
          >
            Best Price
          </button>
        </div>
      )}

      <div className="text-base md:text-sm font-medium text-gray-700 bg-keto-bg px-4 py-2 rounded-lg">
        {selectedMealType === 'All'
          ? `${filteredRestaurants.length} restaurants`
          : `${getAllMealsByType.length} ${selectedMealType.toLowerCase()} meals`}
      </div>

      {/* Meal List View (when meal type is selected) */}
      {selectedMealType !== 'All' ? (
        <div className="space-y-3">
          {getAllMealsByType.map((meal) => (
            <div
              key={`${meal.restaurantId}-${meal.id}`}
              className={`p-5 md:p-4 rounded-lg border-2 transition-all ${
                meal.isOptimal ? 'border-keto-secondary bg-keto-bg' : 'border-gray-300 bg-white'
              } hover:shadow-lg`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg md:text-base text-gray-900">{meal.name}</h3>
                  <p className="text-sm text-keto-dark font-semibold mt-1">📍 {meal.restaurantName}</p>
                  {meal.description && (
                    <p className="text-sm text-gray-600 mt-2">{meal.description}</p>
                  )}
                </div>
                <div className="flex flex-row md:flex-col gap-4 md:gap-2 md:text-right">
                  <div className="flex-1 md:flex-none">
                    <div className="text-2xl md:text-xl font-bold text-keto-secondary">
                      {meal.carbs}g
                    </div>
                    <div className="text-xs text-gray-600 font-medium">carbs</div>
                  </div>
                  <div className="flex-1 md:flex-none">
                    <div className="text-lg md:text-base font-semibold text-gray-700">
                      {meal.protein}g
                    </div>
                    <div className="text-xs text-gray-600">protein</div>
                  </div>
                  <div className="flex-1 md:flex-none">
                    <div className="text-lg md:text-base font-semibold text-gray-700">
                      {meal.fat}g
                    </div>
                    <div className="text-xs text-gray-600">fat</div>
                  </div>
                  <div className="flex-1 md:flex-none">
                    <div className="text-lg md:text-base font-bold text-keto-dark">
                      ${meal.price?.toFixed(2) || 'N/A'}
                    </div>
                    <div className="text-xs text-gray-600">price</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Restaurant Selection (when meal type is "All") */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredRestaurants.map((restaurant) => (
            <button
              key={restaurant.id}
              onClick={() => handleRestaurantClick(restaurant)}
              className="p-5 md:p-4 rounded-lg border-2 transition-all border-gray-400 hover:border-keto-secondary active:border-keto-dark hover:shadow-lg active:shadow-xl bg-white"
            >
              <div className="font-bold text-lg md:text-base text-gray-900">{restaurant.name}</div>
              <div className="text-sm md:text-xs text-gray-600 mt-2 md:mt-1 font-medium">{restaurant.category}</div>
              <div className="text-base md:text-sm mt-2 md:mt-1 text-keto-secondary font-bold">{restaurant.meals.length} options</div>
            </button>
          ))}
        </div>
      )}

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
            <div className="sticky top-0 bg-white border-b-2 border-gray-300 p-5 md:p-6 z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl md:text-2xl font-bold text-keto-dark">{selectedRestaurant.name}</h3>
                  <p className="text-base md:text-sm text-gray-700 mt-2 md:mt-1 font-medium">{selectedRestaurant.category} - Keto Options</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-600 hover:text-gray-900 active:text-black text-4xl md:text-3xl font-bold leading-none ml-4 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>

              <div className="flex flex-wrap gap-3 md:gap-2">
                <button
                  onClick={() => setSortBy('carbs')}
                  className={`px-5 py-3 md:px-4 md:py-2 rounded-lg transition-all font-medium text-base md:text-sm ${
                    sortBy === 'carbs' ? 'bg-keto-secondary text-white shadow-md' : 'bg-gray-200 hover:bg-gray-300 text-gray-800 active:bg-gray-400'
                  }`}
                >
                  Lowest Carbs
                </button>
                <button
                  onClick={() => setSortBy('protein')}
                  className={`px-5 py-3 md:px-4 md:py-2 rounded-lg transition-all font-medium text-base md:text-sm ${
                    sortBy === 'protein' ? 'bg-keto-secondary text-white shadow-md' : 'bg-gray-200 hover:bg-gray-300 text-gray-800 active:bg-gray-400'
                  }`}
                >
                  Highest Protein
                </button>
                <button
                  onClick={() => setSortBy('price')}
                  className={`px-5 py-3 md:px-4 md:py-2 rounded-lg transition-all font-medium text-base md:text-sm ${
                    sortBy === 'price' ? 'bg-keto-secondary text-white shadow-md' : 'bg-gray-200 hover:bg-gray-300 text-gray-800 active:bg-gray-400'
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
