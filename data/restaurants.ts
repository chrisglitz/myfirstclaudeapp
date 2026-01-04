import { Restaurant } from '@/types';

export const restaurants: Restaurant[] = [
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
      }
    ]
  },
  {
    id: 'wawa',
    name: 'Wawa',
    category: 'Convenience',
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
    category: 'Grocery',
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
      }
    ]
  },
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
        name: 'Shroom Burger (no bun)',
        carbs: 8,
        protein: 12,
        fat: 28,
        calories: 340,
        price: 9.99,
        isOptimal: false,
        description: 'Crispy portobello, cheese, lettuce-wrapped'
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
      }
    ]
  },
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
      }
    ]
  },
  {
    id: 'starbucks',
    name: 'Starbucks',
    category: 'Cafe',
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
      }
    ]
  },
  {
    id: 'dunkin',
    name: 'Dunkin',
    category: 'Cafe',
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
      }
    ]
  },
  {
    id: 'olivegarden',
    name: 'Olive Garden',
    category: 'Casual Dining',
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
      }
    ]
  },
  {
    id: 'redlobster',
    name: 'Red Lobster',
    category: 'Casual Dining',
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
      }
    ]
  },
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
        name: 'Victoria\'s Filet (6oz)',
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
      }
    ]
  },
  {
    id: 'buffalowildwings',
    name: 'Buffalo Wild Wings',
    category: 'Casual Dining',
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
        name: 'Flo\'s Filet (6oz)',
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
      }
    ]
  },
  {
    id: 'pfchangs',
    name: "P.F. Chang's",
    category: 'Casual Dining',
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
        name: 'Buddha\'s Feast (steamed, no sauce)',
        carbs: 7,
        protein: 8,
        fat: 4,
        calories: 90,
        price: 12.99,
        isOptimal: true,
        description: 'Steamed vegetables, request no sauce'
      }
    ]
  },
  {
    id: 'crackbarrel',
    name: 'Cracker Barrel',
    category: 'Casual Dining',
    meals: [
      {
        id: 'cb-1',
        name: 'Grilled Pork Chops (no sides with carbs)',
        carbs: 3,
        protein: 42,
        fat: 28,
        calories: 420,
        price: 14.99,
        isOptimal: true,
        description: 'Two grilled pork chops, sub green beans and salad'
      },
      {
        id: 'cb-2',
        name: 'Country Fried Steak (no breading)',
        carbs: 5,
        protein: 38,
        fat: 35,
        calories: 480,
        price: 12.99,
        isOptimal: true,
        description: 'Request without breading, veggie sides only'
      }
    ]
  },
  {
    id: 'bobevans',
    name: 'Bob Evans',
    category: 'Casual Dining',
    meals: [
      {
        id: 'be-1',
        name: 'Farm-Fresh Eggs & Bacon',
        carbs: 2,
        protein: 32,
        fat: 38,
        calories: 460,
        price: 10.99,
        isOptimal: true,
        description: 'Three eggs, bacon strips, no toast or hash browns'
      },
      {
        id: 'be-2',
        name: 'Grilled Chicken Breast',
        carbs: 4,
        protein: 45,
        fat: 18,
        calories: 350,
        price: 13.99,
        isOptimal: true,
        description: 'Grilled chicken with green beans and side salad'
      }
    ]
  },
  {
    id: 'dennys',
    name: "Denny's",
    category: 'Casual Dining',
    meals: [
      {
        id: 'den-1',
        name: 'Build Your Own Omelette (3-egg)',
        carbs: 5,
        protein: 38,
        fat: 42,
        calories: 540,
        price: 11.99,
        isOptimal: true,
        description: 'Eggs, cheese, bacon, peppers, onions - no toast or hash browns'
      },
      {
        id: 'den-2',
        name: 'Bourbon Chicken Skillet (no potatoes)',
        carbs: 8,
        protein: 40,
        fat: 24,
        calories: 410,
        price: 13.99,
        isOptimal: true,
        description: 'Grilled chicken with veggies, request no potatoes'
      }
    ]
  },
  {
    id: 'ihop',
    name: 'IHOP',
    category: 'Casual Dining',
    meals: [
      {
        id: 'ihop-1',
        name: 'Simple & Fit Veggie Omelette',
        carbs: 7,
        protein: 30,
        fat: 28,
        calories: 390,
        price: 11.49,
        isOptimal: true,
        description: 'Egg white omelette with veggies and cheese, no toast or hash browns'
      },
      {
        id: 'ihop-2',
        name: 'Grilled Chicken Breast',
        carbs: 3,
        protein: 42,
        fat: 16,
        calories: 320,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed broccoli'
      }
    ]
  },
  {
    id: 'rubys',
    name: "Ruby Tuesday",
    category: 'Casual Dining',
    meals: [
      {
        id: 'ruby-1',
        name: 'Grilled Salmon',
        carbs: 4,
        protein: 40,
        fat: 26,
        calories: 400,
        price: 17.99,
        isOptimal: true,
        description: 'Grilled salmon with steamed broccoli'
      },
      {
        id: 'ruby-2',
        name: 'Endless Garden Bar',
        carbs: 8,
        protein: 12,
        fat: 24,
        calories: 300,
        price: 14.99,
        isOptimal: true,
        description: 'Salad bar with proteins, cheese, eggs, low-carb veggies'
      }
    ]
  },
  {
    id: 'pizzahut',
    name: 'Pizza Hut',
    category: 'Pizza',
    meals: [
      {
        id: 'ph-1',
        name: 'Buffalo Wings (8pc)',
        carbs: 4,
        protein: 48,
        fat: 32,
        calories: 480,
        price: 11.99,
        isOptimal: true,
        description: 'Traditional wings with buffalo sauce'
      },
      {
        id: 'ph-2',
        name: 'Chicken Caesar Salad',
        carbs: 7,
        protein: 35,
        fat: 26,
        calories: 390,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken, romaine, parmesan, no croutons'
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
        name: 'Chicken Wings - Buffalo (8pc)',
        carbs: 2,
        protein: 44,
        fat: 28,
        calories: 420,
        price: 10.99,
        isOptimal: true,
        description: 'Plain or buffalo wings, no breading'
      },
      {
        id: 'dom-2',
        name: 'Classic Garden Salad',
        carbs: 6,
        protein: 8,
        fat: 18,
        calories: 220,
        price: 7.99,
        isOptimal: true,
        description: 'Mixed greens, veggies, Italian dressing'
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
        name: 'Chicken Poppers (10pc, naked)',
        carbs: 3,
        protein: 40,
        fat: 12,
        calories: 260,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken bites, no breading'
      },
      {
        id: 'pj-2',
        name: 'Chicken & Bacon Ranch Bowl',
        carbs: 8,
        protein: 32,
        fat: 28,
        calories: 410,
        price: 10.99,
        isOptimal: true,
        description: 'Chicken, bacon, cheese, ranch - no crust'
      }
    ]
  },
  {
    id: 'papamurphys',
    name: "Papa Murphy's",
    category: 'Pizza',
    meals: [
      {
        id: 'pm-1',
        name: 'Chicken Bacon Artichoke Salad',
        carbs: 7,
        protein: 34,
        fat: 30,
        calories: 430,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken, bacon, artichokes, cheese'
      },
      {
        id: 'pm-2',
        name: 'Club Salad',
        carbs: 6,
        protein: 28,
        fat: 26,
        calories: 370,
        price: 8.99,
        isOptimal: true,
        description: 'Ham, turkey, bacon, cheese, veggies'
      }
    ]
  },
  {
    id: 'bjsbrewhouse',
    name: "BJ's Restaurant & Brewhouse",
    category: 'Casual Dining',
    meals: [
      {
        id: 'bjs-1',
        name: 'Prime Rib (8oz)',
        carbs: 3,
        protein: 48,
        fat: 38,
        calories: 540,
        price: 26.99,
        isOptimal: true,
        description: 'Slow-roasted prime rib with steamed broccoli'
      },
      {
        id: 'bjs-2',
        name: 'Grilled Chicken Breast',
        carbs: 4,
        protein: 52,
        fat: 18,
        calories: 380,
        price: 16.99,
        isOptimal: true,
        description: 'Seasoned grilled chicken with fresh veggies'
      }
    ]
  },
  {
    id: 'cheesecake',
    name: 'The Cheesecake Factory',
    category: 'Casual Dining',
    meals: [
      {
        id: 'ccf-1',
        name: 'Grilled Steak Medallions',
        carbs: 6,
        protein: 46,
        fat: 32,
        calories: 490,
        price: 24.99,
        isOptimal: true,
        description: 'Grilled beef medallions with asparagus'
      },
      {
        id: 'ccf-2',
        name: 'Factory Chopped Salad',
        carbs: 9,
        protein: 35,
        fat: 28,
        calories: 440,
        price: 18.99,
        isOptimal: true,
        description: 'Chicken, bacon, eggs, cheese, avocado, no croutons'
      }
    ]
  },
  {
    id: 'carls',
    name: "Carl's Jr",
    category: 'Fast Food',
    meals: [
      {
        id: 'cj-1',
        name: 'Low Carb Thickburger',
        carbs: 8,
        protein: 36,
        fat: 42,
        calories: 560,
        price: 8.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with all toppings'
      },
      {
        id: 'cj-2',
        name: 'Charbroiled Chicken Salad',
        carbs: 7,
        protein: 32,
        fat: 22,
        calories: 350,
        price: 8.49,
        isOptimal: true,
        description: 'Grilled chicken on greens with ranch'
      }
    ]
  },
  {
    id: 'hardees',
    name: "Hardee's",
    category: 'Fast Food',
    meals: [
      {
        id: 'hd-1',
        name: 'Low Carb Thickburger',
        carbs: 8,
        protein: 36,
        fat: 42,
        calories: 560,
        price: 8.99,
        isOptimal: true,
        description: 'Lettuce-wrapped 1/3 lb burger'
      },
      {
        id: 'hd-2',
        name: 'Charbroiled Chicken Club Salad',
        carbs: 9,
        protein: 38,
        fat: 26,
        calories: 420,
        price: 8.99,
        isOptimal: true,
        description: 'Grilled chicken, bacon, cheese on greens'
      }
    ]
  },
  {
    id: 'sonic',
    name: 'Sonic Drive-In',
    category: 'Fast Food',
    meals: [
      {
        id: 'son-1',
        name: 'Bunless Burger',
        carbs: 6,
        protein: 24,
        fat: 28,
        calories: 370,
        price: 6.99,
        isOptimal: true,
        description: 'Quarter pound burger without bun, lettuce wrap'
      },
      {
        id: 'son-2',
        name: 'Grilled Chicken Sandwich (no bun)',
        carbs: 4,
        protein: 32,
        fat: 16,
        calories: 280,
        price: 7.49,
        isOptimal: true,
        description: 'Grilled chicken breast, lettuce, tomato'
      }
    ]
  },
  {
    id: 'whataburger',
    name: 'Whataburger',
    category: 'Fast Food',
    meals: [
      {
        id: 'what-1',
        name: 'Whataburger (no bun)',
        carbs: 7,
        protein: 28,
        fat: 32,
        calories: 420,
        price: 7.99,
        isOptimal: true,
        description: 'Single patty burger, no bun, lettuce wrap'
      },
      {
        id: 'what-2',
        name: 'Grilled Chicken Salad',
        carbs: 8,
        protein: 34,
        fat: 24,
        calories: 380,
        price: 8.99,
        isOptimal: true,
        description: 'Grilled chicken, mixed greens, cheese, ranch'
      }
    ]
  },
  {
    id: 'culvers',
    name: "Culver's",
    category: 'Fast Food',
    meals: [
      {
        id: 'cul-1',
        name: 'ButterBurger (no bun)',
        carbs: 5,
        protein: 26,
        fat: 30,
        calories: 390,
        price: 7.49,
        isOptimal: true,
        description: 'Fresh beef patty, cheese, no bun'
      },
      {
        id: 'cul-2',
        name: 'Grilled Chicken Sandwich (no bun)',
        carbs: 3,
        protein: 35,
        fat: 14,
        calories: 280,
        price: 7.99,
        isOptimal: true,
        description: 'Grilled chicken breast without bun'
      }
    ]
  },
  {
    id: 'panagrill',
    name: 'Panda Express',
    category: 'Asian',
    meals: [
      {
        id: 'panda-1',
        name: 'Grilled Teriyaki Chicken (no rice)',
        carbs: 9,
        protein: 36,
        fat: 14,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken with teriyaki, skip rice and noodles'
      },
      {
        id: 'panda-2',
        name: 'String Bean Chicken Breast (no rice)',
        carbs: 8,
        protein: 28,
        fat: 12,
        calories: 240,
        price: 9.49,
        isOptimal: true,
        description: 'Chicken and green beans, no rice'
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
        carbs: 5,
        protein: 42,
        fat: 28,
        calories: 430,
        price: 28.99,
        isOptimal: true,
        description: 'Grilled steak with vegetables, no rice or noodles'
      },
      {
        id: 'ben-2',
        name: 'Hibachi Chicken (no rice)',
        carbs: 4,
        protein: 46,
        fat: 18,
        calories: 360,
        price: 24.99,
        isOptimal: true,
        description: 'Grilled chicken breast with veggies, skip rice'
      }
    ]
  },
  {
    id: 'traderjoes',
    name: "Trader Joe's",
    category: 'Grocery',
    meals: [
      {
        id: 'tj-1',
        name: 'Cauliflower Gnocchi (prepared plain)',
        carbs: 16,
        protein: 2,
        fat: 8,
        calories: 140,
        price: 2.99,
        isOptimal: true,
        description: 'Lower carb pasta alternative, pan-fried in butter'
      },
      {
        id: 'tj-2',
        name: 'Organic Rotisserie Chicken (half)',
        carbs: 0,
        protein: 68,
        fat: 30,
        calories: 540,
        price: 6.99,
        isOptimal: true,
        description: 'Ready-to-eat organic chicken'
      }
    ]
  },
  {
    id: 'wholefoods',
    name: 'Whole Foods',
    category: 'Grocery',
    meals: [
      {
        id: 'wf-1',
        name: 'Hot Bar - Grilled Chicken & Veggies',
        carbs: 8,
        protein: 35,
        fat: 18,
        calories: 330,
        price: 10.99,
        isOptimal: true,
        description: 'Grilled chicken with roasted vegetables'
      },
      {
        id: 'wf-2',
        name: 'Salad Bar - Keto Bowl',
        carbs: 7,
        protein: 28,
        fat: 32,
        calories: 420,
        price: 11.99,
        isOptimal: true,
        description: 'Mixed greens, grilled protein, cheese, eggs, avocado'
      }
    ]
  },
  {
    id: 'kroger',
    name: 'Kroger',
    category: 'Grocery',
    meals: [
      {
        id: 'krog-1',
        name: 'Rotisserie Chicken (whole)',
        carbs: 0,
        protein: 140,
        fat: 64,
        calories: 1100,
        price: 5.99,
        isOptimal: true,
        description: 'Fresh roasted whole chicken'
      },
      {
        id: 'krog-2',
        name: 'Deli Caesar Salad with Chicken',
        carbs: 8,
        protein: 32,
        fat: 26,
        calories: 390,
        price: 7.99,
        isOptimal: true,
        description: 'Pre-made salad, remove croutons'
      }
    ]
  },
  {
    id: 'publix',
    name: 'Publix',
    category: 'Grocery',
    meals: [
      {
        id: 'pub-1',
        name: 'Pub Sub - Ultimate (no bread)',
        carbs: 6,
        protein: 32,
        fat: 28,
        calories: 400,
        price: 8.99,
        isOptimal: true,
        description: 'All meats and cheese in a bowl'
      },
      {
        id: 'pub-2',
        name: 'Rotisserie Chicken (half)',
        carbs: 0,
        protein: 65,
        fat: 28,
        calories: 520,
        price: 5.49,
        isOptimal: true,
        description: 'Fresh roasted chicken'
      }
    ]
  },
  {
    id: 'bostonmarket',
    name: 'Boston Market',
    category: 'Casual Dining',
    meals: [
      {
        id: 'bm-1',
        name: 'Rotisserie Chicken (quarter, white)',
        carbs: 2,
        protein: 42,
        fat: 12,
        calories: 280,
        price: 8.99,
        isOptimal: true,
        description: 'Quarter chicken with green beans'
      },
      {
        id: 'bm-2',
        name: 'Half Rotisserie Chicken',
        carbs: 3,
        protein: 70,
        fat: 28,
        calories: 550,
        price: 11.99,
        isOptimal: true,
        description: 'Half chicken with steamed vegetables'
      }
    ]
  },
  {
    id: 'elpollo',
    name: 'El Pollo Loco',
    category: 'Mexican',
    meals: [
      {
        id: 'epl-1',
        name: 'Double Chicken Avocado Salad',
        carbs: 9,
        protein: 48,
        fat: 28,
        calories: 470,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken, avocado, cheese, cilantro dressing'
      },
      {
        id: 'epl-2',
        name: 'Chicken Breast (2pc)',
        carbs: 0,
        protein: 56,
        fat: 14,
        calories: 340,
        price: 7.99,
        isOptimal: true,
        description: 'Fire-grilled chicken breast, no sides'
      }
    ]
  },
  {
    id: 'delfrisco',
    name: "Del Frisco's Grille",
    category: 'Steakhouse',
    meals: [
      {
        id: 'df-1',
        name: 'Filet Mignon (8oz)',
        carbs: 2,
        protein: 48,
        fat: 32,
        calories: 480,
        price: 38.99,
        isOptimal: true,
        description: 'Premium filet with butter, asparagus side'
      },
      {
        id: 'df-2',
        name: 'Grilled Atlantic Salmon',
        carbs: 4,
        protein: 44,
        fat: 28,
        calories: 440,
        price: 29.99,
        isOptimal: true,
        description: 'Fresh salmon with seasonal vegetables'
      }
    ]
  },
  {
    id: 'ruths',
    name: "Ruth's Chris Steak House",
    category: 'Steakhouse',
    meals: [
      {
        id: 'rc-1',
        name: 'Petite Filet (8oz)',
        carbs: 1,
        protein: 52,
        fat: 28,
        calories: 460,
        price: 49.99,
        isOptimal: true,
        description: 'USDA Prime filet, sizzling in butter'
      },
      {
        id: 'rc-2',
        name: 'Barbecued Shrimp',
        carbs: 5,
        protein: 36,
        fat: 24,
        calories: 380,
        price: 21.99,
        isOptimal: true,
        description: 'New Orleans-style BBQ shrimp'
      }
    ]
  },
  {
    id: 'mortons',
    name: "Morton's The Steakhouse",
    category: 'Steakhouse',
    meals: [
      {
        id: 'mort-1',
        name: 'Center Cut Filet Mignon (8oz)',
        carbs: 0,
        protein: 48,
        fat: 24,
        calories: 400,
        price: 54.99,
        isOptimal: true,
        description: 'Prime aged beef, no sides with carbs'
      },
      {
        id: 'mort-2',
        name: 'Colossal Shrimp Alexander',
        carbs: 6,
        protein: 32,
        fat: 28,
        calories: 420,
        price: 26.99,
        isOptimal: true,
        description: 'Jumbo shrimp with garlic butter'
      }
    ]
  },
  {
    id: 'flemings',
    name: "Fleming's Prime Steakhouse",
    category: 'Steakhouse',
    meals: [
      {
        id: 'flem-1',
        name: 'Filet Mignon (8oz)',
        carbs: 2,
        protein: 46,
        fat: 26,
        calories: 420,
        price: 47.99,
        isOptimal: true,
        description: 'Prime filet with herb butter'
      },
      {
        id: 'flem-2',
        name: 'Chilean Sea Bass',
        carbs: 3,
        protein: 38,
        fat: 22,
        calories: 360,
        price: 44.99,
        isOptimal: true,
        description: 'Pan-seared with vegetables'
      }
    ]
  },
  {
    id: 'peiwei',
    name: 'Pei Wei',
    category: 'Asian',
    meals: [
      {
        id: 'pw-1',
        name: 'Mongolian Steak (no rice)',
        carbs: 9,
        protein: 32,
        fat: 18,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: 'Wok-fired beef with scallions, skip rice'
      },
      {
        id: 'pw-2',
        name: 'Grilled Chicken with Vegetables',
        carbs: 7,
        protein: 36,
        fat: 14,
        calories: 290,
        price: 9.99,
        isOptimal: true,
        description: 'Marinated chicken with mixed veggies'
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
        name: 'Grilled Teriyaki Chicken (no rice)',
        carbs: 9,
        protein: 36,
        fat: 14,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken, skip rice and noodles'
      },
      {
        id: 'pe-2',
        name: 'Broccoli Beef (no rice)',
        carbs: 8,
        protein: 16,
        fat: 12,
        calories: 200,
        price: 9.49,
        isOptimal: true,
        description: 'Beef and broccoli in savory sauce'
      }
    ]
  },
  {
    id: 'noodles',
    name: 'Noodles & Company',
    category: 'Casual Dining',
    meals: [
      {
        id: 'nc-1',
        name: 'Zucchini Noodles with Chicken',
        carbs: 12,
        protein: 32,
        fat: 18,
        calories: 330,
        price: 9.99,
        isOptimal: true,
        description: 'Spiralized zucchini with grilled chicken'
      },
      {
        id: 'nc-2',
        name: 'Chicken Caesar (no croutons)',
        carbs: 6,
        protein: 34,
        fat: 24,
        calories: 370,
        price: 8.99,
        isOptimal: true,
        description: 'Grilled chicken Caesar salad'
      }
    ]
  },
  {
    id: 'jersey',
    name: 'Jersey Mikes',
    category: 'Sandwich Shop',
    meals: [
      {
        id: 'jer-1',
        name: '#13 Original Italian (sub in a tub)',
        carbs: 7,
        protein: 28,
        fat: 32,
        calories: 420,
        price: 10.99,
        isOptimal: true,
        description: 'All meats, cheese, veggies in a bowl'
      },
      {
        id: 'jer-2',
        name: 'Turkey & Provolone (sub in a tub)',
        carbs: 5,
        protein: 26,
        fat: 20,
        calories: 310,
        price: 9.99,
        isOptimal: true,
        description: 'Turkey, cheese, lettuce, tomato'
      }
    ]
  },
  {
    id: 'potbelly',
    name: 'Potbelly',
    category: 'Sandwich Shop',
    meals: [
      {
        id: 'pot-1',
        name: 'Farmhouse Salad',
        carbs: 9,
        protein: 32,
        fat: 26,
        calories: 390,
        price: 8.99,
        isOptimal: true,
        description: 'Chicken, bacon, eggs, cheese, ranch'
      },
      {
        id: 'pot-2',
        name: 'Power Bowls - Chicken',
        carbs: 8,
        protein: 34,
        fat: 22,
        calories: 360,
        price: 9.49,
        isOptimal: true,
        description: 'Grilled chicken with veggies'
      }
    ]
  },
  {
    id: 'jersey',
    name: "Which Wich",
    category: 'Sandwich Shop',
    meals: [
      {
        id: 'ww-1',
        name: 'Turkey Lettuce Wrap',
        carbs: 6,
        protein: 24,
        fat: 18,
        calories: 280,
        price: 8.99,
        isOptimal: true,
        description: 'Turkey, cheese, veggies in lettuce'
      },
      {
        id: 'ww-2',
        name: 'Italian Lettuce Wrap',
        carbs: 7,
        protein: 26,
        fat: 28,
        calories: 370,
        price: 9.49,
        isOptimal: true,
        description: 'Italian meats and cheese wrapped'
      }
    ]
  },
  {
    id: 'portillos',
    name: "Portillo's",
    category: 'Fast Food',
    meals: [
      {
        id: 'port-1',
        name: 'Char-Grilled Chicken Breast',
        carbs: 4,
        protein: 42,
        fat: 16,
        calories: 320,
        price: 8.99,
        isOptimal: true,
        description: 'Grilled chicken with side salad'
      },
      {
        id: 'port-2',
        name: 'Italian Beef (no bread)',
        carbs: 5,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 9.49,
        isOptimal: true,
        description: 'Seasoned beef in a bowl with peppers'
      }
    ]
  },
  {
    id: 'zaxbys',
    name: "Zaxby's",
    category: 'Fast Food',
    meals: [
      {
        id: 'zax-1',
        name: 'Grilled Chicken Caesar Zalad',
        carbs: 8,
        protein: 35,
        fat: 24,
        calories: 380,
        price: 9.49,
        isOptimal: true,
        description: 'Grilled chicken, romaine, parmesan, no croutons'
      },
      {
        id: 'zax-2',
        name: 'Traditional Wings (10pc)',
        carbs: 2,
        protein: 48,
        fat: 32,
        calories: 470,
        price: 11.99,
        isOptimal: true,
        description: 'Buffalo or BBQ wings'
      }
    ]
  },
  {
    id: 'wingstop',
    name: 'Wingstop',
    category: 'Fast Food',
    meals: [
      {
        id: 'ws-1',
        name: 'Classic Wings (10pc)',
        carbs: 3,
        protein: 50,
        fat: 34,
        calories: 500,
        price: 12.99,
        isOptimal: true,
        description: 'Traditional wings, various flavors'
      },
      {
        id: 'ws-2',
        name: 'Boneless Wings (naked, 10pc)',
        carbs: 2,
        protein: 42,
        fat: 16,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: 'Grilled chicken bites with sauce'
      }
    ]
  },
  {
    id: 'chickensalad',
    name: 'Chicken Salad Chick',
    category: 'Casual Dining',
    meals: [
      {
        id: 'csc-1',
        name: 'Classic Carol Salad',
        carbs: 7,
        protein: 28,
        fat: 24,
        calories: 350,
        price: 8.99,
        isOptimal: true,
        description: 'Chicken salad on lettuce bed'
      },
      {
        id: 'csc-2',
        name: 'Buffalo Barclay Salad',
        carbs: 6,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 9.49,
        isOptimal: true,
        description: 'Spicy buffalo chicken salad'
      }
    ]
  },
  {
    id: 'jasons',
    name: "Jason's Deli",
    category: 'Sandwich Shop',
    meals: [
      {
        id: 'jd-1',
        name: 'Chicken Club Salad',
        carbs: 9,
        protein: 36,
        fat: 28,
        calories: 430,
        price: 10.99,
        isOptimal: true,
        description: 'Grilled chicken, bacon, eggs, cheese'
      },
      {
        id: 'jd-2',
        name: 'Nutty Mixed-Up Salad',
        carbs: 8,
        protein: 32,
        fat: 32,
        calories: 440,
        price: 10.49,
        isOptimal: true,
        description: 'Chicken, nuts, cheese, mixed greens'
      }
    ]
  },
  {
    id: 'mcalisters',
    name: "McAlister's Deli",
    category: 'Sandwich Shop',
    meals: [
      {
        id: 'mc-1',
        name: 'Grilled Chicken Caesar Salad',
        carbs: 7,
        protein: 34,
        fat: 26,
        calories: 390,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken, romaine, parmesan'
      },
      {
        id: 'mc-2',
        name: 'Chef Salad',
        carbs: 8,
        protein: 30,
        fat: 24,
        calories: 360,
        price: 9.49,
        isOptimal: true,
        description: 'Turkey, ham, cheese, eggs on greens'
      }
    ]
  },
  {
    id: 'corner',
    name: 'Corner Bakery',
    category: 'Casual Dining',
    meals: [
      {
        id: 'cb-1',
        name: 'Harvest Salad with Chicken',
        carbs: 9,
        protein: 32,
        fat: 28,
        calories: 410,
        price: 10.99,
        isOptimal: true,
        description: 'Grilled chicken, nuts, cheese, greens'
      },
      {
        id: 'cb-2',
        name: 'Chicken Pomodori',
        carbs: 8,
        protein: 36,
        fat: 22,
        calories: 370,
        price: 11.49,
        isOptimal: true,
        description: 'Grilled chicken with tomato basil, no pasta'
      }
    ]
  },
  {
    id: 'cava',
    name: 'CAVA',
    category: 'Mediterranean',
    meals: [
      {
        id: 'cava-1',
        name: 'Grilled Chicken Bowl',
        carbs: 9,
        protein: 38,
        fat: 24,
        calories: 400,
        price: 10.99,
        isOptimal: true,
        description: 'Chicken, greens, veggies, no rice or pita'
      },
      {
        id: 'cava-2',
        name: 'Grilled Steak Bowl',
        carbs: 8,
        protein: 32,
        fat: 28,
        calories: 410,
        price: 11.99,
        isOptimal: true,
        description: 'Steak, greens, hummus, veggies'
      }
    ]
  },
  {
    id: 'zoeskitchen',
    name: "Zoe's Kitchen",
    category: 'Mediterranean',
    meals: [
      {
        id: 'zk-1',
        name: 'Grilled Chicken Kabobs',
        carbs: 5,
        protein: 42,
        fat: 18,
        calories: 340,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken kabobs with vegetables'
      },
      {
        id: 'zk-2',
        name: 'Grilled Salmon Salad',
        carbs: 8,
        protein: 36,
        fat: 26,
        calories: 400,
        price: 13.99,
        isOptimal: true,
        description: 'Grilled salmon, mixed greens, feta'
      }
    ]
  },
  {
    id: 'lazydogsaloon',
    name: 'Lazy Dog Restaurant',
    category: 'Casual Dining',
    meals: [
      {
        id: 'ld-1',
        name: 'Grilled Chicken Breast',
        carbs: 4,
        protein: 48,
        fat: 16,
        calories: 340,
        price: 14.99,
        isOptimal: true,
        description: 'Herb-marinated chicken with veggies'
      },
      {
        id: 'ld-2',
        name: 'Blackened Fish Tacos (no tortillas)',
        carbs: 6,
        protein: 32,
        fat: 22,
        calories: 340,
        price: 13.99,
        isOptimal: true,
        description: 'Blackened fish, cabbage slaw in a bowl'
      }
    ]
  },
  {
    id: 'californiapizzo',
    name: 'California Pizza Kitchen',
    category: 'Casual Dining',
    meals: [
      {
        id: 'cpk-1',
        name: 'Grilled Salmon',
        carbs: 6,
        protein: 40,
        fat: 26,
        calories: 410,
        price: 18.99,
        isOptimal: true,
        description: 'Fresh salmon with asparagus'
      },
      {
        id: 'cpk-2',
        name: 'Field Greens Salad with Chicken',
        carbs: 8,
        protein: 32,
        fat: 24,
        calories: 370,
        price: 13.99,
        isOptimal: true,
        description: 'Grilled chicken, greens, goat cheese'
      }
    ]
  },
  {
    id: 'yardhouse',
    name: 'Yard House',
    category: 'Casual Dining',
    meals: [
      {
        id: 'yh-1',
        name: 'Grilled Chicken Breast',
        carbs: 5,
        protein: 46,
        fat: 18,
        calories: 360,
        price: 16.99,
        isOptimal: true,
        description: 'Seasoned chicken with steamed broccoli'
      },
      {
        id: 'yh-2',
        name: 'Ahi Poke Nachos (no chips)',
        carbs: 7,
        protein: 28,
        fat: 16,
        calories: 280,
        price: 14.99,
        isOptimal: true,
        description: 'Fresh ahi tuna with avocado'
      }
    ]
  },
  {
    id: 'bonefish',
    name: 'Bonefish Grill',
    category: 'Casual Dining',
    meals: [
      {
        id: 'bf-1',
        name: 'Grilled Salmon',
        carbs: 4,
        protein: 42,
        fat: 28,
        calories: 430,
        price: 21.99,
        isOptimal: true,
        description: 'Fresh Atlantic salmon with asparagus'
      },
      {
        id: 'bf-2',
        name: 'Lily\'s Chicken',
        carbs: 6,
        protein: 44,
        fat: 22,
        calories: 390,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled chicken with goat cheese and vegetables'
      }
    ]
  },
  {
    id: 'carrabas',
    name: "Carrabba's Italian Grill",
    category: 'Casual Dining',
    meals: [
      {
        id: 'car-1',
        name: 'Chicken Bryan',
        carbs: 5,
        protein: 48,
        fat: 26,
        calories: 440,
        price: 17.99,
        isOptimal: true,
        description: 'Grilled chicken, goat cheese, sundried tomatoes'
      },
      {
        id: 'car-2',
        name: 'Grilled Salmon',
        carbs: 4,
        protein: 40,
        fat: 24,
        calories: 380,
        price: 19.99,
        isOptimal: true,
        description: 'Fresh salmon with vegetables, no pasta'
      }
    ]
  },
  {
    id: 'macaronigrill',
    name: 'Romano\'s Macaroni Grill',
    category: 'Casual Dining',
    meals: [
      {
        id: 'rmg-1',
        name: 'Grilled Salmon',
        carbs: 6,
        protein: 38,
        fat: 26,
        calories: 400,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled salmon with vegetables'
      },
      {
        id: 'rmg-2',
        name: 'Pollo Caprese',
        carbs: 7,
        protein: 42,
        fat: 22,
        calories: 380,
        price: 16.99,
        isOptimal: true,
        description: 'Grilled chicken, mozzarella, tomatoes, no pasta'
      }
    ]
  },
  {
    id: 'waffehouse',
    name: 'Waffle House',
    category: 'Casual Dining',
    meals: [
      {
        id: 'wh-1',
        name: 'Eggs & Bacon',
        carbs: 2,
        protein: 28,
        fat: 32,
        calories: 400,
        price: 7.99,
        isOptimal: true,
        description: 'Three eggs with bacon, no toast or hashbrowns'
      },
      {
        id: 'wh-2',
        name: 'Grilled Chicken Breast',
        carbs: 3,
        protein: 38,
        fat: 14,
        calories: 280,
        price: 8.99,
        isOptimal: true,
        description: 'Plain grilled chicken with side salad'
      }
    ]
  },
  {
    id: 'jamba',
    name: 'Jamba Juice',
    category: 'Cafe',
    meals: [
      {
        id: 'jam-1',
        name: 'Impossible Breakfast Sandwich (no bread)',
        carbs: 8,
        protein: 24,
        fat: 18,
        calories: 290,
        price: 6.99,
        isOptimal: true,
        description: 'Plant-based patty, egg, cheese - no bread'
      },
      {
        id: 'jam-2',
        name: 'Greens & Ginger Bowl (no granola)',
        carbs: 9,
        protein: 8,
        fat: 12,
        calories: 170,
        price: 8.99,
        isOptimal: true,
        description: 'Kale, mango, pineapple blend - skip granola'
      }
    ]
  },
  {
    id: 'smoothieking',
    name: 'Smoothie King',
    category: 'Cafe',
    meals: [
      {
        id: 'sk-1',
        name: 'Keto Champ Berry',
        carbs: 12,
        protein: 32,
        fat: 24,
        calories: 370,
        price: 7.99,
        isOptimal: true,
        description: 'Keto-friendly smoothie with MCT oil'
      },
      {
        id: 'sk-2',
        name: 'Keto Champ Coffee',
        carbs: 10,
        protein: 28,
        fat: 26,
        calories: 360,
        price: 7.99,
        isOptimal: true,
        description: 'Coffee smoothie with keto ingredients'
      }
    ]
  },
  {
    id: 'caribou',
    name: 'Caribou Coffee',
    category: 'Cafe',
    meals: [
      {
        id: 'cc-1',
        name: 'Protein Power Breakfast Bowl',
        carbs: 8,
        protein: 26,
        fat: 22,
        calories: 330,
        price: 6.99,
        isOptimal: true,
        description: 'Eggs, cheese, bacon, no potatoes'
      },
      {
        id: 'cc-2',
        name: 'Turkey Sausage Egg Bites',
        carbs: 6,
        protein: 18,
        fat: 16,
        calories: 240,
        price: 4.99,
        isOptimal: true,
        description: 'Egg bites with turkey sausage'
      }
    ]
  },
  {
    id: 'peets',
    name: 'Peet\'s Coffee',
    category: 'Cafe',
    meals: [
      {
        id: 'pc-1',
        name: 'Bacon & Egg Bites',
        carbs: 5,
        protein: 16,
        fat: 18,
        calories: 250,
        price: 4.99,
        isOptimal: true,
        description: 'Egg bites with bacon and cheese'
      },
      {
        id: 'pc-2',
        name: 'Protein Plate',
        carbs: 7,
        protein: 22,
        fat: 20,
        calories: 290,
        price: 6.99,
        isOptimal: true,
        description: 'Hardboiled eggs, cheese, almonds'
      }
    ]
  },
  {
    id: 'pieology',
    name: 'Pieology',
    category: 'Pizza',
    meals: [
      {
        id: 'pieo-1',
        name: 'Caesar Salad with Chicken',
        carbs: 7,
        protein: 32,
        fat: 24,
        calories: 360,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken Caesar, no croutons'
      },
      {
        id: 'pieo-2',
        name: 'Buffalo Wings (8pc)',
        carbs: 3,
        protein: 44,
        fat: 28,
        calories: 420,
        price: 10.99,
        isOptimal: true,
        description: 'Traditional wings with buffalo sauce'
      }
    ]
  },
  {
    id: 'blaze',
    name: 'Blaze Pizza',
    category: 'Pizza',
    meals: [
      {
        id: 'blz-1',
        name: 'Grilled Chicken Salad',
        carbs: 8,
        protein: 34,
        fat: 22,
        calories: 350,
        price: 8.99,
        isOptimal: true,
        description: 'Grilled chicken, greens, veggies'
      },
      {
        id: 'blz-2',
        name: 'Keto Crust Pizza (personal)',
        carbs: 6,
        protein: 28,
        fat: 32,
        calories: 420,
        price: 11.99,
        isOptimal: true,
        description: 'Cauliflower crust with toppings'
      }
    ]
  },
  {
    id: 'modsquad',
    name: 'MOD Pizza',
    category: 'Pizza',
    meals: [
      {
        id: 'mod-1',
        name: 'Salad - No Name',
        carbs: 7,
        protein: 30,
        fat: 24,
        calories: 350,
        price: 9.99,
        isOptimal: true,
        description: 'Customizable salad with grilled chicken'
      },
      {
        id: 'mod-2',
        name: 'Cauliflower Crust Pizza',
        carbs: 8,
        protein: 26,
        fat: 28,
        calories: 380,
        price: 10.99,
        isOptimal: true,
        description: 'Keto-friendly crust with toppings'
      }
    ]
  },
  {
    id: 'jitb',
    name: 'Jack in the Box',
    category: 'Fast Food',
    meals: [
      {
        id: 'jib-1',
        name: 'Grilled Chicken Salad',
        carbs: 8,
        protein: 32,
        fat: 22,
        calories: 350,
        price: 7.99,
        isOptimal: true,
        description: 'Grilled chicken on greens'
      },
      {
        id: 'jib-2',
        name: 'Bunless Burger',
        carbs: 7,
        protein: 26,
        fat: 28,
        calories: 370,
        price: 6.99,
        isOptimal: true,
        description: 'Burger without bun, lettuce wrap'
      }
    ]
  },
  {
    id: 'checkers',
    name: 'Checkers',
    category: 'Fast Food',
    meals: [
      {
        id: 'chk-1',
        name: 'Grilled Chicken Sandwich (no bun)',
        carbs: 5,
        protein: 32,
        fat: 16,
        calories: 280,
        price: 6.99,
        isOptimal: true,
        description: 'Grilled chicken breast, no bun'
      },
      {
        id: 'chk-2',
        name: 'Big Buford (no bun)',
        carbs: 8,
        protein: 34,
        fat: 38,
        calories: 500,
        price: 7.99,
        isOptimal: true,
        description: 'Double burger, cheese, bacon, no bun'
      }
    ]
  },
  {
    id: 'rallys',
    name: "Rally's",
    category: 'Fast Food',
    meals: [
      {
        id: 'ral-1',
        name: 'Grilled Chicken (no bun)',
        carbs: 4,
        protein: 30,
        fat: 14,
        calories: 260,
        price: 6.49,
        isOptimal: true,
        description: 'Seasoned grilled chicken'
      },
      {
        id: 'ral-2',
        name: 'Baconzilla (no bun)',
        carbs: 7,
        protein: 36,
        fat: 42,
        calories: 540,
        price: 8.49,
        isOptimal: true,
        description: 'Bacon cheeseburger without bun'
      }
    ]
  },
  {
    id: 'cookout',
    name: 'Cook Out',
    category: 'Fast Food',
    meals: [
      {
        id: 'cok-1',
        name: 'Grilled Chicken Breast',
        carbs: 3,
        protein: 38,
        fat: 12,
        calories: 260,
        price: 5.99,
        isOptimal: true,
        description: 'Plain grilled chicken'
      },
      {
        id: 'cok-2',
        name: 'Char-Grilled Burger (no bun)',
        carbs: 6,
        protein: 24,
        fat: 26,
        calories: 350,
        price: 4.99,
        isOptimal: true,
        description: 'Charbroiled burger, no bun'
      }
    ]
  }
];
