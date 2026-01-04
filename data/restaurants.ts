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
  },
  {
    id: 'fiveguys',
    name: 'Five Guys',
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
  }
];
