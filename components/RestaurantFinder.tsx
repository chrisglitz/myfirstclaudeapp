'use client';

import { useState, useMemo } from 'react';
import { restaurants } from '@/data/restaurants';
import { Restaurant, Meal, VenueCategory } from '@/types';

export default function RestaurantFinder() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [sortBy, setSortBy] = useState<'carbs' | 'protein' | 'price'>('carbs');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<VenueCategory | 'All'>('All');

  // Get unique categories
  const categories: (VenueCategory | 'All')[] = useMemo(() => {
    const uniqueCategories = Array.from(new Set(restaurants.map(r => r.category)));
    return ['All', ...uniqueCategories.sort()];
  }, []);

  // Filter restaurants based on search and category
  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(r => r.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(r =>
        r.name.toLowerCase().includes(query) ||
        r.category.toLowerCase().includes(query) ||
        r.meals.some(m => m.name.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const sortedMeals = (meals: Meal[]) => {
    return [...meals].sort((a, b) => {
      if (sortBy === 'carbs') return a.carbs - b.carbs;
      if (sortBy === 'protein') return b.protein - a.protein;
      if (sortBy === 'price') return (a.price || 0) - (b.price || 0);
      return 0;
    });
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Restaurants & Venues</h2>
        <p className="text-base text-gray-600">
          {restaurants.length} venues · {restaurants.reduce((sum, r) => sum + r.meals.length, 0)} keto-friendly meals
        </p>
      </div>

      {/* Search Bar - Mobile Friendly */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search restaurants or meals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-base bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills - Horizontal Scroll */}
        <div className="px-4 pb-4">
          <div className="flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      {(searchQuery || selectedCategory !== 'All') && (
        <div className="text-sm text-gray-600">
          Found {filteredRestaurants.length} {filteredRestaurants.length === 1 ? 'venue' : 'venues'}
        </div>
      )}

      {/* Restaurant Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {filteredRestaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => setSelectedRestaurant(restaurant)}
            className={`group relative p-5 rounded-2xl border-2 transition-all duration-200 text-left ${
              selectedRestaurant?.id === restaurant.id
                ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                : 'border-gray-200 hover:border-blue-300 hover:shadow-md bg-white'
            }`}
          >
            <div className="space-y-2">
              <div className={`font-semibold text-base leading-tight ${
                selectedRestaurant?.id === restaurant.id ? 'text-blue-700' : 'text-gray-900'
              }`}>
                {restaurant.name}
              </div>
              <div className="flex flex-col gap-1">
                <div className={`text-xs font-medium ${
                  selectedRestaurant?.id === restaurant.id ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {restaurant.category}
                </div>
                <div className={`text-xs ${
                  selectedRestaurant?.id === restaurant.id ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {restaurant.meals.length} {restaurant.meals.length === 1 ? 'option' : 'options'}
                </div>
              </div>
            </div>
            {selectedRestaurant?.id === restaurant.id && (
              <div className="absolute top-2 right-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* No Results */}
      {filteredRestaurants.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No venues found</h3>
          <p className="mt-2 text-sm text-gray-500">Try adjusting your search or filter</p>
        </div>
      )}

      {/* Meal Display */}
      {selectedRestaurant && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-6 text-white">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-1">{selectedRestaurant.name}</h3>
                <p className="text-blue-100 text-sm">{selectedRestaurant.category}</p>
              </div>
              <button
                onClick={() => setSelectedRestaurant(null)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sort Options */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSortBy('carbs')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  sortBy === 'carbs'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Lowest Carbs
              </button>
              <button
                onClick={() => setSortBy('protein')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  sortBy === 'protein'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Highest Protein
              </button>
              <button
                onClick={() => setSortBy('price')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  sortBy === 'price'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Best Price
              </button>
            </div>
          </div>

          {/* Meals List */}
          <div className="divide-y divide-gray-100">
            {sortedMeals(selectedRestaurant.meals).map((meal) => (
              <div
                key={meal.id}
                className={`p-5 hover:bg-gray-50 transition-colors ${
                  meal.isOptimal ? 'bg-green-50/50' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-base mb-1 leading-snug">
                      {meal.name}
                    </h4>
                    {meal.description && (
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {meal.description}
                      </p>
                    )}
                  </div>
                  {meal.price && (
                    <div className="text-lg font-bold text-blue-600 flex-shrink-0">
                      ${meal.price.toFixed(2)}
                    </div>
                  )}
                </div>

                {/* Nutrition Stats */}
                <div className="grid grid-cols-4 gap-3">
                  <div className="bg-white rounded-xl p-3 text-center border border-gray-200">
                    <div className="text-xl font-bold text-green-600">{meal.carbs}g</div>
                    <div className="text-xs text-gray-600 mt-0.5">Carbs</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center border border-gray-200">
                    <div className="text-xl font-bold text-blue-600">{meal.protein}g</div>
                    <div className="text-xs text-gray-600 mt-0.5">Protein</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center border border-gray-200">
                    <div className="text-xl font-bold text-orange-600">{meal.fat}g</div>
                    <div className="text-xs text-gray-600 mt-0.5">Fat</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center border border-gray-200">
                    <div className="text-xl font-bold text-purple-600">{meal.calories}</div>
                    <div className="text-xs text-gray-600 mt-0.5">Cal</div>
                  </div>
                </div>

                {meal.isOptimal && (
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Optimal Keto Choice
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
