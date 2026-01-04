'use client';

import { useState, useMemo } from 'react';
import { restaurants } from '@/data/restaurants';
import { Restaurant, Meal } from '@/types';

export default function RestaurantFinder() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [sortBy, setSortBy] = useState<'carbs' | 'protein' | 'price'>('carbs');

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [maxCarbs, setMaxCarbs] = useState<number>(20);
  const [minProtein, setMinProtein] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(50);
  const [showOptimalOnly, setShowOptimalOnly] = useState(false);

  // Filter restaurants by search term
  const filteredRestaurants = useMemo(() => {
    return restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Filter and sort meals
  const filteredAndSortedMeals = useMemo(() => {
    if (!selectedRestaurant) return [];

    let meals = selectedRestaurant.meals.filter(meal => {
      const meetsCarbs = meal.carbs <= maxCarbs;
      const meetsProtein = meal.protein >= minProtein;
      const meetsPrice = !meal.price || meal.price <= maxPrice;
      const meetsOptimal = !showOptimalOnly || meal.isOptimal;

      return meetsCarbs && meetsProtein && meetsPrice && meetsOptimal;
    });

    return [...meals].sort((a, b) => {
      if (sortBy === 'carbs') return a.carbs - b.carbs;
      if (sortBy === 'protein') return b.protein - a.protein;
      if (sortBy === 'price') return (a.price || 0) - (b.price || 0);
      return 0;
    });
  }, [selectedRestaurant, maxCarbs, minProtein, maxPrice, showOptimalOnly, sortBy]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-keto-primary mb-2">Restaurant Finder</h2>
        <p className="text-gray-600 mb-6">Find the best keto meals at your favorite spots - now with {restaurants.length} restaurants!</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Search & Filters</h3>

        {/* Search Bar */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Restaurants
          </label>
          <input
            type="text"
            placeholder="Search by restaurant name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-keto-primary focus:border-transparent"
          />
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Max Carbs Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Carbs: {maxCarbs}g
            </label>
            <input
              type="range"
              min="0"
              max="20"
              value={maxCarbs}
              onChange={(e) => setMaxCarbs(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-keto-primary"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0g</span>
              <span>20g</span>
            </div>
          </div>

          {/* Min Protein Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Min Protein: {minProtein}g
            </label>
            <input
              type="range"
              min="0"
              max="70"
              step="5"
              value={minProtein}
              onChange={(e) => setMinProtein(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0g</span>
              <span>70g</span>
            </div>
          </div>

          {/* Max Price Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Price: ${maxPrice}
            </label>
            <input
              type="range"
              min="0"
              max="50"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$0</span>
              <span>$50</span>
            </div>
          </div>

          {/* Optimal Only Toggle */}
          <div className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showOptimalOnly}
                onChange={(e) => setShowOptimalOnly(e.target.checked)}
                className="w-5 h-5 text-keto-primary border-gray-300 rounded focus:ring-keto-primary"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                Show Optimal Only ⭐
              </span>
            </label>
          </div>
        </div>

        {/* Reset Filters Button */}
        <button
          onClick={() => {
            setSearchTerm('');
            setMaxCarbs(20);
            setMinProtein(0);
            setMaxPrice(50);
            setShowOptimalOnly(false);
          }}
          className="text-sm text-keto-primary hover:text-green-700 font-medium"
        >
          Reset All Filters
        </button>
      </div>

      {/* Restaurant Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Select a Restaurant ({filteredRestaurants.length} available)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filteredRestaurants.map((restaurant) => (
            <button
              key={restaurant.id}
              onClick={() => setSelectedRestaurant(restaurant)}
              className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                selectedRestaurant?.id === restaurant.id
                  ? 'border-keto-primary bg-keto-primary text-white shadow-lg scale-105'
                  : 'border-gray-300 hover:border-keto-primary bg-white'
              }`}
            >
              <div className="font-semibold text-sm">{restaurant.name}</div>
              <div className="text-xs mt-1 opacity-80">{restaurant.meals.length} options</div>
            </button>
          ))}
        </div>
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No restaurants match your search. Try a different search term.
          </div>
        )}
      </div>

      {/* Meal Display */}
      {selectedRestaurant && (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{selectedRestaurant.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Showing {filteredAndSortedMeals.length} of {selectedRestaurant.meals.length} meals
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSortBy('carbs')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  sortBy === 'carbs'
                    ? 'bg-keto-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Lowest Carbs
              </button>
              <button
                onClick={() => setSortBy('protein')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  sortBy === 'protein'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Highest Protein
              </button>
              <button
                onClick={() => setSortBy('price')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  sortBy === 'price'
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Best Price
              </button>
            </div>
          </div>

          {filteredAndSortedMeals.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg font-medium">No meals match your current filters</p>
              <p className="text-sm mt-2">Try adjusting the filters above to see more options</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredAndSortedMeals.map((meal) => (
                <div
                  key={meal.id}
                  className={`p-5 rounded-lg border-2 transition-all hover:shadow-md ${
                    meal.isOptimal
                      ? 'border-keto-primary bg-gradient-to-r from-green-50 to-white'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-start gap-2">
                        <h4 className="font-bold text-lg text-gray-800">{meal.name}</h4>
                        {meal.isOptimal && (
                          <span className="text-lg">⭐</span>
                        )}
                      </div>
                      {meal.description && (
                        <p className="text-sm text-gray-600 mt-1">{meal.description}</p>
                      )}
                    </div>
                    {meal.price && (
                      <div className="text-xl font-bold text-keto-primary">
                        ${meal.price.toFixed(2)}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-4 gap-3 mt-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-keto-primary">{meal.carbs}g</div>
                      <div className="text-xs text-gray-600 font-medium">Net Carbs</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{meal.protein}g</div>
                      <div className="text-xs text-gray-600 font-medium">Protein</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{meal.fat}g</div>
                      <div className="text-xs text-gray-600 font-medium">Fat</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{meal.calories}</div>
                      <div className="text-xs text-gray-600 font-medium">Calories</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
