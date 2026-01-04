'use client';

import { useState } from 'react';
import { groceryItems } from '@/data/groceryItems';
import { GroceryItem } from '@/types';

export default function GroceryOptimizer() {
  const [budget, setBudget] = useState('');
  const [recommendations, setRecommendations] = useState<GroceryItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<Map<string, number>>(new Map());

  const optimizeForBudget = () => {
    const budgetAmount = parseFloat(budget);
    if (!budgetAmount || budgetAmount <= 0) return;

    // Sort items by best value (low carbs per dollar, high protein)
    const sortedItems = [...groceryItems].sort((a, b) => {
      const aValue = (a.protein / a.price) - (a.carbsPerDollar * 0.5);
      const bValue = (b.protein / b.price) - (b.carbsPerDollar * 0.5);
      return bValue - aValue;
    });

    // Greedy algorithm to fill budget
    const selected = new Map<string, number>();
    let remaining = budgetAmount;
    const recommended: GroceryItem[] = [];

    // Ensure basics (protein, fat, veggies)
    const categories = {
      protein: sortedItems.filter(item =>
        ['Eggs', 'Chicken', 'Beef', 'Bacon', 'Salmon'].some(p => item.name.includes(p))
      ),
      dairy: sortedItems.filter(item =>
        ['Cheese', 'Cream', 'Butter'].some(p => item.name.includes(p))
      ),
      veggies: sortedItems.filter(item =>
        ['Spinach', 'Broccoli', 'Cauliflower', 'Avocado', 'Lettuce', 'Peppers'].some(p => item.name.includes(p))
      ),
      other: sortedItems
    };

    // Balanced selection
    let itemsToAdd: GroceryItem[] = [];

    // Add at least 2 proteins
    itemsToAdd.push(...categories.protein.slice(0, 2));
    // Add 1-2 dairy items
    itemsToAdd.push(...categories.dairy.slice(0, 2));
    // Add 2-3 veggies
    itemsToAdd.push(...categories.veggies.slice(0, 3));

    // Fill remaining budget with best value items
    for (const item of itemsToAdd) {
      if (remaining >= item.price && !selected.has(item.id)) {
        const qty = Math.floor(remaining / item.price);
        if (qty > 0) {
          selected.set(item.id, Math.min(qty, 3)); // Max 3 of each item
          recommended.push(item);
          remaining -= item.price * Math.min(qty, 3);
        }
      }
    }

    // Fill any remaining budget
    for (const item of sortedItems) {
      if (remaining >= item.price && !selected.has(item.id)) {
        const qty = Math.floor(remaining / item.price);
        if (qty > 0) {
          selected.set(item.id, Math.min(qty, 2));
          recommended.push(item);
          remaining -= item.price * Math.min(qty, 2);
        }
      }
    }

    setRecommendations(recommended);
    setSelectedItems(selected);
  };

  const getTotalCost = () => {
    let total = 0;
    selectedItems.forEach((qty, itemId) => {
      const item = groceryItems.find(i => i.id === itemId);
      if (item) total += item.price * qty;
    });
    return total;
  };

  const getTotalNutrition = () => {
    let carbs = 0, protein = 0, fat = 0;
    selectedItems.forEach((qty, itemId) => {
      const item = groceryItems.find(i => i.id === itemId);
      if (item) {
        carbs += item.carbs * qty;
        protein += item.protein * qty;
        fat += item.fat * qty;
      }
    });
    return { carbs, protein, fat };
  };

  const updateQuantity = (itemId: string, qty: number) => {
    const newSelected = new Map(selectedItems);
    if (qty <= 0) {
      newSelected.delete(itemId);
      setRecommendations(recommendations.filter(r => r.id !== itemId));
    } else {
      newSelected.set(itemId, qty);
    }
    setSelectedItems(newSelected);
  };

  const nutrition = getTotalNutrition();
  const totalCost = getTotalCost();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-keto-primary mb-4">Grocery Budget Optimizer</h2>
        <p className="text-gray-600">Get the best keto groceries for your budget</p>
      </div>

      {/* Budget Input */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Enter Your Budget</h3>
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <span className="absolute left-4 top-3 text-gray-500 text-lg">$</span>
            <input
              type="number"
              step="0.01"
              placeholder="50.00"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full pl-8 pr-4 py-2 border-2 border-gray-300 rounded-lg text-lg"
            />
          </div>
          <button
            onClick={optimizeForBudget}
            className="px-8 py-2 bg-keto-primary text-white rounded-lg font-semibold hover:bg-keto-secondary transition-colors"
          >
            Optimize
          </button>
        </div>
      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <>
          {/* Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Shopping List Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-keto-primary">
                  ${totalCost.toFixed(2)}
                </div>
                <div className="text-sm text-gray-600">Total Cost</div>
                <div className="text-xs text-gray-500 mt-1">
                  of ${budget} budget
                </div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-keto-primary">
                  {nutrition.carbs.toFixed(0)}g
                </div>
                <div className="text-sm text-gray-600">Total Carbs</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {nutrition.protein.toFixed(0)}g
                </div>
                <div className="text-sm text-gray-600">Total Protein</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {nutrition.fat.toFixed(0)}g
                </div>
                <div className="text-sm text-gray-600">Total Fat</div>
              </div>
            </div>
          </div>

          {/* Items List */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Recommended Items</h3>
            <div className="space-y-3">
              {recommendations.map((item) => {
                const qty = selectedItems.get(item.id) || 1;
                return (
                  <div key={item.id} className="p-4 border-2 border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{item.name}</h4>
                        <p className="text-sm text-gray-600">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, qty - 1)}
                          className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 font-bold"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-bold">{qty}</span>
                        <button
                          onClick={() => updateQuantity(item.id, qty + 1)}
                          className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 font-bold"
                        >
                          +
                        </button>
                        <div className="ml-4 text-lg font-bold text-keto-primary">
                          ${(item.price * qty).toFixed(2)}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-keto-primary font-semibold">
                          {(item.carbs * qty).toFixed(1)}g
                        </span>
                        <span className="text-gray-600"> carbs</span>
                      </div>
                      <div>
                        <span className="text-blue-600 font-semibold">
                          {(item.protein * qty).toFixed(1)}g
                        </span>
                        <span className="text-gray-600"> protein</span>
                      </div>
                      <div>
                        <span className="text-orange-600 font-semibold">
                          {(item.fat * qty).toFixed(1)}g
                        </span>
                        <span className="text-gray-600"> fat</span>
                      </div>
                    </div>

                    <div className="mt-2 text-xs text-gray-500">
                      {item.servings * qty} servings total
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* All Items Reference */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">All Available Items</h3>
        <div className="grid md:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
          {groceryItems.map((item) => (
            <div key={item.id} className="p-3 border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-keto-primary font-bold">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="text-right text-sm">
                  <div><span className="font-semibold">{item.carbs}g</span> carbs</div>
                  <div><span className="font-semibold">{item.protein}g</span> protein</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
