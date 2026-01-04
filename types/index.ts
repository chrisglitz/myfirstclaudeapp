export interface Restaurant {
  id: string;
  name: string;
  category: string;
  meals: Meal[];
}

export interface Meal {
  id: string;
  name: string;
  carbs: number;
  protein: number;
  fat: number;
  calories: number;
  price?: number;
  isOptimal: boolean;
  description?: string;
}

export interface DailyEntry {
  id: string;
  date: string;
  meals: ConsumedMeal[];
  totalCarbs: number;
  totalCalories: number;
  totalProtein: number;
  totalFat: number;
}

export interface ConsumedMeal {
  id: string;
  name: string;
  carbs: number;
  protein: number;
  fat: number;
  calories: number;
  timestamp: string;
  restaurant?: string;
}

export interface WeightEntry {
  id: string;
  date: string;
  weight: number;
  notes?: string;
}

export interface GroceryItem {
  id: string;
  name: string;
  price: number;
  carbs: number;
  protein: number;
  fat: number;
  servings: number;
  carbsPerDollar: number;
}
