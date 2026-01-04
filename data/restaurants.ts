import { Restaurant } from '@/types';

export const restaurants: Restaurant[] = [
  // Fast Food
  {
    id: 'mcdonalds',
    name: "McDonald's",
    category: 'Fast Food',
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
      },
      {
        id: 'mc-5',
        name: 'Big Mac (no bun, no Mac sauce)',
        carbs: 7,
        protein: 25,
        fat: 28,
        calories: 380,
        price: 6.49,
        isOptimal: true,
        description: 'Two beef patties, lettuce, cheese, pickles, onions'
      },
      {
        id: 'mc-6',
        name: 'Sausage McMuffin with Egg (no muffin)',
        carbs: 3,
        protein: 21,
        fat: 24,
        calories: 310,
        price: 4.99,
        isOptimal: true,
        description: 'Sausage, egg, and cheese'
      }
    ]
  },
  {
    id: 'burgerking',
    name: 'Burger King',
    category: 'Fast Food',
    meals: [
      {
        id: 'bk-1',
        name: 'Whopper (no bun)',
        carbs: 9,
        protein: 28,
        fat: 35,
        calories: 470,
        price: 7.99,
        isOptimal: true,
        description: 'Flame-grilled beef, cheese, veggies, no ketchup or bun'
      },
      {
        id: 'bk-2',
        name: 'Bacon King (no bun)',
        carbs: 7,
        protein: 48,
        fat: 54,
        calories: 720,
        price: 9.99,
        isOptimal: true,
        description: 'Two patties, bacon, cheese, special sauce'
      },
      {
        id: 'bk-3',
        name: 'Sausage, Egg & Cheese Croissant (no croissant)',
        carbs: 4,
        protein: 20,
        fat: 26,
        calories: 340,
        price: 5.49,
        isOptimal: true,
        description: 'Sausage patty, egg, American cheese'
      },
      {
        id: 'bk-4',
        name: 'Grilled Chicken Garden Salad',
        carbs: 8,
        protein: 33,
        fat: 19,
        calories: 350,
        price: 7.99,
        isOptimal: true,
        description: 'Grilled chicken, mixed greens, veggies, ranch'
      }
    ]
  },
  {
    id: 'wendys',
    name: "Wendy's",
    category: 'Fast Food',
    meals: [
      {
        id: 'wen-1',
        name: 'Baconator (no bun)',
        carbs: 6,
        protein: 52,
        fat: 48,
        calories: 660,
        price: 9.49,
        isOptimal: true,
        description: 'Two beef patties, bacon, cheese, mayo - ask for lettuce wrap'
      },
      {
        id: 'wen-2',
        name: 'Southwest Avocado Chicken Salad',
        carbs: 9,
        protein: 42,
        fat: 28,
        calories: 450,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken, avocado, bacon, no tortilla strips'
      },
      {
        id: 'wen-3',
        name: 'Apple Pecan Chicken Salad (no apples)',
        carbs: 7,
        protein: 38,
        fat: 32,
        calories: 460,
        price: 9.99,
        isOptimal: true,
        description: 'Remove apples and cranberries, extra pecans'
      },
      {
        id: 'wen-4',
        name: "Dave's Double (no bun)",
        carbs: 8,
        protein: 48,
        fat: 44,
        calories: 620,
        price: 8.99,
        isOptimal: true,
        description: 'Two quarter-pound patties, cheese, lettuce, tomato'
      },
      {
        id: 'wen-5',
        name: 'Breakfast Baconator (no bun)',
        carbs: 5,
        protein: 35,
        fat: 42,
        calories: 550,
        price: 7.99,
        isOptimal: true,
        description: 'Sausage, bacon, eggs, cheese, mayo'
      }
    ]
  },
  {
    id: 'fiveguys',
    name: 'Five Guys',
    category: 'Fast Food',
    meals: [
      {
        id: 'fg-1',
        name: 'Bacon Cheeseburger Bowl',
        carbs: 8,
        protein: 46,
        fat: 54,
        calories: 700,
        price: 11.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger, all toppings, no bun'
      },
      {
        id: 'fg-2',
        name: 'Little Bunless Burger',
        carbs: 5,
        protein: 22,
        fat: 26,
        calories: 340,
        price: 8.49,
        isOptimal: true,
        description: 'Single patty, cheese, veggies, no bun'
      },
      {
        id: 'fg-3',
        name: 'Bunless Burger with Jalapeños',
        carbs: 7,
        protein: 30,
        fat: 38,
        calories: 480,
        price: 9.99,
        isOptimal: true,
        description: 'Two patties, cheese, jalapeños, grilled onions'
      },
      {
        id: 'fg-4',
        name: 'Hot Dog (no bun)',
        carbs: 3,
        protein: 15,
        fat: 22,
        calories: 280,
        price: 6.99,
        isOptimal: true,
        description: 'All-beef hot dog with toppings, no bun'
      }
    ]
  },
  {
    id: 'chickfila',
    name: 'Chick-fil-A',
    category: 'Fast Food',
    meals: [
      {
        id: 'cfa-1',
        name: 'Grilled Chicken Nuggets (12pc)',
        carbs: 3,
        protein: 38,
        fat: 7,
        calories: 220,
        price: 7.99,
        isOptimal: true,
        description: 'Perfect protein, minimal carbs'
      },
      {
        id: 'cfa-2',
        name: 'Cobb Salad (no corn)',
        carbs: 9,
        protein: 40,
        fat: 28,
        calories: 430,
        price: 10.49,
        isOptimal: true,
        description: 'Grilled chicken, bacon, eggs, cheese, avocado lime ranch'
      },
      {
        id: 'cfa-3',
        name: 'Grilled Chicken Club (no bun)',
        carbs: 4,
        protein: 37,
        fat: 18,
        calories: 320,
        price: 8.99,
        isOptimal: true,
        description: 'Grilled chicken, bacon, cheese, lettuce, tomato'
      },
      {
        id: 'cfa-4',
        name: 'Spicy Southwest Salad (no corn)',
        carbs: 8,
        protein: 35,
        fat: 24,
        calories: 390,
        price: 10.49,
        isOptimal: true,
        description: 'Spicy grilled chicken, peppers, cheese'
      },
      {
        id: 'cfa-5',
        name: 'Grilled Market Salad (no fruit)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 350,
        price: 10.29,
        isOptimal: true,
        description: 'Grilled chicken, greens, blue cheese, nuts'
      }
    ]
  },
  {
    id: 'shakeshack',
    name: 'Shake Shack',
    category: 'Fast Food',
    meals: [
      {
        id: 'ss-1',
        name: 'ShackBurger (lettuce wrap)',
        carbs: 9,
        protein: 25,
        fat: 36,
        calories: 470,
        price: 9.49,
        isOptimal: true,
        description: 'Beef patty, cheese, lettuce, tomato, ShackSauce'
      },
      {
        id: 'ss-2',
        name: 'SmokeShack (lettuce wrap)',
        carbs: 8,
        protein: 28,
        fat: 42,
        calories: 540,
        price: 10.99,
        isOptimal: true,
        description: 'Burger with bacon, cherry peppers, ShackSauce'
      },
      {
        id: 'ss-3',
        name: 'Chicken Shack (lettuce wrap)',
        carbs: 7,
        protein: 32,
        fat: 26,
        calories: 390,
        price: 9.99,
        isOptimal: false,
        description: 'Crispy chicken, lettuce, pickles - ask to remove breading'
      }
    ]
  },
  {
    id: 'innout',
    name: 'In-N-Out Burger',
    category: 'Fast Food',
    meals: [
      {
        id: 'ino-1',
        name: 'Double-Double Protein Style',
        carbs: 8,
        protein: 33,
        fat: 39,
        calories: 520,
        price: 6.99,
        isOptimal: true,
        description: 'Two patties, cheese, lettuce-wrapped, no spread'
      },
      {
        id: 'ino-2',
        name: '3x3 Protein Style',
        carbs: 9,
        protein: 48,
        fat: 54,
        calories: 720,
        price: 8.99,
        isOptimal: true,
        description: 'Triple meat, triple cheese, lettuce wrap'
      },
      {
        id: 'ino-3',
        name: '4x4 Protein Style',
        carbs: 10,
        protein: 64,
        fat: 72,
        calories: 960,
        price: 10.99,
        isOptimal: true,
        description: 'Four patties, four cheese, lettuce wrap'
      }
    ]
  },
  {
    id: 'arbys',
    name: "Arby's",
    category: 'Fast Food',
    meals: [
      {
        id: 'arb-1',
        name: 'Roast Beef Classic (no bun)',
        carbs: 4,
        protein: 23,
        fat: 14,
        calories: 240,
        price: 6.99,
        isOptimal: true,
        description: 'Thin-sliced roast beef, ask for lettuce wrap'
      },
      {
        id: 'arb-2',
        name: 'Farmhouse Salad (crispy chicken removed)',
        carbs: 8,
        protein: 32,
        fat: 28,
        calories: 410,
        price: 8.99,
        isOptimal: true,
        description: 'Swap crispy for roast beef, bacon, cheese, ranch'
      },
      {
        id: 'arb-3',
        name: 'Half Pound Beef n Cheddar (no bun)',
        carbs: 7,
        protein: 42,
        fat: 32,
        calories: 480,
        price: 8.99,
        isOptimal: true,
        description: 'Roast beef, cheddar sauce, no bun'
      },
      {
        id: 'arb-4',
        name: 'Turkey & Swiss (no bun)',
        carbs: 5,
        protein: 28,
        fat: 20,
        calories: 310,
        price: 7.49,
        isOptimal: true,
        description: 'Sliced turkey, Swiss cheese, lettuce wrap'
      }
    ]
  },
  {
    id: 'popeyes',
    name: 'Popeyes',
    category: 'Fast Food',
    meals: [
      {
        id: 'pop-1',
        name: 'Blackened Chicken Tenders (3pc)',
        carbs: 2,
        protein: 26,
        fat: 4,
        calories: 150,
        price: 6.99,
        isOptimal: true,
        description: 'Grilled, not breaded - perfect keto option'
      },
      {
        id: 'pop-2',
        name: 'Chicken (skin on, breading removed)',
        carbs: 5,
        protein: 38,
        fat: 42,
        calories: 520,
        price: 8.99,
        isOptimal: true,
        description: 'Remove breading, keep the skin for fat'
      },
      {
        id: 'pop-3',
        name: 'Blackened Chicken Sandwich (no bun)',
        carbs: 3,
        protein: 35,
        fat: 18,
        calories: 310,
        price: 7.99,
        isOptimal: true,
        description: 'Blackened chicken breast, mayo, pickles'
      },
      {
        id: 'pop-4',
        name: 'Green Beans (side)',
        carbs: 5,
        protein: 2,
        fat: 2,
        calories: 40,
        price: 2.99,
        isOptimal: true,
        description: 'Low-carb veggie side'
      }
    ]
  },
  {
    id: 'kfc',
    name: 'KFC',
    category: 'Fast Food',
    meals: [
      {
        id: 'kfc-1',
        name: 'Grilled Chicken Breast',
        carbs: 0,
        protein: 38,
        fat: 9,
        calories: 220,
        price: 6.99,
        isOptimal: true,
        description: 'Kentucky Grilled Chicken - no breading'
      },
      {
        id: 'kfc-2',
        name: 'Green Beans (side)',
        carbs: 4,
        protein: 2,
        fat: 1,
        calories: 30,
        price: 2.99,
        isOptimal: true,
        description: 'Low-carb veggie side'
      },
      {
        id: 'kfc-3',
        name: 'Grilled Chicken Thigh',
        carbs: 0,
        protein: 22,
        fat: 16,
        calories: 230,
        price: 5.99,
        isOptimal: true,
        description: 'Juicy grilled thigh, no breading'
      },
      {
        id: 'kfc-4',
        name: 'Cole Slaw (small)',
        carbs: 8,
        protein: 1,
        fat: 5,
        calories: 90,
        price: 2.99,
        isOptimal: false,
        description: 'Moderate carbs, use sparingly'
      }
    ]
  },

  // Mexican
  {
    id: 'chipotle',
    name: 'Chipotle',
    category: 'Mexican',
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
      },
      {
        id: 'chip-3',
        name: 'Steak Bowl (no rice/beans)',
        carbs: 8,
        protein: 38,
        fat: 26,
        calories: 440,
        price: 12.50,
        isOptimal: true,
        description: 'Steak, fajita veggies, cheese, sour cream, guac'
      },
      {
        id: 'chip-4',
        name: 'Barbacoa Bowl (no rice/beans)',
        carbs: 7,
        protein: 35,
        fat: 22,
        calories: 390,
        price: 12.50,
        isOptimal: true,
        description: 'Barbacoa beef, lettuce, cheese, salsa, guac'
      }
    ]
  },
  {
    id: 'tacobell',
    name: 'Taco Bell',
    category: 'Mexican',
    meals: [
      {
        id: 'tb-1',
        name: 'Power Bowl (no rice, beans, tortilla)',
        carbs: 9,
        protein: 26,
        fat: 22,
        calories: 350,
        price: 7.99,
        isOptimal: true,
        description: 'Chicken, lettuce, cheese, guac, sour cream, salsa'
      },
      {
        id: 'tb-2',
        name: 'Steak & Cheese (no tortilla)',
        carbs: 5,
        protein: 18,
        fat: 16,
        calories: 240,
        price: 5.99,
        isOptimal: true,
        description: 'Just the filling in a bowl'
      },
      {
        id: 'tb-3',
        name: 'Shredded Chicken Bowl (no rice/beans)',
        carbs: 8,
        protein: 24,
        fat: 18,
        calories: 310,
        price: 6.99,
        isOptimal: true,
        description: 'Shredded chicken, lettuce, cheese, sour cream'
      }
    ]
  },
  {
    id: 'qdoba',
    name: 'Qdoba',
    category: 'Mexican',
    meals: [
      {
        id: 'qdo-1',
        name: 'Steak Bowl (no rice/beans)',
        carbs: 8,
        protein: 35,
        fat: 26,
        calories: 420,
        price: 11.49,
        isOptimal: true,
        description: 'Steak, fajita veggies, guac, cheese, sour cream'
      },
      {
        id: 'qdo-2',
        name: 'Chicken Protein Bowl',
        carbs: 7,
        protein: 40,
        fat: 20,
        calories: 380,
        price: 10.99,
        isOptimal: true,
        description: 'Grilled chicken, veggies, cheese, salsa, no carbs'
      },
      {
        id: 'qdo-3',
        name: 'Ground Beef Bowl (no rice/beans)',
        carbs: 9,
        protein: 32,
        fat: 28,
        calories: 430,
        price: 10.99,
        isOptimal: true,
        description: 'Seasoned ground beef, lettuce, cheese, sour cream'
      }
    ]
  },
  {
    id: 'moes',
    name: "Moe's Southwest Grill",
    category: 'Mexican',
    meals: [
      {
        id: 'moe-1',
        name: 'Homewrecker Bowl (no rice/beans)',
        carbs: 9,
        protein: 38,
        fat: 28,
        calories: 450,
        price: 11.99,
        isOptimal: true,
        description: 'Steak, cheese, guac, sour cream, veggies'
      },
      {
        id: 'moe-2',
        name: 'Chicken Caesar Salad',
        carbs: 7,
        protein: 35,
        fat: 24,
        calories: 390,
        price: 10.49,
        isOptimal: true,
        description: 'Grilled chicken, romaine, Caesar, parmesan'
      },
      {
        id: 'moe-3',
        name: 'Loaded Carnitas Bowl (no rice/beans)',
        carbs: 8,
        protein: 33,
        fat: 30,
        calories: 440,
        price: 11.99,
        isOptimal: true,
        description: 'Carnitas, cheese, guac, jalapeños, sour cream'
      }
    ]
  },

  // Sandwich Shops
  {
    id: 'subway',
    name: 'Subway',
    category: 'Sandwich Shop',
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
      },
      {
        id: 'sub-3',
        name: 'Tuna Salad (no bread)',
        carbs: 5,
        protein: 22,
        fat: 28,
        calories: 360,
        price: 8.99,
        isOptimal: true,
        description: 'Tuna salad, cheese, veggies in a bowl'
      },
      {
        id: 'sub-4',
        name: 'Turkey & Bacon Guacamole Bowl',
        carbs: 7,
        protein: 30,
        fat: 24,
        calories: 370,
        price: 9.99,
        isOptimal: true,
        description: 'Turkey, bacon, guacamole, cheese, veggies'
      }
    ]
  },
  {
    id: 'jerseymikes',
    name: "Jersey Mike's",
    category: 'Sandwich Shop',
    meals: [
      {
        id: 'jm-1',
        name: '#13 Original Italian (sub in a tub)',
        carbs: 7,
        protein: 28,
        fat: 32,
        calories: 420,
        price: 10.99,
        isOptimal: true,
        description: 'Provolone, ham, prosciutto, salami, oil & vinegar, no bread'
      },
      {
        id: 'jm-2',
        name: '#56 Big Kahuna (sub in a tub)',
        carbs: 8,
        protein: 32,
        fat: 28,
        calories: 410,
        price: 11.99,
        isOptimal: true,
        description: 'Steak, cheese, peppers, onions, no bread'
      },
      {
        id: 'jm-3',
        name: '#7 Turkey & Provolone (sub in a tub)',
        carbs: 6,
        protein: 26,
        fat: 22,
        calories: 330,
        price: 10.49,
        isOptimal: true,
        description: 'Turkey, provolone, veggies, oil & vinegar'
      },
      {
        id: 'jm-4',
        name: '#43 Chipotle Cheese Steak (sub in a tub)',
        carbs: 9,
        protein: 34,
        fat: 30,
        calories: 450,
        price: 11.99,
        isOptimal: true,
        description: 'Steak, white American, jalapeños, chipotle mayo'
      }
    ]
  },
  {
    id: 'jimmyjohns',
    name: "Jimmy John's",
    category: 'Sandwich Shop',
    meals: [
      {
        id: 'jj-1',
        name: 'Unwich - Gargantuan',
        carbs: 9,
        protein: 36,
        fat: 34,
        calories: 500,
        price: 11.49,
        isOptimal: true,
        description: 'All meats, cheese, lettuce wrap, no bread'
      },
      {
        id: 'jj-2',
        name: 'Unwich - Turkey Tom',
        carbs: 5,
        protein: 24,
        fat: 18,
        calories: 280,
        price: 9.49,
        isOptimal: true,
        description: 'Turkey, lettuce, tomato, mayo, lettuce-wrapped'
      },
      {
        id: 'jj-3',
        name: 'Unwich - Italian Night Club',
        carbs: 8,
        protein: 30,
        fat: 28,
        calories: 410,
        price: 10.99,
        isOptimal: true,
        description: 'Italian meats, cheese, veggies, lettuce wrap'
      },
      {
        id: 'jj-4',
        name: 'Unwich - Roast Beef',
        carbs: 6,
        protein: 26,
        fat: 20,
        calories: 310,
        price: 9.99,
        isOptimal: true,
        description: 'Roast beef, lettuce, tomato, mayo wrap'
      }
    ]
  },
  {
    id: 'firehouse',
    name: 'Firehouse Subs',
    category: 'Sandwich Shop',
    meals: [
      {
        id: 'fh-1',
        name: 'Hook & Ladder Salad',
        carbs: 8,
        protein: 30,
        fat: 26,
        calories: 390,
        price: 10.99,
        isOptimal: true,
        description: 'Smoked turkey, ham, cheese, veggies, ranch'
      },
      {
        id: 'fh-2',
        name: 'Italian Salad',
        carbs: 7,
        protein: 28,
        fat: 32,
        calories: 420,
        price: 11.49,
        isOptimal: true,
        description: 'Salami, pepperoni, ham, provolone, Italian dressing'
      },
      {
        id: 'fh-3',
        name: 'Smokehouse Beef & Cheddar (no bread)',
        carbs: 9,
        protein: 35,
        fat: 30,
        calories: 450,
        price: 11.99,
        isOptimal: true,
        description: 'Roast beef, cheddar, onions, peppers'
      }
    ]
  },

  // Coffee Shops
  {
    id: 'starbucks',
    name: 'Starbucks',
    category: 'Coffee Shop',
    meals: [
      {
        id: 'sbux-1',
        name: 'Sous Vide Egg Bites - Bacon & Gruyere (2pc)',
        carbs: 9,
        protein: 19,
        fat: 22,
        calories: 310,
        price: 5.95,
        isOptimal: true,
        description: 'Perfect keto breakfast on the go'
      },
      {
        id: 'sbux-2',
        name: 'Protein Box - Eggs & Cheese (no fruit)',
        carbs: 7,
        protein: 20,
        fat: 18,
        calories: 280,
        price: 7.45,
        isOptimal: true,
        description: 'Hard-boiled eggs, cheese, no apple or grapes'
      },
      {
        id: 'sbux-3',
        name: 'Sous Vide Egg Bites - Egg White & Red Pepper (2pc)',
        carbs: 8,
        protein: 13,
        fat: 8,
        calories: 170,
        price: 5.95,
        isOptimal: true,
        description: 'Lower fat option, still keto-friendly'
      },
      {
        id: 'sbux-4',
        name: 'Chicken & Bacon Protein Box (no fruit)',
        carbs: 6,
        protein: 28,
        fat: 16,
        calories: 290,
        price: 8.45,
        isOptimal: true,
        description: 'Chicken, bacon, cheese, no grapes'
      }
    ]
  },
  {
    id: 'dunkin',
    name: 'Dunkin',
    category: 'Coffee Shop',
    meals: [
      {
        id: 'dun-1',
        name: 'Veggie Egg White Bowl (no potatoes)',
        carbs: 6,
        protein: 18,
        fat: 12,
        calories: 210,
        price: 5.99,
        isOptimal: true,
        description: 'Egg whites, veggies, cheese, skip potatoes'
      },
      {
        id: 'dun-2',
        name: 'Bacon & Egg Sandwich (no bread)',
        carbs: 4,
        protein: 22,
        fat: 24,
        calories: 320,
        price: 5.49,
        isOptimal: true,
        description: 'Just the bacon, egg, and cheese filling'
      },
      {
        id: 'dun-3',
        name: 'Sausage, Egg & Cheese (no bread)',
        carbs: 5,
        protein: 20,
        fat: 28,
        calories: 360,
        price: 5.99,
        isOptimal: true,
        description: 'Sausage patty, egg, American cheese'
      }
    ]
  },

  // Convenience Stores
  {
    id: 'wawa',
    name: 'Wawa',
    category: 'Convenience Store',
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
    id: 'sheetz',
    name: 'Sheetz',
    category: 'Convenience Store',
    meals: [
      {
        id: 'she-1',
        name: 'Big Mozz Salad (no croutons)',
        carbs: 8,
        protein: 32,
        fat: 28,
        calories: 410,
        price: 8.99,
        isOptimal: true,
        description: 'Grilled chicken, mozzarella, tomatoes, Italian dressing'
      },
      {
        id: 'she-2',
        name: 'Breakfast Bowl - Scrambler (no tots)',
        carbs: 5,
        protein: 26,
        fat: 30,
        calories: 400,
        price: 6.99,
        isOptimal: true,
        description: 'Eggs, sausage, bacon, cheese, no tater tots'
      },
      {
        id: 'she-3',
        name: 'Burrito Bowl (no tortilla/rice)',
        carbs: 9,
        protein: 28,
        fat: 24,
        calories: 380,
        price: 7.99,
        isOptimal: true,
        description: 'Meat, cheese, sour cream, veggies, no carbs'
      },
      {
        id: 'she-4',
        name: 'Grilled Chicken Salad',
        carbs: 7,
        protein: 34,
        fat: 22,
        calories: 370,
        price: 8.49,
        isOptimal: true,
        description: 'Grilled chicken, mixed greens, veggies, ranch'
      }
    ]
  },
  {
    id: '7eleven',
    name: '7-Eleven',
    category: 'Convenience Store',
    meals: [
      {
        id: '7e-1',
        name: 'Grilled Chicken Salad',
        carbs: 8,
        protein: 28,
        fat: 20,
        calories: 340,
        price: 6.99,
        isOptimal: true,
        description: 'Pre-made grilled chicken salad with ranch'
      },
      {
        id: '7e-2',
        name: 'Hard Boiled Eggs (2-pack)',
        carbs: 1,
        protein: 12,
        fat: 10,
        calories: 140,
        price: 2.99,
        isOptimal: true,
        description: 'Perfect protein snack'
      },
      {
        id: '7e-3',
        name: 'Cheese & Meat Snack Pack',
        carbs: 3,
        protein: 18,
        fat: 22,
        calories: 280,
        price: 4.99,
        isOptimal: true,
        description: 'Cheese cubes, salami, pepperoni'
      },
      {
        id: '7e-4',
        name: 'Taquitos (just filling)',
        carbs: 6,
        protein: 14,
        fat: 16,
        calories: 230,
        price: 3.99,
        isOptimal: true,
        description: 'Remove tortilla, eat filling only'
      }
    ]
  },

  // Grocery Stores
  {
    id: 'wegmans',
    name: 'Wegmans',
    category: 'Grocery Store',
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
    id: 'wholefoods',
    name: 'Whole Foods',
    category: 'Grocery Store',
    meals: [
      {
        id: 'wf-1',
        name: 'Hot Bar - Herb Roasted Chicken',
        carbs: 0,
        protein: 42,
        fat: 22,
        calories: 360,
        price: 9.99,
        isOptimal: true,
        description: 'Rotisserie-style herb chicken'
      },
      {
        id: 'wf-2',
        name: 'Salad Bar - Keto Build',
        carbs: 6,
        protein: 28,
        fat: 38,
        calories: 480,
        price: 10.99,
        isOptimal: true,
        description: 'Greens, grilled chicken, avocado, nuts, olive oil'
      },
      {
        id: 'wf-3',
        name: 'Hot Bar - Grilled Salmon',
        carbs: 2,
        protein: 36,
        fat: 24,
        calories: 380,
        price: 12.99,
        isOptimal: true,
        description: 'Wild-caught grilled salmon'
      },
      {
        id: 'wf-4',
        name: 'Prepared Cobb Salad',
        carbs: 7,
        protein: 32,
        fat: 30,
        calories: 430,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, eggs, avocado, blue cheese'
      }
    ]
  },
  {
    id: 'traderjoes',
    name: "Trader Joe's",
    category: 'Grocery Store',
    meals: [
      {
        id: 'tj-1',
        name: 'Grilled Chicken Strips (precooked)',
        carbs: 1,
        protein: 28,
        fat: 6,
        calories: 170,
        price: 6.99,
        isOptimal: true,
        description: 'Ready-to-eat grilled chicken strips'
      },
      {
        id: 'tj-2',
        name: 'Cauliflower Gnocchi with Pesto',
        carbs: 9,
        protein: 4,
        fat: 14,
        calories: 180,
        price: 4.99,
        isOptimal: false,
        description: 'Lower carb option, but still moderate'
      },
      {
        id: 'tj-3',
        name: 'Organic Hard Boiled Eggs (2-pack)',
        carbs: 1,
        protein: 12,
        fat: 10,
        calories: 140,
        price: 3.49,
        isOptimal: true,
        description: 'Perfect grab-and-go protein'
      },
      {
        id: 'tj-4',
        name: 'Smoked Salmon',
        carbs: 0,
        protein: 18,
        fat: 8,
        calories: 140,
        price: 5.99,
        isOptimal: true,
        description: 'Wild-caught smoked salmon'
      }
    ]
  },
  {
    id: 'kroger',
    name: 'Kroger',
    category: 'Grocery Store',
    meals: [
      {
        id: 'kro-1',
        name: 'Rotisserie Chicken (whole)',
        carbs: 0,
        protein: 130,
        fat: 56,
        calories: 1040,
        price: 7.99,
        isOptimal: true,
        description: 'Full rotisserie chicken, perfect for meal prep'
      },
      {
        id: 'kro-2',
        name: 'Deli Salad Bar - Custom Bowl',
        carbs: 6,
        protein: 24,
        fat: 32,
        calories: 420,
        price: 8.99,
        isOptimal: true,
        description: 'Build your own keto salad'
      },
      {
        id: 'kro-3',
        name: 'Fried Chicken (skin on, no breading)',
        carbs: 4,
        protein: 36,
        fat: 38,
        calories: 490,
        price: 7.99,
        isOptimal: true,
        description: 'Remove breading, keep crispy skin'
      }
    ]
  },

  // Pizza
  {
    id: 'seasons',
    name: 'Seasons Pizza',
    category: 'Pizza',
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
    id: 'dominos',
    name: "Domino's",
    category: 'Pizza',
    meals: [
      {
        id: 'dom-1',
        name: 'Classic Garden Salad',
        carbs: 7,
        protein: 4,
        fat: 8,
        calories: 120,
        price: 6.99,
        isOptimal: false,
        description: 'Add grilled chicken for protein'
      },
      {
        id: 'dom-2',
        name: 'Chicken Caesar Salad',
        carbs: 8,
        protein: 34,
        fat: 24,
        calories: 390,
        price: 9.99,
        isOptimal: true,
        description: 'No croutons, extra Caesar dressing'
      },
      {
        id: 'dom-3',
        name: 'Buffalo Chicken (no dough)',
        carbs: 5,
        protein: 28,
        fat: 22,
        calories: 330,
        price: 8.99,
        isOptimal: true,
        description: 'Order pizza toppings in a bowl'
      }
    ]
  },
  {
    id: 'papajohns',
    name: "Papa John's",
    category: 'Pizza',
    meals: [
      {
        id: 'pj-1',
        name: 'Chicken Caesar Salad',
        carbs: 9,
        protein: 32,
        fat: 26,
        calories: 400,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken, romaine, parmesan, Caesar'
      },
      {
        id: 'pj-2',
        name: 'Buffalo Wings (8pc)',
        carbs: 3,
        protein: 42,
        fat: 28,
        calories: 440,
        price: 11.99,
        isOptimal: true,
        description: 'Traditional wings with buffalo sauce'
      },
      {
        id: 'pj-3',
        name: 'Garden Fresh Salad (add chicken)',
        carbs: 8,
        protein: 30,
        fat: 20,
        calories: 340,
        price: 9.49,
        isOptimal: true,
        description: 'Mixed greens, veggies, grilled chicken, ranch'
      }
    ]
  },

  // Casual Dining
  {
    id: 'panera',
    name: 'Panera Bread',
    category: 'Casual Dining',
    meals: [
      {
        id: 'pan-1',
        name: 'Green Goddess Cobb Salad',
        carbs: 9,
        protein: 35,
        fat: 32,
        calories: 480,
        price: 12.99,
        isOptimal: true,
        description: 'Chicken, bacon, avocado, eggs, no bread'
      },
      {
        id: 'pan-2',
        name: 'Caesar Salad with Chicken',
        carbs: 8,
        protein: 32,
        fat: 28,
        calories: 420,
        price: 11.49,
        isOptimal: true,
        description: 'Grilled chicken, romaine, parmesan, no croutons'
      },
      {
        id: 'pan-3',
        name: 'Mediterranean Bowl (no grains)',
        carbs: 9,
        protein: 28,
        fat: 30,
        calories: 430,
        price: 12.49,
        isOptimal: true,
        description: 'Chicken, hummus, greens, feta, olives'
      }
    ]
  },
  {
    id: 'applebees',
    name: "Applebee's",
    category: 'Casual Dining',
    meals: [
      {
        id: 'app-1',
        name: 'Cedar Grilled Lemon Chicken',
        carbs: 6,
        protein: 45,
        fat: 18,
        calories: 370,
        price: 15.99,
        isOptimal: true,
        description: 'Grilled chicken with veggies, no rice'
      },
      {
        id: 'app-2',
        name: 'Shrimp & Parmesan Sirloin (no potatoes)',
        carbs: 5,
        protein: 48,
        fat: 32,
        calories: 500,
        price: 19.99,
        isOptimal: true,
        description: '8oz sirloin with grilled shrimp, veggie sides'
      },
      {
        id: 'app-3',
        name: 'Grilled Chicken Caesar Salad',
        carbs: 9,
        protein: 38,
        fat: 28,
        calories: 450,
        price: 13.99,
        isOptimal: true,
        description: 'No croutons, extra chicken'
      }
    ]
  },
  {
    id: 'tgifridays',
    name: 'TGI Fridays',
    category: 'Casual Dining',
    meals: [
      {
        id: 'tgif-1',
        name: 'Grilled Salmon with Lemon Butter',
        carbs: 4,
        protein: 40,
        fat: 26,
        calories: 410,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled salmon, broccoli side, no rice'
      },
      {
        id: 'tgif-2',
        name: 'Million Dollar Cobb Salad',
        carbs: 9,
        protein: 38,
        fat: 32,
        calories: 480,
        price: 14.99,
        isOptimal: true,
        description: 'Chicken, bacon, avocado, eggs, cheese, no croutons'
      },
      {
        id: 'tgif-3',
        name: 'New York Strip (no sides)',
        carbs: 1,
        protein: 52,
        fat: 38,
        calories: 540,
        price: 22.99,
        isOptimal: true,
        description: '12oz strip steak, sub broccoli for potato'
      }
    ]
  },
  {
    id: 'chilis',
    name: "Chili's",
    category: 'Casual Dining',
    meals: [
      {
        id: 'chi-1',
        name: 'Ancho Salmon (no rice)',
        carbs: 7,
        protein: 42,
        fat: 28,
        calories: 450,
        price: 17.99,
        isOptimal: true,
        description: 'Chile-grilled salmon, sub veggies for rice'
      },
      {
        id: 'chi-2',
        name: 'Santa Fe Chicken Salad',
        carbs: 9,
        protein: 40,
        fat: 30,
        calories: 470,
        price: 13.99,
        isOptimal: true,
        description: 'Grilled chicken, cheese, avocado, no tortilla strips'
      },
      {
        id: 'chi-3',
        name: 'Classic Sirloin (no sides)',
        carbs: 2,
        protein: 48,
        fat: 26,
        calories: 430,
        price: 16.99,
        isOptimal: true,
        description: '10oz sirloin, steamed broccoli'
      }
    ]
  },
  {
    id: 'redrobin',
    name: 'Red Robin',
    category: 'Casual Dining',
    meals: [
      {
        id: 'rr-1',
        name: 'Keep It Simple Burger (lettuce wrap)',
        carbs: 7,
        protein: 28,
        fat: 32,
        calories: 420,
        price: 10.99,
        isOptimal: true,
        description: 'Beef patty, lettuce, tomato, onion, pickle, wrapped'
      },
      {
        id: 'rr-2',
        name: 'Wedgie Burger - Guacamole Bacon',
        carbs: 9,
        protein: 35,
        fat: 42,
        calories: 570,
        price: 13.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with bacon and guac'
      },
      {
        id: 'rr-3',
        name: 'Ensenada Chicken Platter (no sides)',
        carbs: 6,
        protein: 44,
        fat: 24,
        calories: 420,
        price: 15.99,
        isOptimal: true,
        description: 'Grilled chicken breast, no tortillas or rice'
      }
    ]
  },

  // Wings & Sports Bars
  {
    id: 'buffalowildwings',
    name: 'Buffalo Wild Wings',
    category: 'Wings & Sports Bar',
    meals: [
      {
        id: 'bww-1',
        name: 'Traditional Wings (10pc) - Buffalo',
        carbs: 4,
        protein: 52,
        fat: 42,
        calories: 620,
        price: 14.99,
        isOptimal: true,
        description: 'Traditional wings, buffalo or dry rub seasonings'
      },
      {
        id: 'bww-2',
        name: 'Naked Tenders (5pc)',
        carbs: 3,
        protein: 38,
        fat: 8,
        calories: 230,
        price: 11.99,
        isOptimal: true,
        description: 'Grilled chicken tenders, no breading'
      },
      {
        id: 'bww-3',
        name: 'Garden Chicken Salad',
        carbs: 8,
        protein: 32,
        fat: 26,
        calories: 400,
        price: 12.99,
        isOptimal: true,
        description: 'Grilled chicken, greens, veggies, ranch'
      },
      {
        id: 'bww-4',
        name: 'Traditional Wings (20pc) - Dry Rub',
        carbs: 6,
        protein: 104,
        fat: 84,
        calories: 1240,
        price: 24.99,
        isOptimal: true,
        description: 'Large order, desert heat or lemon pepper dry rub'
      }
    ]
  },
  {
    id: 'wingstop',
    name: 'Wingstop',
    category: 'Wings & Sports Bar',
    meals: [
      {
        id: 'ws-1',
        name: 'Classic Wings (10pc) - Original Hot',
        carbs: 3,
        protein: 50,
        fat: 40,
        calories: 590,
        price: 13.99,
        isOptimal: true,
        description: 'Traditional wings with original hot sauce'
      },
      {
        id: 'ws-2',
        name: 'Classic Wings (10pc) - Lemon Pepper',
        carbs: 2,
        protein: 48,
        fat: 38,
        calories: 560,
        price: 13.99,
        isOptimal: true,
        description: 'Dry rub lemon pepper wings'
      },
      {
        id: 'ws-3',
        name: 'Boneless Wings (10pc, ask for no breading)',
        carbs: 5,
        protein: 42,
        fat: 24,
        calories: 410,
        price: 12.99,
        isOptimal: true,
        description: 'Request grilled chicken instead of breaded'
      }
    ]
  },

  // Steakhouses
  {
    id: 'outback',
    name: 'Outback Steakhouse',
    category: 'Steakhouse',
    meals: [
      {
        id: 'out-1',
        name: 'Outback Center-Cut Sirloin (6oz)',
        carbs: 2,
        protein: 38,
        fat: 24,
        calories: 370,
        price: 16.99,
        isOptimal: true,
        description: 'Grilled sirloin, sub veggies for potato'
      },
      {
        id: 'out-2',
        name: "Victoria's Filet (6oz)",
        carbs: 1,
        protein: 42,
        fat: 28,
        calories: 410,
        price: 24.99,
        isOptimal: true,
        description: 'Tender filet with butter, no sides with carbs'
      },
      {
        id: 'out-3',
        name: 'Grilled Chicken on the Barbie',
        carbs: 3,
        protein: 48,
        fat: 18,
        calories: 360,
        price: 15.99,
        isOptimal: true,
        description: 'Seasoned grilled chicken, veggie sides only'
      },
      {
        id: 'out-4',
        name: 'Ribeye (10oz)',
        carbs: 1,
        protein: 56,
        fat: 52,
        calories: 720,
        price: 28.99,
        isOptimal: true,
        description: 'Juicy ribeye, steamed broccoli'
      }
    ]
  },
  {
    id: 'texasroadhouse',
    name: 'Texas Roadhouse',
    category: 'Steakhouse',
    meals: [
      {
        id: 'tr-1',
        name: 'USDA Choice Sirloin (6oz)',
        carbs: 1,
        protein: 42,
        fat: 22,
        calories: 360,
        price: 14.99,
        isOptimal: true,
        description: 'Grilled steak, sub green beans for potato'
      },
      {
        id: 'tr-2',
        name: 'Grilled BBQ Chicken (no BBQ sauce)',
        carbs: 2,
        protein: 52,
        fat: 16,
        calories: 360,
        price: 15.99,
        isOptimal: true,
        description: 'Grilled chicken breast, veggie sides'
      },
      {
        id: 'tr-3',
        name: 'Grilled Salmon',
        carbs: 3,
        protein: 38,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Perfectly grilled salmon, green beans and salad'
      },
      {
        id: 'tr-4',
        name: 'New York Strip (12oz)',
        carbs: 1,
        protein: 68,
        fat: 48,
        calories: 720,
        price: 24.99,
        isOptimal: true,
        description: 'Thick-cut NY strip, no potato'
      }
    ]
  },
  {
    id: 'longhorn',
    name: 'Longhorn Steakhouse',
    category: 'Steakhouse',
    meals: [
      {
        id: 'lh-1',
        name: "Flo's Filet (6oz)",
        carbs: 2,
        protein: 40,
        fat: 24,
        calories: 380,
        price: 23.99,
        isOptimal: true,
        description: 'Center-cut filet, seasoned perfectly, veggie sides'
      },
      {
        id: 'lh-2',
        name: 'Renegade Sirloin (6oz)',
        carbs: 1,
        protein: 38,
        fat: 20,
        calories: 340,
        price: 15.99,
        isOptimal: true,
        description: 'Bold-flavored sirloin, no potato sides'
      },
      {
        id: 'lh-3',
        name: 'Redrock Grilled Shrimp',
        carbs: 6,
        protein: 28,
        fat: 16,
        calories: 290,
        price: 16.99,
        isOptimal: true,
        description: 'Seasoned grilled shrimp, broccoli side'
      },
      {
        id: 'lh-4',
        name: 'Outlaw Ribeye (18oz)',
        carbs: 0,
        protein: 92,
        fat: 88,
        calories: 1200,
        price: 32.99,
        isOptimal: true,
        description: 'Massive ribeye for serious appetites'
      }
    ]
  },
  {
    id: 'ruthschris',
    name: "Ruth's Chris Steak House",
    category: 'Steakhouse',
    meals: [
      {
        id: 'rc-1',
        name: 'Petite Filet (8oz)',
        carbs: 0,
        protein: 48,
        fat: 32,
        calories: 480,
        price: 52.00,
        isOptimal: true,
        description: 'Premium filet mignon, butter-topped'
      },
      {
        id: 'rc-2',
        name: 'Ribeye (16oz)',
        carbs: 0,
        protein: 84,
        fat: 78,
        calories: 1040,
        price: 65.00,
        isOptimal: true,
        description: 'Premium ribeye, sizzling butter'
      },
      {
        id: 'rc-3',
        name: 'Seared Ahi Tuna',
        carbs: 2,
        protein: 42,
        fat: 18,
        calories: 340,
        price: 48.00,
        isOptimal: true,
        description: 'Sesame-crusted ahi tuna, seared rare'
      }
    ]
  },

  // Seafood
  {
    id: 'redlobster',
    name: 'Red Lobster',
    category: 'Seafood',
    meals: [
      {
        id: 'rl-1',
        name: 'Live Maine Lobster (steamed)',
        carbs: 3,
        protein: 28,
        fat: 2,
        calories: 130,
        price: 29.99,
        isOptimal: true,
        description: 'Steamed lobster with butter, no sides'
      },
      {
        id: 'rl-2',
        name: 'Garlic Grilled Shrimp (no rice)',
        carbs: 4,
        protein: 32,
        fat: 18,
        calories: 300,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled shrimp with garlic butter, sub veggies'
      },
      {
        id: 'rl-3',
        name: 'Wood-Grilled Lobster, Shrimp & Salmon',
        carbs: 6,
        protein: 52,
        fat: 32,
        calories: 520,
        price: 32.99,
        isOptimal: true,
        description: 'Seafood trio, no rice or potatoes'
      },
      {
        id: 'rl-4',
        name: 'Snow Crab Legs',
        carbs: 0,
        protein: 32,
        fat: 4,
        calories: 160,
        price: 34.99,
        isOptimal: true,
        description: 'Steamed snow crab with butter'
      }
    ]
  },
  {
    id: 'joescrabshack',
    name: "Joe's Crab Shack",
    category: 'Seafood',
    meals: [
      {
        id: 'jcs-1',
        name: 'Steamed Alaskan King Crab',
        carbs: 0,
        protein: 38,
        fat: 6,
        calories: 200,
        price: 39.99,
        isOptimal: true,
        description: 'Premium king crab legs with butter'
      },
      {
        id: 'jcs-2',
        name: 'Grilled Shrimp Skewers',
        carbs: 3,
        protein: 34,
        fat: 16,
        calories: 290,
        price: 19.99,
        isOptimal: true,
        description: 'Garlic butter shrimp, veggie sides'
      },
      {
        id: 'jcs-3',
        name: 'Dungeness Crab (whole)',
        carbs: 1,
        protein: 42,
        fat: 8,
        calories: 240,
        price: 35.99,
        isOptimal: true,
        description: 'Whole Dungeness crab, steamed'
      }
    ]
  },

  // Fine Dining / Italian
  {
    id: 'olivegarden',
    name: 'Olive Garden',
    category: 'Fine Dining',
    meals: [
      {
        id: 'og-1',
        name: 'Herb-Grilled Salmon (no sides)',
        carbs: 5,
        protein: 42,
        fat: 28,
        calories: 430,
        price: 19.99,
        isOptimal: true,
        description: 'Grilled salmon with herb butter, sub broccoli for pasta'
      },
      {
        id: 'og-2',
        name: 'Grilled Chicken Margherita',
        carbs: 8,
        protein: 48,
        fat: 22,
        calories: 410,
        price: 17.99,
        isOptimal: true,
        description: 'Grilled chicken, tomatoes, mozzarella, no pasta'
      },
      {
        id: 'og-3',
        name: 'Shrimp Scampi (no pasta)',
        carbs: 6,
        protein: 36,
        fat: 32,
        calories: 460,
        price: 21.99,
        isOptimal: true,
        description: 'Shrimp in garlic butter sauce, veggie side'
      }
    ]
  },
  {
    id: 'carrabas',
    name: "Carrabba's Italian Grill",
    category: 'Fine Dining',
    meals: [
      {
        id: 'car-1',
        name: 'Chicken Bryan',
        carbs: 7,
        protein: 52,
        fat: 34,
        calories: 540,
        price: 19.99,
        isOptimal: true,
        description: 'Grilled chicken, goat cheese, sun-dried tomatoes, no pasta'
      },
      {
        id: 'car-2',
        name: 'Grilled Salmon',
        carbs: 4,
        protein: 44,
        fat: 28,
        calories: 440,
        price: 22.99,
        isOptimal: true,
        description: 'Grilled salmon with lemon butter, veggie sides'
      },
      {
        id: 'car-3',
        name: 'Sirloin Marsala (no pasta)',
        carbs: 8,
        protein: 48,
        fat: 32,
        calories: 520,
        price: 24.99,
        isOptimal: true,
        description: '10oz sirloin, mushroom marsala sauce'
      }
    ]
  },

  // Asian
  {
    id: 'pfchangs',
    name: "P.F. Chang's",
    category: 'Asian',
    meals: [
      {
        id: 'pfc-1',
        name: 'Asian Grilled Salmon (no rice)',
        carbs: 8,
        protein: 42,
        fat: 26,
        calories: 430,
        price: 21.99,
        isOptimal: true,
        description: 'Grilled salmon with Asian vegetables, no rice or noodles'
      },
      {
        id: 'pfc-2',
        name: 'Mongolian Beef (no rice)',
        carbs: 9,
        protein: 36,
        fat: 28,
        calories: 450,
        price: 18.99,
        isOptimal: true,
        description: 'Wok-seared beef with scallions, skip rice'
      },
      {
        id: 'pfc-3',
        name: "Buddha's Feast (steamed, no sauce)",
        carbs: 7,
        protein: 8,
        fat: 4,
        calories: 90,
        price: 12.99,
        isOptimal: true,
        description: 'Steamed vegetables, request no sauce'
      },
      {
        id: 'pfc-4',
        name: 'Kung Pao Shrimp (no rice)',
        carbs: 9,
        protein: 32,
        fat: 24,
        calories: 390,
        price: 19.99,
        isOptimal: true,
        description: 'Spicy shrimp with peanuts, skip rice'
      }
    ]
  },
  {
    id: 'pandaexpress',
    name: 'Panda Express',
    category: 'Asian',
    meals: [
      {
        id: 'pe-1',
        name: 'Grilled Teriyaki Chicken (no sauce, no rice)',
        carbs: 4,
        protein: 36,
        fat: 8,
        calories: 220,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken, request no teriyaki glaze'
      },
      {
        id: 'pe-2',
        name: 'String Bean Chicken (no rice)',
        carbs: 8,
        protein: 28,
        fat: 18,
        calories: 310,
        price: 10.49,
        isOptimal: true,
        description: 'Chicken and green beans, skip rice'
      },
      {
        id: 'pe-3',
        name: 'Broccoli Beef (no rice)',
        carbs: 9,
        protein: 24,
        fat: 16,
        calories: 280,
        price: 10.49,
        isOptimal: true,
        description: 'Beef and broccoli, no rice'
      },
      {
        id: 'pe-4',
        name: 'Super Greens (side)',
        carbs: 5,
        protein: 3,
        fat: 1,
        calories: 45,
        price: 4.99,
        isOptimal: true,
        description: 'Steamed kale, broccoli, cabbage'
      }
    ]
  },
  {
    id: 'benihana',
    name: 'Benihana',
    category: 'Asian',
    meals: [
      {
        id: 'ben-1',
        name: 'Hibachi Steak (no rice)',
        carbs: 6,
        protein: 48,
        fat: 32,
        calories: 500,
        price: 28.99,
        isOptimal: true,
        description: 'Grilled steak, vegetables, no rice'
      },
      {
        id: 'ben-2',
        name: 'Hibachi Chicken (no rice)',
        carbs: 5,
        protein: 42,
        fat: 18,
        calories: 340,
        price: 24.99,
        isOptimal: true,
        description: 'Grilled chicken, vegetables, skip rice'
      },
      {
        id: 'ben-3',
        name: 'Hibachi Shrimp (no rice)',
        carbs: 7,
        protein: 34,
        fat: 20,
        calories: 340,
        price: 26.99,
        isOptimal: true,
        description: 'Grilled shrimp, vegetables, no rice'
      }
    ]
  }
];
