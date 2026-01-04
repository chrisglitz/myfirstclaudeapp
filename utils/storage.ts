import { DailyEntry, WeightEntry } from '@/types';

export const storage = {
  // Daily entries
  getDailyEntries: (): DailyEntry[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem('dailyEntries');
    return data ? JSON.parse(data) : [];
  },

  saveDailyEntry: (entry: DailyEntry) => {
    const entries = storage.getDailyEntries();
    const existingIndex = entries.findIndex(e => e.date === entry.date);

    if (existingIndex >= 0) {
      entries[existingIndex] = entry;
    } else {
      entries.push(entry);
    }

    localStorage.setItem('dailyEntries', JSON.stringify(entries));
  },

  getTodayEntry: (): DailyEntry | null => {
    const today = new Date().toISOString().split('T')[0];
    const entries = storage.getDailyEntries();
    return entries.find(e => e.date === today) || null;
  },

  // Weight entries
  getWeightEntries: (): WeightEntry[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem('weightEntries');
    return data ? JSON.parse(data) : [];
  },

  saveWeightEntry: (entry: WeightEntry) => {
    const entries = storage.getWeightEntries();
    const existingIndex = entries.findIndex(e => e.date === entry.date);

    if (existingIndex >= 0) {
      entries[existingIndex] = entry;
    } else {
      entries.push(entry);
    }

    entries.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    localStorage.setItem('weightEntries', JSON.stringify(entries));
  },

  deleteWeightEntry: (id: string) => {
    const entries = storage.getWeightEntries();
    const filtered = entries.filter(e => e.id !== id);
    localStorage.setItem('weightEntries', JSON.stringify(filtered));
  },

  // Clear all data
  clearAllData: () => {
    localStorage.removeItem('dailyEntries');
    localStorage.removeItem('weightEntries');
  }
};
