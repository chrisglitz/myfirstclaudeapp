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
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-keto-primary text-white py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">KetoKompanion</h1>
          <p className="text-green-100">Your complete keto meal & progress tracker</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-fit px-6 py-4 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'text-keto-primary border-b-4 border-keto-primary'
                    : 'text-gray-600 hover:text-keto-primary hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'restaurants' && <RestaurantFinder />}
        {activeTab === 'tracker' && <DailyTracker />}
        {activeTab === 'weight' && <WeightTracker />}
        {activeTab === 'grocery' && <GroceryOptimizer />}
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p className="mb-2">
            <strong>KetoKompanion</strong> - Your on-the-go keto companion
          </p>
          <p className="text-sm">
            Track meals • Monitor weight • Optimize grocery shopping • Find keto-friendly restaurants
          </p>
          <p className="text-xs mt-4 text-gray-500">
            Data stored locally in your browser. No account required.
          </p>
        </div>
      </footer>
    </main>
  );
}
