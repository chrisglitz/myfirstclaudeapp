'use client';

import { useState } from 'react';
import { restaurants } from '@/data/restaurants';
import { Restaurant, Meal } from '@/types';

export default function RestaurantFinder() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [sortBy, setSortBy] = useState<'carbs' | 'protein' | 'price'>('carbs');

  const sortedMeals = (meals: Meal[]) => {
    return [...meals].sort((a, b) => {
      if (sortBy === 'carbs') return a.carbs - b.carbs;
      if (sortBy === 'protein') return b.protein - a.protein;
      if (sortBy === 'price') return (a.price || 0) - (b.price || 0);
      return 0;
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-keto-primary mb-4">Restaurant Finder</h2>
        <p className="text-gray-600 mb-4">Find the best keto meals at your favorite spots</p>
      </div>

      {/* Restaurant Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => setSelectedRestaurant(restaurant)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedRestaurant?.id === restaurant.id
                ? 'border-keto-primary bg-keto-primary text-white'
                : 'border-gray-300 hover:border-keto-primary'
            }`}
          >
            <div className="font-semibold">{restaurant.name}</div>
            <div className="text-sm mt-1 opacity-80">{restaurant.meals.length} options</div>
          </button>
        ))}
      </div>

      {/* Meal Display */}
      {selectedRestaurant && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">{selectedRestaurant.name} - Keto Options</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy('carbs')}
                className={`px-3 py-1 rounded ${
                  sortBy === 'carbs' ? 'bg-keto-primary text-white' : 'bg-gray-200'
                }`}
              >
                Lowest Carbs
              </button>
              <button
                onClick={() => setSortBy('protein')}
                className={`px-3 py-1 rounded ${
                  sortBy === 'protein' ? 'bg-keto-primary text-white' : 'bg-gray-200'
                }`}
              >
                Highest Protein
              </button>
              <button
                onClick={() => setSortBy('price')}
                className={`px-3 py-1 rounded ${
                  sortBy === 'price' ? 'bg-keto-primary text-white' : 'bg-gray-200'
                }`}
              >
                Best Price
              </button>
            </div>
          </div>

          <div className="grid gap-4">
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
      )}
    </div>
  );
}
