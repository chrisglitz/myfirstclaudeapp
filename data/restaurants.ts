import { Restaurant } from '@/types';

export const restaurants: Restaurant[] = [
  {
    id: 'mcdonalds',
    name: "McDonald's",
    meals: [
      {
        id: 'mc-1',
        name: 'Bunless Double Quarter Pounder with Cheese',
        carbs: 9,
        protein: 48,
        fat: 42,
        calories: 600,
        price: 7.99,
        isOptimal: true,
        description: 'No bun, no ketchup. Perfect keto option!'
      },
      {
        id: 'mc-2',
        name: 'Bacon Ranch Grilled Chicken Salad (no croutons)',
        carbs: 8,
        protein: 42,
        fat: 23,
        calories: 390,
        price: 7.49,
        isOptimal: true,
        description: 'Remove croutons, use ranch dressing'
      },
      {
        id: 'mc-3',
        name: 'Sausage Burrito (no tortilla)',
        carbs: 6,
        protein: 15,
        fat: 18,
        calories: 250,
        price: 2.99,
        isOptimal: true,
        description: 'Just the filling - great breakfast option'
      },
      {
        id: 'mc-4',
        name: 'Egg McMuffin (no muffin)',
        carbs: 2,
        protein: 18,
        fat: 13,
        calories: 200,
        price: 4.29,
        isOptimal: true,
        description: 'Egg, cheese, and Canadian bacon only'
      }
    ]
  },
  {
    id: 'wawa',
    name: 'Wawa',
    meals: [
      {
        id: 'wawa-1',
        name: 'Build Your Own Bowl - Chicken, Cheese, Veggies',
        carbs: 7,
        protein: 35,
        fat: 22,
        calories: 380,
        price: 8.99,
        isOptimal: true,
        description: 'Grilled chicken, cheddar, lettuce, peppers, ranch'
      },
      {
        id: 'wawa-2',
        name: 'Breakfast Bowl - Eggs, Bacon, Cheese',
        carbs: 4,
        protein: 28,
        fat: 32,
        calories: 420,
        price: 6.99,
        isOptimal: true,
        description: 'Scrambled eggs, bacon, cheese, no potatoes'
      },
      {
        id: 'wawa-3',
        name: 'Turkey & Cheese (no bread)',
        carbs: 3,
        protein: 24,
        fat: 18,
        calories: 280,
        price: 7.49,
        isOptimal: true,
        description: 'Turkey, provolone, lettuce, tomato in a bowl'
      },
      {
        id: 'wawa-4',
        name: 'Chicken Caesar Salad (no croutons)',
        carbs: 6,
        protein: 30,
        fat: 25,
        calories: 370,
        price: 8.49,
        isOptimal: true,
        description: 'Grilled chicken, romaine, parmesan, Caesar dressing'
      }
    ]
  },
  {
    id: 'wegmans',
    name: 'Wegmans',
    meals: [
      {
        id: 'weg-1',
        name: 'Rotisserie Chicken (half)',
        carbs: 0,
        protein: 65,
        fat: 28,
        calories: 520,
        price: 5.99,
        isOptimal: true,
        description: 'Plain rotisserie - remove skin if needed'
      },
      {
        id: 'weg-2',
        name: 'Asian Food Bar - Beef & Broccoli',
        carbs: 8,
        protein: 32,
        fat: 20,
        calories: 340,
        price: 9.99,
        isOptimal: true,
        description: 'Skip the rice, extra veggies'
      },
      {
        id: 'weg-3',
        name: 'Salad Bar - Custom Keto Bowl',
        carbs: 5,
        protein: 25,
        fat: 35,
        calories: 450,
        price: 8.99,
        isOptimal: true,
        description: 'Greens, grilled chicken, cheese, eggs, olives, oil & vinegar'
      },
      {
        id: 'weg-4',
        name: 'Buffalo Chicken Tenders (6pc, naked)',
        carbs: 2,
        protein: 42,
        fat: 18,
        calories: 340,
        price: 7.99,
        isOptimal: true,
        description: 'No breading, buffalo sauce on side'
      }
    ]
  },
  {
    id: 'seasons',
    name: 'Seasons Pizza',
    meals: [
      {
        id: 'sea-1',
        name: 'Chicken Caesar Salad',
        carbs: 8,
        protein: 38,
        fat: 28,
        calories: 440,
        price: 11.99,
        isOptimal: true,
        description: 'No croutons, extra chicken'
      },
      {
        id: 'sea-2',
        name: 'Buffalo Wings (10pc)',
        carbs: 4,
        protein: 52,
        fat: 35,
        calories: 540,
        price: 12.99,
        isOptimal: true,
        description: 'Traditional wings, buffalo sauce'
      },
      {
        id: 'sea-3',
        name: 'Antipasto Salad',
        carbs: 6,
        protein: 22,
        fat: 32,
        calories: 410,
        price: 10.99,
        isOptimal: true,
        description: 'Meats, cheese, olives, peppers, oil & vinegar'
      },
      {
        id: 'sea-4',
        name: 'Cheese Steak Bowl (no bread)',
        carbs: 7,
        protein: 35,
        fat: 38,
        calories: 520,
        price: 13.99,
        isOptimal: true,
        description: 'Steak, cheese, peppers, onions in a bowl'
      }
    ]
  },
  {
    id: 'chipotle',
    name: 'Chipotle',
    meals: [
      {
        id: 'chip-1',
        name: 'Carnitas Salad Bowl',
        carbs: 9,
        protein: 32,
        fat: 28,
        calories: 450,
        price: 11.50,
        isOptimal: true,
        description: 'Carnitas, lettuce, cheese, sour cream, guacamole, salsa'
      },
      {
        id: 'chip-2',
        name: 'Chicken Bowl (no rice/beans)',
        carbs: 7,
        protein: 42,
        fat: 24,
        calories: 420,
        price: 10.95,
        isOptimal: true,
        description: 'Chicken, fajita veggies, cheese, guac, salsa'
      }
    ]
  },
  {
    id: 'subway',
    name: 'Subway',
    meals: [
      {
        id: 'sub-1',
        name: 'Steak & Cheese Protein Bowl',
        carbs: 8,
        protein: 28,
        fat: 22,
        calories: 350,
        price: 9.99,
        isOptimal: true,
        description: 'No bread, double meat, cheese, veggies'
      },
      {
        id: 'sub-2',
        name: 'Chicken & Bacon Ranch Salad',
        carbs: 6,
        protein: 35,
        fat: 25,
        calories: 390,
        price: 9.49,
        isOptimal: true,
        description: 'Grilled chicken, bacon, ranch, cheese, veggies'
      }
    ]
  }
];
