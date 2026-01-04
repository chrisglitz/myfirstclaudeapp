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
    { id: 'restaurants' as Tab, name: 'Restaurants', icon: '🍔' },
    { id: 'tracker' as Tab, name: 'Daily Tracker', icon: '📊' },
    { id: 'weight' as Tab, name: 'Weight', icon: '⚖️' },
    { id: 'grocery' as Tab, name: 'Grocery', icon: '🛒' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header - Apple Style */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">KetoKompanion</h1>
          <p className="text-base text-gray-600 mt-1">Your complete keto meal & progress tracker</p>
        </div>
      </div>

      {/* Navigation Tabs - iOS Style */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 backdrop-blur-lg bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-6 py-4 font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="mr-2 text-lg">{tab.icon}</span>
                <span>{tab.name}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'restaurants' && <RestaurantFinder />}
        {activeTab === 'tracker' && <DailyTracker />}
        {activeTab === 'weight' && <WeightTracker />}
        {activeTab === 'grocery' && <GroceryOptimizer />}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            KetoKompanion
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Track meals · Monitor weight · Optimize groceries · Find keto venues
          </p>
          <p className="text-xs text-gray-500">
            Data stored locally in your browser. No account required.
          </p>
        </div>
      </footer>
    </main>
  );
}
