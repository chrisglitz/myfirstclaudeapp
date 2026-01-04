'use client';

import { useState, useEffect } from 'react';
import { storage } from '@/utils/storage';
import { DailyEntry, ConsumedMeal } from '@/types';

export default function DailyTracker() {
  const [todayEntry, setTodayEntry] = useState<DailyEntry | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMeal, setNewMeal] = useState({
    name: '',
    carbs: '',
    protein: '',
    fat: '',
    calories: '',
    restaurant: ''
  });

  useEffect(() => {
    loadTodayEntry();
  }, []);

  const loadTodayEntry = () => {
    const entry = storage.getTodayEntry();
    if (entry) {
      setTodayEntry(entry);
    } else {
      const today = new Date().toISOString().split('T')[0];
      const newEntry: DailyEntry = {
        id: `entry-${Date.now()}`,
        date: today,
        meals: [],
        totalCarbs: 0,
        totalCalories: 0,
        totalProtein: 0,
        totalFat: 0
      };
      setTodayEntry(newEntry);
    }
  };

  const addMeal = () => {
    if (!todayEntry || !newMeal.name || !newMeal.carbs) return;

    const meal: ConsumedMeal = {
      id: `meal-${Date.now()}`,
      name: newMeal.name,
      carbs: parseFloat(newMeal.carbs) || 0,
      protein: parseFloat(newMeal.protein) || 0,
      fat: parseFloat(newMeal.fat) || 0,
      calories: parseFloat(newMeal.calories) || 0,
      timestamp: new Date().toISOString(),
      restaurant: newMeal.restaurant || undefined
    };

    const updatedEntry: DailyEntry = {
      ...todayEntry,
      meals: [...todayEntry.meals, meal],
      totalCarbs: todayEntry.totalCarbs + meal.carbs,
      totalProtein: todayEntry.totalProtein + meal.protein,
      totalFat: todayEntry.totalFat + meal.fat,
      totalCalories: todayEntry.totalCalories + meal.calories
    };

    storage.saveDailyEntry(updatedEntry);
    setTodayEntry(updatedEntry);
    setNewMeal({ name: '', carbs: '', protein: '', fat: '', calories: '', restaurant: '' });
    setShowAddForm(false);
  };

  const deleteMeal = (mealId: string) => {
    if (!todayEntry) return;

    const mealToDelete = todayEntry.meals.find(m => m.id === mealId);
    if (!mealToDelete) return;

    const updatedEntry: DailyEntry = {
      ...todayEntry,
      meals: todayEntry.meals.filter(m => m.id !== mealId),
      totalCarbs: todayEntry.totalCarbs - mealToDelete.carbs,
      totalProtein: todayEntry.totalProtein - mealToDelete.protein,
      totalFat: todayEntry.totalFat - mealToDelete.fat,
      totalCalories: todayEntry.totalCalories - mealToDelete.calories
    };

    storage.saveDailyEntry(updatedEntry);
    setTodayEntry(updatedEntry);
  };

  if (!todayEntry) return <div>Loading...</div>;

  const carbsRemaining = Math.max(0, 20 - todayEntry.totalCarbs);
  const carbsProgress = Math.min(100, (todayEntry.totalCarbs / 20) * 100);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-keto-primary mb-4">Daily Tracker</h2>
        <p className="text-gray-600">Track your meals and stay within your carb limit</p>
      </div>

      {/* Daily Summary */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Today&apos;s Summary</h3>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Net Carbs</span>
            <span className="font-bold text-keto-primary">
              {todayEntry.totalCarbs.toFixed(1)}g / 20g
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className={`h-4 rounded-full transition-all ${
                carbsProgress > 100 ? 'bg-red-500' : 'bg-keto-primary'
              }`}
              style={{ width: `${Math.min(carbsProgress, 100)}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {carbsRemaining > 0
              ? `${carbsRemaining.toFixed(1)}g remaining`
              : `${(todayEntry.totalCarbs - 20).toFixed(1)}g over limit!`
            }
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {todayEntry.totalProtein.toFixed(0)}g
            </div>
            <div className="text-sm text-gray-600">Protein</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">
              {todayEntry.totalFat.toFixed(0)}g
            </div>
            <div className="text-sm text-gray-600">Fat</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {todayEntry.totalCalories.toFixed(0)}
            </div>
            <div className="text-sm text-gray-600">Calories</div>
          </div>
        </div>
      </div>

      {/* Add Meal Button */}
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="w-full bg-keto-primary text-white py-3 rounded-lg font-semibold hover:bg-keto-secondary transition-colors"
      >
        {showAddForm ? 'Cancel' : '+ Add Meal'}
      </button>

      {/* Add Meal Form */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Add Meal</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Meal name *"
              value={newMeal.name}
              onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Restaurant (optional)"
              value={newMeal.restaurant}
              onChange={(e) => setNewMeal({ ...newMeal, restaurant: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                step="0.1"
                placeholder="Net Carbs (g) *"
                value={newMeal.carbs}
                onChange={(e) => setNewMeal({ ...newMeal, carbs: e.target.value })}
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="number"
                step="0.1"
                placeholder="Protein (g)"
                value={newMeal.protein}
                onChange={(e) => setNewMeal({ ...newMeal, protein: e.target.value })}
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="number"
                step="0.1"
                placeholder="Fat (g)"
                value={newMeal.fat}
                onChange={(e) => setNewMeal({ ...newMeal, fat: e.target.value })}
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Calories"
                value={newMeal.calories}
                onChange={(e) => setNewMeal({ ...newMeal, calories: e.target.value })}
                className="px-4 py-2 border rounded-lg"
              />
            </div>
            <button
              onClick={addMeal}
              className="w-full bg-keto-primary text-white py-2 rounded-lg font-semibold hover:bg-keto-secondary"
            >
              Add Meal
            </button>
          </div>
        </div>
      )}

      {/* Meals List */}
      {todayEntry.meals.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Today&apos;s Meals</h3>
          <div className="space-y-3">
            {todayEntry.meals.map((meal) => (
              <div key={meal.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-bold">{meal.name}</h4>
                    {meal.restaurant && (
                      <p className="text-sm text-gray-600">{meal.restaurant}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(meal.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteMeal(meal.id)}
                    className="text-red-500 hover:text-red-700 font-bold ml-4"
                  >
                    ✕
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-3 text-sm">
                  <div>
                    <span className="font-semibold text-keto-primary">{meal.carbs}g</span>
                    <span className="text-gray-600"> carbs</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-600">{meal.protein}g</span>
                    <span className="text-gray-600"> protein</span>
                  </div>
                  <div>
                    <span className="font-semibold text-orange-600">{meal.fat}g</span>
                    <span className="text-gray-600"> fat</span>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-600">{meal.calories}</span>
                    <span className="text-gray-600"> cal</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
