'use client';

import { useState } from 'react';
import RestaurantFinder from '@/components/RestaurantFinder';
import DailyTracker from '@/components/DailyTracker';
import WeightTracker from '@/components/WeightTracker';
import GroceryOptimizer from '@/components/GroceryOptimizer';

type Tab = 'restaurants' | 'tracker' | 'weight' | 'grocery';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('restaurants');

  const tabs = [
    { id: 'restaurants' as Tab, name: 'Restaurants', icon: '🍔', description: '56 locations' },
    { id: 'tracker' as Tab, name: 'Daily Tracker', icon: '📊', description: 'Track macros' },
    { id: 'weight' as Tab, name: 'Weight', icon: '⚖️', description: 'Monitor progress' },
    { id: 'grocery' as Tab, name: 'Grocery', icon: '🛒', description: 'Budget optimizer' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-keto-primary to-green-700 text-white py-8 px-4 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold mb-2 tracking-tight">KetoKompanion</h1>
              <p className="text-green-100 text-lg">Your complete keto meal & progress tracker</p>
            </div>
            <div className="hidden md:block text-6xl">🥑</div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Tabs */}
      <div className="bg-white shadow-lg sticky top-0 z-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-fit px-6 py-4 font-semibold transition-all duration-200 relative group ${
                  activeTab === tab.id
                    ? 'text-keto-primary bg-green-50'
                    : 'text-gray-600 hover:text-keto-primary hover:bg-gray-50'
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{tab.icon}</span>
                    <span>{tab.name}</span>
                  </div>
                  <span className="text-xs opacity-70">{tab.description}</span>
                </div>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-keto-primary rounded-t-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content with fade-in animation */}
      <div className="max-w-7xl mx-auto px-4 py-8 animate-fadeIn">
        {activeTab === 'restaurants' && <RestaurantFinder />}
        {activeTab === 'tracker' && <DailyTracker />}
        {activeTab === 'weight' && <WeightTracker />}
        {activeTab === 'grocery' && <GroceryOptimizer />}
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-100 to-gray-200 mt-16 py-10 px-4 border-t border-gray-300">
        <div className="max-w-7xl mx-auto text-center text-gray-700">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-keto-primary mb-2">KetoKompanion</h3>
            <p className="text-sm text-gray-600">Your on-the-go keto companion</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 max-w-3xl mx-auto">
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-1">🍔</div>
              <div className="text-sm font-semibold">56 Restaurants</div>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-1">📊</div>
              <div className="text-sm font-semibold">Track Macros</div>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-1">⚖️</div>
              <div className="text-sm font-semibold">Monitor Weight</div>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-1">🛒</div>
              <div className="text-sm font-semibold">Budget Optimizer</div>
            </div>
          </div>

          <p className="text-xs text-gray-500 max-w-md mx-auto">
            All data is stored locally in your browser. No account required. Your privacy is our priority.
          </p>
        </div>
      </footer>
    </main>
  );
}
