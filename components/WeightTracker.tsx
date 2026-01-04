'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { storage } from '@/utils/storage';
import { WeightEntry } from '@/types';

export default function WeightTracker() {
  const [entries, setEntries] = useState<WeightEntry[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEntry, setNewEntry] = useState({
    date: new Date().toISOString().split('T')[0],
    weight: '',
    notes: ''
  });

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = () => {
    const data = storage.getWeightEntries();
    setEntries(data);
  };

  const addEntry = () => {
    if (!newEntry.weight) return;

    const entry: WeightEntry = {
      id: `weight-${Date.now()}`,
      date: newEntry.date,
      weight: parseFloat(newEntry.weight),
      notes: newEntry.notes || undefined
    };

    storage.saveWeightEntry(entry);
    loadEntries();
    setNewEntry({
      date: new Date().toISOString().split('T')[0],
      weight: '',
      notes: ''
    });
    setShowAddForm(false);
  };

  const deleteEntry = (id: string) => {
    storage.deleteWeightEntry(id);
    loadEntries();
  };

  const chartData = entries.map(entry => ({
    date: new Date(entry.date).toLocaleDateString(),
    weight: entry.weight
  }));

  const stats = {
    current: entries.length > 0 ? entries[entries.length - 1].weight : 0,
    starting: entries.length > 0 ? entries[0].weight : 0,
    lowest: entries.length > 0 ? Math.min(...entries.map(e => e.weight)) : 0,
    highest: entries.length > 0 ? Math.max(...entries.map(e => e.weight)) : 0
  };

  const totalLoss = stats.starting - stats.current;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-keto-primary mb-4">Weight Tracker</h2>
        <p className="text-gray-600">Monitor your progress over time</p>
      </div>

      {/* Stats Overview */}
      {entries.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-keto-primary">{stats.current}</div>
            <div className="text-sm text-gray-600">Current Weight</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-blue-600">{stats.starting}</div>
            <div className="text-sm text-gray-600">Starting Weight</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className={`text-3xl font-bold ${totalLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {totalLoss >= 0 ? '-' : '+'}{Math.abs(totalLoss).toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">Total Change</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-purple-600">{stats.lowest}</div>
            <div className="text-sm text-gray-600">Lowest</div>
          </div>
        </div>
      )}

      {/* Chart */}
      {entries.length > 1 && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Progress Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ fill: '#10b981', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Add Entry Button */}
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="w-full bg-keto-primary text-white py-3 rounded-lg font-semibold hover:bg-keto-secondary transition-colors"
      >
        {showAddForm ? 'Cancel' : '+ Log Weight'}
      </button>

      {/* Add Entry Form */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Log Weight</h3>
          <div className="space-y-4">
            <input
              type="date"
              value={newEntry.date}
              onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="number"
              step="0.1"
              placeholder="Weight (lbs)"
              value={newEntry.weight}
              onChange={(e) => setNewEntry({ ...newEntry, weight: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <textarea
              placeholder="Notes (optional)"
              value={newEntry.notes}
              onChange={(e) => setNewEntry({ ...newEntry, notes: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              rows={3}
            />
            <button
              onClick={addEntry}
              className="w-full bg-keto-primary text-white py-2 rounded-lg font-semibold hover:bg-keto-secondary"
            >
              Save Entry
            </button>
          </div>
        </div>
      )}

      {/* Entries List */}
      {entries.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Weight History</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {[...entries].reverse().map((entry) => (
              <div key={entry.id} className="p-4 border rounded-lg flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-2xl text-keto-primary">{entry.weight} lbs</span>
                    <span className="text-gray-600">{new Date(entry.date).toLocaleDateString()}</span>
                  </div>
                  {entry.notes && (
                    <p className="text-sm text-gray-600 mt-2">{entry.notes}</p>
                  )}
                </div>
                <button
                  onClick={() => deleteEntry(entry.id)}
                  className="text-red-500 hover:text-red-700 font-bold ml-4"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {entries.length === 0 && (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center text-gray-500">
          No weight entries yet. Start tracking your progress by logging your weight!
        </div>
      )}
    </div>
  );
}
