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
        description: 'No bun, no ketchup. Perfect keto option!',
        mealType: 'anytime'
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
        description: 'Remove croutons, use ranch dressing',
        mealType: 'lunch'
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
        description: 'Just the filling - great breakfast option',
        mealType: 'breakfast'
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
        description: 'Egg, cheese, and Canadian bacon only',
        mealType: 'breakfast'
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
        description: 'Grilled chicken, cheddar, lettuce, peppers, ranch',
        mealType: 'lunch'
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
        description: 'Scrambled eggs, bacon, cheese, no potatoes',
        mealType: 'breakfast'
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
        description: 'Turkey, provolone, lettuce, tomato in a bowl',
        mealType: 'anytime'
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
        description: 'Grilled chicken, romaine, parmesan, Caesar dressing',
        mealType: 'lunch'
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
        description: 'Plain rotisserie - remove skin if needed',
        mealType: 'dinner'
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
        description: 'Skip the rice, extra veggies',
        mealType: 'anytime'
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
        description: 'Greens, grilled chicken, cheese, eggs, olives, oil & vinegar',
        mealType: 'lunch'
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
        description: 'No breading, buffalo sauce on side',
        mealType: 'snack'
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
        description: 'No croutons, extra chicken',
        mealType: 'lunch'
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
        description: 'Traditional wings, buffalo sauce',
        mealType: 'snack'
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
        description: 'Meats, cheese, olives, peppers, oil & vinegar',
        mealType: 'lunch'
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
        description: 'Steak, cheese, peppers, onions in a bowl',
        mealType: 'dinner'
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
        description: 'Carnitas, lettuce, cheese, sour cream, guacamole, salsa',
        mealType: 'lunch'
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
        description: 'Chicken, fajita veggies, cheese, guac, salsa',
        mealType: 'lunch'
      },
      {
        id: 'chip-3',
        name: 'Steak Salad Bowl',
        carbs: 8,
        protein: 38,
        fat: 30,
        calories: 460,
        price: 12.50,
        isOptimal: true,
        description: 'Steak, romaine, cheese, sour cream, salsa, no tortilla strips',
        mealType: 'dinner'
      },
      {
        id: 'chip-4',
        name: 'Barbacoa Bowl (no rice/beans)',
        carbs: 6,
        protein: 35,
        fat: 26,
        calories: 410,
        price: 11.95,
        isOptimal: true,
        description: 'Barbacoa beef, fajita veggies, cheese, guac, hot salsa',
        mealType: 'anytime'
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
        description: 'No bread, double meat, cheese, veggies',
        mealType: 'dinner'
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
        description: 'Grilled chicken, bacon, ranch, cheese, veggies',
        mealType: 'breakfast'
      },
      {
        id: 'sub-3',
        name: 'Rotisserie Chicken Protein Bowl',
        carbs: 7,
        protein: 32,
        fat: 20,
        calories: 340,
        price: 9.99,
        isOptimal: true,
        description: 'Rotisserie chicken, double cheese, all veggies, ranch',
        mealType: 'lunch'
      },
      {
        id: 'sub-4',
        name: 'Turkey Breast Protein Bowl',
        carbs: 5,
        protein: 28,
        fat: 18,
        calories: 300,
        price: 8.99,
        isOptimal: true,
        description: 'Turkey, cheese, avocado, veggies, oil & vinegar',
        mealType: 'lunch'
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
        description: 'Lettuce-wrapped burger, all toppings, no bun',
        mealType: 'anytime'
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
        description: 'Single patty, cheese, veggies, no bun',
        mealType: 'anytime'
      },
      {
        id: 'fg-3',
        name: 'Bacon Dog (no bun)',
        carbs: 4,
        protein: 18,
        fat: 32,
        calories: 380,
        price: 7.99,
        isOptimal: true,
        description: 'Hot dog wrapped in bacon, cheese, no bun',
        mealType: 'anytime'
      },
      {
        id: 'fg-4',
        name: 'Little Bacon Burger (no bun)',
        carbs: 6,
        protein: 26,
        fat: 34,
        calories: 420,
        price: 9.49,
        isOptimal: true,
        description: 'Single patty, bacon, cheese, all toppings',
        mealType: 'anytime'
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
        description: 'Perfect protein, minimal carbs',
        mealType: 'snack'
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
        description: 'Grilled chicken, bacon, eggs, cheese, avocado lime ranch',
        mealType: 'breakfast'
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
        description: 'Grilled chicken, bacon, cheese, lettuce, tomato',
        mealType: 'lunch'
      },
      {
        id: 'cfa-4',
        name: 'Spicy Southwest Salad',
        carbs: 8,
        protein: 36,
        fat: 26,
        calories: 410,
        price: 10.99,
        isOptimal: true,
        description: 'Grilled chicken, corn salsa, peppers, cheese, no corn',
        mealType: 'lunch'
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
        description: 'Beef patty, cheese, lettuce, tomato, ShackSauce',
        mealType: 'lunch'
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
        description: 'Crispy portobello, cheese, lettuce-wrapped',
        mealType: 'anytime'
      },
      {
        id: 'ss-3',
        name: 'Smoke Shack Burger (lettuce wrap)',
        carbs: 9,
        protein: 28,
        fat: 40,
        calories: 530,
        price: 10.99,
        isOptimal: true,
        description: 'Bacon, cherry peppers, ShackSauce, lettuce-wrapped',
        mealType: 'lunch'
      },
      {
        id: 'ss-4',
        name: 'Hot Chicken (no bun)',
        carbs: 7,
        protein: 32,
        fat: 24,
        calories: 380,
        price: 9.99,
        isOptimal: true,
        description: 'Spicy chicken breast, pickles, buttermilk herb mayo',
        mealType: 'anytime'
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
        description: 'Two patties, cheese, lettuce-wrapped, no spread',
        mealType: 'anytime'
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
        description: 'Triple meat, triple cheese, lettuce wrap',
        mealType: 'lunch'
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
        description: 'Four patties, four cheese, ultimate protein bomb',
        mealType: 'anytime'
      },
      {
        id: 'ino-4',
        name: 'Cheeseburger Protein Style',
        carbs: 7,
        protein: 18,
        fat: 22,
        calories: 310,
        price: 4.99,
        isOptimal: true,
        description: 'Single patty, cheese, grilled onions, lettuce wrap',
        mealType: 'lunch'
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
        description: 'Two beef patties, bacon, cheese, mayo - ask for lettuce wrap',
        mealType: 'lunch'
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
        description: 'Grilled chicken, avocado, bacon, no tortilla strips',
        mealType: 'lunch'
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
        description: 'Remove apples and cranberries, extra pecans',
        mealType: 'lunch'
      },
      {
        id: 'wen-4',
        name: 'Dave\'s Double (no bun)',
        carbs: 8,
        protein: 56,
        fat: 50,
        calories: 710,
        price: 10.49,
        isOptimal: true,
        description: 'Two beef patties, cheese, lettuce, tomato, mayo',
        mealType: 'anytime'
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
        description: 'Flame-grilled beef, cheese, veggies, no ketchup or bun',
        mealType: 'anytime'
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
        description: 'Two patties, bacon, cheese, special sauce',
        mealType: 'anytime'
      },
      {
        id: 'bk-3',
        name: 'Garden Side Salad with Grilled Chicken',
        carbs: 8,
        protein: 34,
        fat: 22,
        calories: 370,
        price: 8.49,
        isOptimal: true,
        description: 'Grilled chicken, greens, veggies, ranch dressing',
        mealType: 'snack'
      },
      {
        id: 'bk-4',
        name: 'Double Whopper (no bun)',
        carbs: 10,
        protein: 52,
        fat: 62,
        calories: 820,
        price: 10.99,
        isOptimal: true,
        description: 'Two flame-grilled patties, cheese, all veggies',
        mealType: 'anytime'
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
        description: 'Thin-sliced roast beef, ask for lettuce wrap',
        mealType: 'lunch'
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
        description: 'Swap crispy for roast beef, bacon, cheese, ranch',
        mealType: 'lunch'
      },
      {
        id: 'arb-3',
        name: 'Beef n Cheddar (no bun)',
        carbs: 6,
        protein: 26,
        fat: 20,
        calories: 310,
        price: 7.49,
        isOptimal: true,
        description: 'Roast beef, cheddar sauce, red ranch, no bun',
        mealType: 'anytime'
      },
      {
        id: 'arb-4',
        name: 'Smokehouse Brisket (no bun)',
        carbs: 7,
        protein: 30,
        fat: 24,
        calories: 360,
        price: 8.99,
        isOptimal: true,
        description: 'Smoked brisket, cheese, pickles, no bread',
        mealType: 'anytime'
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
        description: 'Grilled, not breaded - perfect keto option',
        mealType: 'snack'
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
        description: 'Remove breading, keep the skin for fat',
        mealType: 'anytime'
      },
      {
        id: 'pop-3',
        name: 'Naked Tenders (5pc)',
        carbs: 3,
        protein: 32,
        fat: 8,
        calories: 200,
        price: 7.99,
        isOptimal: true,
        description: 'No breading chicken tenders, perfect keto',
        mealType: 'snack'
      },
      {
        id: 'pop-4',
        name: 'Chicken Livers',
        carbs: 4,
        protein: 24,
        fat: 18,
        calories: 280,
        price: 6.49,
        isOptimal: true,
        description: 'Fried chicken livers, nutrient-dense keto option',
        mealType: 'snack'
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
        description: 'Kentucky Grilled Chicken - no breading',
        mealType: 'lunch'
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
        description: 'Low-carb veggie side',
        mealType: 'snack'
      },
      {
        id: 'kfc-3',
        name: 'Grilled Chicken Thigh & Drumstick',
        carbs: 0,
        protein: 34,
        fat: 16,
        calories: 290,
        price: 6.49,
        isOptimal: true,
        description: 'Kentucky Grilled dark meat combo',
        mealType: 'lunch'
      },
      {
        id: 'kfc-4',
        name: 'Original Recipe Chicken (skin, no breading)',
        carbs: 6,
        protein: 40,
        fat: 38,
        calories: 510,
        price: 7.99,
        isOptimal: true,
        description: 'Remove breading, enjoy the seasoned skin',
        mealType: 'anytime'
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
        description: 'Chicken, lettuce, cheese, guac, sour cream, salsa',
        mealType: 'lunch'
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
        description: 'Just the filling in a bowl',
        mealType: 'dinner'
      },
      {
        id: 'tb-3',
        name: 'Carne Asada Bowl (no rice/beans/tortilla)',
        carbs: 8,
        protein: 28,
        fat: 24,
        calories: 370,
        price: 8.49,
        isOptimal: true,
        description: 'Grilled steak, lettuce, pico, sour cream, cheese',
        mealType: 'dinner'
      },
      {
        id: 'tb-4',
        name: 'Chicken Power Bowl (no rice/beans)',
        carbs: 9,
        protein: 30,
        fat: 22,
        calories: 360,
        price: 7.99,
        isOptimal: true,
        description: 'Grilled chicken, lettuce, avocado ranch, cheese, veggies',
        mealType: 'lunch'
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
        description: 'Steak, fajita veggies, guac, cheese, sour cream',
        mealType: 'dinner'
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
        description: 'Grilled chicken, veggies, cheese, salsa, no carbs',
        mealType: 'lunch'
      },
      {
        id: 'qdo-3',
        name: 'Grilled Adobo Chicken Bowl (no rice/beans)',
        carbs: 9,
        protein: 42,
        fat: 22,
        calories: 400,
        price: 11.49,
        isOptimal: true,
        description: 'Adobo chicken, fajita veggies, queso, lettuce',
        mealType: 'lunch'
      },
      {
        id: 'qdo-4',
        name: 'Surf & Turf Bowl (no rice/beans)',
        carbs: 8,
        protein: 38,
        fat: 28,
        calories: 440,
        price: 13.99,
        isOptimal: true,
        description: 'Steak and shrimp, fajita veggies, guac, cheese',
        mealType: 'dinner'
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
        description: 'Steak, cheese, guac, sour cream, veggies',
        mealType: 'dinner'
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
        description: 'Grilled chicken, romaine, Caesar, parmesan',
        mealType: 'lunch'
      },
      {
        id: 'moe-3',
        name: 'Fajita Bowl - Carnitas (no rice/beans)',
        carbs: 8,
        protein: 34,
        fat: 26,
        calories: 410,
        price: 11.49,
        isOptimal: true,
        description: 'Pulled pork, peppers, onions, cheese, guac, salsa',
        mealType: 'lunch'
      },
      {
        id: 'moe-4',
        name: 'Taco Salad (no shell, no beans/rice)',
        carbs: 9,
        protein: 36,
        fat: 30,
        calories: 460,
        price: 11.99,
        isOptimal: true,
        description: 'Your choice protein, lettuce, cheese, sour cream, guac',
        mealType: 'lunch'
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
        description: 'Chicken, bacon, avocado, eggs, no bread',
        mealType: 'breakfast'
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
        description: 'Grilled chicken, romaine, parmesan, no croutons',
        mealType: 'lunch'
      },
      {
        id: 'pan-3',
        name: 'Mediterranean Bowl with Chicken (no grains)',
        carbs: 9,
        protein: 38,
        fat: 26,
        calories: 440,
        price: 12.49,
        isOptimal: true,
        description: 'Grilled chicken, arugula, cucumbers, feta, olives, no quinoa',
        mealType: 'lunch'
      },
      {
        id: 'pan-4',
        name: 'Steak & Arugula Sandwich (no bread)',
        carbs: 7,
        protein: 34,
        fat: 30,
        calories: 430,
        price: 13.99,
        isOptimal: true,
        description: 'Sirloin steak, arugula, tomatoes, onions, horseradish sauce',
        mealType: 'dinner'
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
        description: 'Provolone, ham, prosciutto, salami, oil & vinegar, no bread',
        mealType: 'lunch'
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
        description: 'Steak, cheese, peppers, onions, no bread',
        mealType: 'dinner'
      },
      {
        id: 'jm-3',
        name: '#9 Club Supreme (sub in a tub)',
        carbs: 6,
        protein: 30,
        fat: 26,
        calories: 380,
        price: 10.49,
        isOptimal: true,
        description: 'Turkey, ham, bacon, provolone, mayo, no bread',
        mealType: 'lunch'
      },
      {
        id: 'jm-4',
        name: '#43 Chipotle Cheese Steak (sub in a tub)',
        carbs: 9,
        protein: 34,
        fat: 30,
        calories: 440,
        price: 11.49,
        isOptimal: true,
        description: 'Steak, white American, jalapeños, chipotle mayo, no bread',
        mealType: 'dinner'
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
        description: 'All meats, cheese, lettuce wrap, no bread',
        mealType: 'lunch'
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
        description: 'Turkey, lettuce, tomato, mayo, lettuce-wrapped',
        mealType: 'lunch'
      },
      {
        id: 'jj-3',
        name: 'Unwich - Vito',
        carbs: 7,
        protein: 26,
        fat: 28,
        calories: 390,
        price: 10.49,
        isOptimal: true,
        description: 'Salami, capicola, provolone, lettuce, oil & vinegar',
        mealType: 'lunch'
      },
      {
        id: 'jj-4',
        name: 'Unwich - Beach Club',
        carbs: 6,
        protein: 28,
        fat: 22,
        calories: 340,
        price: 10.99,
        isOptimal: true,
        description: 'Turkey, provolone, avocado, cucumber, lettuce wrap',
        mealType: 'lunch'
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
        description: 'Smoked turkey, ham, cheese, veggies, ranch',
        mealType: 'anytime'
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
        description: 'Salami, pepperoni, ham, provolone, Italian dressing',
        mealType: 'lunch'
      },
      {
        id: 'fh-3',
        name: 'Engineer Salad',
        carbs: 8,
        protein: 32,
        fat: 28,
        calories: 410,
        price: 11.99,
        isOptimal: true,
        description: 'Smoked turkey breast, melted Swiss, sautéed mushrooms',
        mealType: 'lunch'
      },
      {
        id: 'fh-4',
        name: 'Smokehouse Beef & Cheddar Brisket Salad',
        carbs: 9,
        protein: 36,
        fat: 34,
        calories: 480,
        price: 12.49,
        isOptimal: true,
        description: 'USDA choice beef brisket, cheddar, mayo, no bread',
        mealType: 'lunch'
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
        description: 'Perfect keto breakfast on the go',
        mealType: 'breakfast'
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
        description: 'Hard-boiled eggs, cheese, no apple or grapes',
        mealType: 'anytime'
      },
      {
        id: 'sbux-3',
        name: 'Impossible Breakfast Sandwich (no bread)',
        carbs: 8,
        protein: 24,
        fat: 22,
        calories: 330,
        price: 6.75,
        isOptimal: true,
        description: 'Impossible sausage, egg, cheddar, no muffin',
        mealType: 'breakfast'
      },
      {
        id: 'sbux-4',
        name: 'Turkey Bacon & Egg White Bites (2pc)',
        carbs: 6,
        protein: 18,
        fat: 16,
        calories: 250,
        price: 5.95,
        isOptimal: true,
        description: 'Sous vide egg whites, turkey bacon, Monterey Jack',
        mealType: 'breakfast'
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
        description: 'Egg whites, veggies, cheese, skip potatoes',
        mealType: 'anytime'
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
        description: 'Just the bacon, egg, and cheese filling',
        mealType: 'breakfast'
      },
      {
        id: 'dun-3',
        name: 'Sausage Egg & Cheese (no bread)',
        carbs: 5,
        protein: 24,
        fat: 28,
        calories: 360,
        price: 5.99,
        isOptimal: true,
        description: 'Sausage patty, egg, American cheese, no croissant',
        mealType: 'breakfast'
      },
      {
        id: 'dun-4',
        name: 'Turkey Sausage Flatbread (no flatbread)',
        carbs: 6,
        protein: 26,
        fat: 22,
        calories: 330,
        price: 6.49,
        isOptimal: true,
        description: 'Turkey sausage, egg whites, cheese filling only',
        mealType: 'breakfast'
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
        description: 'Grilled salmon with herb butter, sub broccoli for pasta',
        mealType: 'dinner'
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
        description: 'Grilled chicken, tomatoes, mozzarella, no pasta',
        mealType: 'lunch'
      },
      {
        id: 'og-3',
        name: 'Tuscan Sirloin (9oz)',
        carbs: 6,
        protein: 52,
        fat: 34,
        calories: 520,
        price: 21.99,
        isOptimal: true,
        description: '9oz sirloin, grilled veggies, no potatoes',
        mealType: 'dinner'
      },
      {
        id: 'og-4',
        name: 'Shrimp Scampi (no pasta)',
        carbs: 7,
        protein: 38,
        fat: 26,
        calories: 410,
        price: 19.99,
        isOptimal: true,
        description: 'Sautéed shrimp in garlic butter, sub broccoli for pasta',
        mealType: 'anytime'
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
        description: 'Steamed lobster with butter, no sides',
        mealType: 'dinner'
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
        description: 'Grilled shrimp with garlic butter, sub veggies',
        mealType: 'lunch'
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
        description: 'Seafood trio, no rice or potatoes',
        mealType: 'dinner'
      },
      {
        id: 'rl-4',
        name: 'Grilled Atlantic Salmon (7oz)',
        carbs: 5,
        protein: 40,
        fat: 26,
        calories: 410,
        price: 18.99,
        isOptimal: true,
        description: 'Wood-grilled salmon, broccoli, garden salad',
        mealType: 'dinner'
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
        description: 'Grilled sirloin, sub veggies for potato',
        mealType: 'dinner'
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
        description: 'Tender filet with butter, no sides with carbs',
        mealType: 'anytime'
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
        description: 'Seasoned grilled chicken, veggie sides only',
        mealType: 'lunch'
      },
      {
        id: 'out-4',
        name: 'Baby Back Ribs (half rack, dry rub)',
        carbs: 8,
        protein: 42,
        fat: 36,
        calories: 520,
        price: 19.99,
        isOptimal: true,
        description: 'Slow-cooked ribs with dry rub, no BBQ sauce, veggie sides',
        mealType: 'anytime'
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
        description: 'Grilled steak, sub green beans for potato',
        mealType: 'snack'
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
        description: 'Grilled chicken breast, veggie sides',
        mealType: 'lunch'
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
        description: 'Perfectly grilled salmon, green beans and salad',
        mealType: 'snack'
      },
      {
        id: 'tr-4',
        name: 'Filet Medallions (6oz)',
        carbs: 2,
        protein: 44,
        fat: 30,
        calories: 440,
        price: 22.99,
        isOptimal: true,
        description: 'Tender filet medallions with mushrooms, veggie sides',
        mealType: 'anytime'
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
        description: 'Traditional wings, buffalo or dry rub seasonings',
        mealType: 'snack'
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
        description: 'Grilled chicken tenders, no breading',
        mealType: 'snack'
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
        description: 'Grilled chicken, greens, veggies, ranch',
        mealType: 'lunch'
      },
      {
        id: 'bww-4',
        name: 'Traditional Wings (10pc) - Garlic Parmesan',
        carbs: 6,
        protein: 50,
        fat: 44,
        calories: 640,
        price: 14.99,
        isOptimal: true,
        description: 'Traditional wings with garlic parm seasoning',
        mealType: 'snack'
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
        description: 'Grilled chicken with veggies, no rice',
        mealType: 'lunch'
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
        description: '8oz sirloin with grilled shrimp, veggie sides',
        mealType: 'dinner'
      },
      {
        id: 'app-3',
        name: 'Grilled Chicken Breast',
        carbs: 3,
        protein: 46,
        fat: 14,
        calories: 310,
        price: 14.99,
        isOptimal: true,
        description: 'Simply grilled chicken with broccoli and house salad',
        mealType: 'lunch'
      },
      {
        id: 'app-4',
        name: 'Blackened Cajun Salmon',
        carbs: 7,
        protein: 42,
        fat: 28,
        calories: 440,
        price: 17.99,
        isOptimal: true,
        description: 'Blackened salmon with garlic butter, veggie sides',
        mealType: 'dinner'
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
        description: 'Grilled salmon, broccoli side, no rice',
        mealType: 'dinner'
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
        description: 'Chicken, bacon, avocado, eggs, cheese, no croutons',
        mealType: 'breakfast'
      },
      {
        id: 'tgif-3',
        name: 'Sizzling Chicken & Shrimp (no rice)',
        carbs: 8,
        protein: 50,
        fat: 30,
        calories: 490,
        price: 19.99,
        isOptimal: true,
        description: 'Grilled chicken and shrimp with veggies, no rice',
        mealType: 'lunch'
      },
      {
        id: 'tgif-4',
        name: 'Dragon-Glazed Salmon (no glaze)',
        carbs: 6,
        protein: 44,
        fat: 28,
        calories: 450,
        price: 20.99,
        isOptimal: true,
        description: 'Grilled salmon with broccoli, skip the sweet glaze',
        mealType: 'dinner'
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
        description: 'Chile-grilled salmon, sub veggies for rice',
        mealType: 'dinner'
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
        description: 'Grilled chicken, cheese, avocado, no tortilla strips',
        mealType: 'lunch'
      },
      {
        id: 'chi-3',
        name: 'Classic Sirloin (6oz)',
        carbs: 3,
        protein: 42,
        fat: 24,
        calories: 390,
        price: 16.99,
        isOptimal: true,
        description: 'USDA Choice sirloin, broccoli and side salad',
        mealType: 'snack'
      },
      {
        id: 'chi-4',
        name: 'Grilled Chicken with Garlic & Lime',
        carbs: 5,
        protein: 50,
        fat: 20,
        calories: 390,
        price: 15.99,
        isOptimal: true,
        description: 'Marinated chicken breast, steamed broccoli, no rice',
        mealType: 'lunch'
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
        description: 'Beef patty, lettuce, tomato, onion, pickle, wrapped',
        mealType: 'lunch'
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
        description: 'Lettuce-wrapped burger with bacon and guac',
        mealType: 'anytime'
      },
      {
        id: 'rr-3',
        name: 'Simply Grilled Chicken Salad',
        carbs: 7,
        protein: 40,
        fat: 24,
        calories: 400,
        price: 12.99,
        isOptimal: true,
        description: 'Grilled chicken, mixed greens, veggies, ranch dressing',
        mealType: 'lunch'
      },
      {
        id: 'rr-4',
        name: 'Whiskey River BBQ Burger (lettuce wrap, no BBQ)',
        carbs: 8,
        protein: 38,
        fat: 40,
        calories: 550,
        price: 14.49,
        isOptimal: true,
        description: 'Bacon, cheddar, lettuce wrap, skip BBQ sauce and onion straws',
        mealType: 'lunch'
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
        description: 'Center-cut filet, seasoned perfectly, veggie sides',
        mealType: 'anytime'
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
        description: 'Bold-flavored sirloin, no potato sides',
        mealType: 'dinner'
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
        description: 'Seasoned grilled shrimp, broccoli side',
        mealType: 'lunch'
      },
      {
        id: 'lh-4',
        name: 'Grilled Salmon (7oz)',
        carbs: 4,
        protein: 42,
        fat: 28,
        calories: 420,
        price: 19.99,
        isOptimal: true,
        description: 'Fresh Atlantic salmon, veggie sides, no rice',
        mealType: 'dinner'
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
        description: 'Grilled salmon with Asian vegetables, no rice or noodles',
        mealType: 'dinner'
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
        description: 'Wok-seared beef with scallions, skip rice',
        mealType: 'anytime'
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
        description: 'Steamed vegetables, request no sauce',
        mealType: 'anytime'
      },
      {
        id: 'pfc-4',
        name: 'Ginger Chicken with Broccoli (no rice)',
        carbs: 9,
        protein: 44,
        fat: 22,
        calories: 410,
        price: 17.99,
        isOptimal: true,
        description: 'Wok-seared chicken with ginger and broccoli, no rice',
        mealType: 'anytime'
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
        description: 'Two grilled pork chops, sub green beans and salad',
        mealType: 'snack'
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
        description: 'Request without breading, veggie sides only',
        mealType: 'dinner'
      },
      {
        id: 'cb-3',
        name: 'Grilled Chicken Tenderloins',
        carbs: 4,
        protein: 48,
        fat: 20,
        calories: 380,
        price: 13.99,
        isOptimal: true,
        description: 'Grilled chicken tenders, green beans and salad',
        mealType: 'snack'
      },
      {
        id: 'cb-4',
        name: 'Farmhouse Breakfast (eggs & sausage)',
        carbs: 3,
        protein: 36,
        fat: 42,
        calories: 520,
        price: 11.99,
        isOptimal: true,
        description: 'Eggs, sausage, bacon - no biscuits or hash browns',
        mealType: 'breakfast'
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
        description: 'Three eggs, bacon strips, no toast or hash browns',
        mealType: 'breakfast'
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
        description: 'Grilled chicken with green beans and side salad',
        mealType: 'snack'
      },
      {
        id: 'be-3',
        name: 'Sirloin Steak (8oz)',
        carbs: 2,
        protein: 48,
        fat: 30,
        calories: 460,
        price: 16.99,
        isOptimal: true,
        description: 'USDA Choice sirloin, broccoli and house salad',
        mealType: 'dinner'
      },
      {
        id: 'be-4',
        name: 'Sausage & Egg Breakfast',
        carbs: 3,
        protein: 34,
        fat: 40,
        calories: 500,
        price: 9.99,
        isOptimal: true,
        description: 'Sausage links, scrambled eggs, no bread or potatoes',
        mealType: 'breakfast'
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
        description: 'Eggs, cheese, bacon, peppers, onions - no toast or hash browns',
        mealType: 'breakfast'
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
        description: 'Grilled chicken with veggies, request no potatoes',
        mealType: 'lunch'
      },
      {
        id: 'den-3',
        name: 'T-Bone Steak (10oz)',
        carbs: 2,
        protein: 52,
        fat: 36,
        calories: 520,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled steak with broccoli and salad, no potato',
        mealType: 'dinner'
      },
      {
        id: 'den-4',
        name: 'Ultimate Omelette',
        carbs: 6,
        protein: 40,
        fat: 44,
        calories: 580,
        price: 12.99,
        isOptimal: true,
        description: 'Ham, cheese, bacon, sausage - no bread or hash browns',
        mealType: 'breakfast'
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
        description: 'Egg white omelette with veggies and cheese, no toast or hash browns',
        mealType: 'breakfast'
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
        description: 'Plain grilled chicken with steamed broccoli',
        mealType: 'lunch'
      },
      {
        id: 'ihop-3',
        name: 'Build Your Own Omelette (3-egg)',
        carbs: 6,
        protein: 36,
        fat: 40,
        calories: 530,
        price: 10.99,
        isOptimal: true,
        description: 'Eggs, cheese, bacon, veggies - no pancakes or hash browns',
        mealType: 'breakfast'
      },
      {
        id: 'ihop-4',
        name: 'Sirloin Steak Tips',
        carbs: 4,
        protein: 46,
        fat: 28,
        calories: 440,
        price: 15.99,
        isOptimal: true,
        description: 'Grilled steak tips with vegetables, no potatoes',
        mealType: 'dinner'
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
        description: 'Grilled salmon with steamed broccoli',
        mealType: 'dinner'
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
        description: 'Salad bar with proteins, cheese, eggs, low-carb veggies',
        mealType: 'anytime'
      },
      {
        id: 'ruby-3',
        name: 'Petite Sirloin (6oz)',
        carbs: 2,
        protein: 40,
        fat: 22,
        calories: 370,
        price: 15.99,
        isOptimal: true,
        description: 'Grilled sirloin with broccoli and salad bar',
        mealType: 'dinner'
      },
      {
        id: 'ruby-4',
        name: 'Grilled Chicken with Broccoli',
        carbs: 5,
        protein: 48,
        fat: 18,
        calories: 370,
        price: 14.99,
        isOptimal: true,
        description: 'Simply grilled chicken breast with steamed broccoli',
        mealType: 'lunch'
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
        description: 'Traditional wings with buffalo sauce',
        mealType: 'snack'
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
        description: 'Grilled chicken, romaine, parmesan, no croutons',
        mealType: 'lunch'
      },
      {
        id: 'ph-3',
        name: 'Bone-In Wings (6pc) - Garlic Parmesan',
        carbs: 5,
        protein: 36,
        fat: 30,
        calories: 420,
        price: 10.99,
        isOptimal: true,
        description: 'Traditional wings with garlic parmesan seasoning',
        mealType: 'snack'
      },
      {
        id: 'ph-4',
        name: 'Garden Salad with Grilled Chicken',
        carbs: 8,
        protein: 30,
        fat: 22,
        calories: 350,
        price: 9.49,
        isOptimal: true,
        description: 'Mixed greens, chicken, cheese, ranch dressing',
        mealType: 'lunch'
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
        description: 'Plain or buffalo wings, no breading',
        mealType: 'snack'
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
        description: 'Mixed greens, veggies, Italian dressing',
        mealType: 'anytime'
      },
      {
        id: 'dom-3',
        name: 'Hot Buffalo Wings (10pc)',
        carbs: 3,
        protein: 54,
        fat: 34,
        calories: 520,
        price: 12.99,
        isOptimal: true,
        description: 'Bone-in wings with hot buffalo sauce',
        mealType: 'snack'
      },
      {
        id: 'dom-4',
        name: 'Chicken Caesar Salad',
        carbs: 7,
        protein: 36,
        fat: 24,
        calories: 380,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken, romaine, parmesan, Caesar dressing',
        mealType: 'lunch'
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
        description: 'Grilled chicken bites, no breading',
        mealType: 'snack'
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
        description: 'Chicken, bacon, cheese, ranch - no crust',
        mealType: 'lunch'
      },
      {
        id: 'pj-3',
        name: 'Buffalo Wings (8pc)',
        carbs: 4,
        protein: 46,
        fat: 30,
        calories: 460,
        price: 11.99,
        isOptimal: true,
        description: 'Traditional bone-in wings with buffalo sauce',
        mealType: 'snack'
      },
      {
        id: 'pj-4',
        name: 'Garden Fresh Salad with Grilled Chicken',
        carbs: 7,
        protein: 34,
        fat: 22,
        calories: 360,
        price: 9.49,
        isOptimal: true,
        description: 'Mixed greens, grilled chicken, veggies, Italian dressing',
        mealType: 'lunch'
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
        description: 'Grilled chicken, bacon, artichokes, cheese',
        mealType: 'lunch'
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
        description: 'Ham, turkey, bacon, cheese, veggies',
        mealType: 'breakfast'
      },
      {
        id: 'pm-3',
        name: 'Italian Salad',
        carbs: 7,
        protein: 30,
        fat: 30,
        calories: 410,
        price: 9.49,
        isOptimal: true,
        description: 'Salami, pepperoni, cheese, Italian dressing',
        mealType: 'lunch'
      },
      {
        id: 'pm-4',
        name: 'Caesar Salad with Chicken',
        carbs: 8,
        protein: 32,
        fat: 24,
        calories: 370,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken, romaine, parmesan, Caesar dressing',
        mealType: 'lunch'
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
        description: 'Slow-roasted prime rib with steamed broccoli',
        mealType: 'dinner'
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
        description: 'Seasoned grilled chicken with fresh veggies',
        mealType: 'lunch'
      },
      {
        id: 'bjs-3',
        name: 'Atlantic Salmon',
        carbs: 5,
        protein: 44,
        fat: 28,
        calories: 440,
        price: 21.99,
        isOptimal: true,
        description: 'Grilled salmon with asparagus and side salad',
        mealType: 'snack'
      },
      {
        id: 'bjs-4',
        name: 'Enlightened Kale & Roasted Brussels Sprouts Salad',
        carbs: 9,
        protein: 36,
        fat: 26,
        calories: 420,
        price: 15.99,
        isOptimal: true,
        description: 'Grilled chicken, kale, Brussels sprouts, bacon',
        mealType: 'lunch'
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
        description: 'Grilled beef medallions with asparagus',
        mealType: 'dinner'
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
        description: 'Chicken, bacon, eggs, cheese, avocado, no croutons',
        mealType: 'breakfast'
      },
      {
        id: 'ccf-3',
        name: 'Fresh Grilled Salmon',
        carbs: 6,
        protein: 48,
        fat: 32,
        calories: 500,
        price: 26.99,
        isOptimal: true,
        description: 'Grilled salmon with asparagus and broccoli',
        mealType: 'dinner'
      },
      {
        id: 'ccf-4',
        name: 'SkinnyLicious Grilled Turkey Burger (no bun)',
        carbs: 8,
        protein: 42,
        fat: 24,
        calories: 410,
        price: 16.99,
        isOptimal: true,
        description: 'Turkey burger with lettuce wrap, veggies',
        mealType: 'lunch'
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
        description: 'Lettuce-wrapped burger with all toppings',
        mealType: 'anytime'
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
        description: 'Grilled chicken on greens with ranch',
        mealType: 'lunch'
      },
      {
        id: 'cj-3',
        name: 'Lettuce-Wrapped Famous Star',
        carbs: 9,
        protein: 30,
        fat: 36,
        calories: 490,
        price: 7.99,
        isOptimal: true,
        description: 'Charbroiled burger lettuce-wrapped with all toppings',
        mealType: 'anytime'
      },
      {
        id: 'cj-4',
        name: 'Bunless Double Western Bacon Cheeseburger',
        carbs: 10,
        protein: 42,
        fat: 48,
        calories: 640,
        price: 10.49,
        isOptimal: true,
        description: 'Two patties, bacon, cheese - no bun, skip BBQ sauce',
        mealType: 'anytime'
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
        description: 'Lettuce-wrapped 1/3 lb burger',
        mealType: 'anytime'
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
        description: 'Grilled chicken, bacon, cheese on greens',
        mealType: 'lunch'
      },
      {
        id: 'hd-3',
        name: 'Low Carb Bacon Cheese Thickburger',
        carbs: 9,
        protein: 40,
        fat: 50,
        calories: 660,
        price: 9.99,
        isOptimal: true,
        description: 'Lettuce wrap, 1/2 lb patty, bacon, cheese',
        mealType: 'lunch'
      },
      {
        id: 'hd-4',
        name: 'Bunless Monster Thickburger',
        carbs: 10,
        protein: 46,
        fat: 56,
        calories: 730,
        price: 10.99,
        isOptimal: true,
        description: 'Two 1/3 lb patties, four bacon strips, three cheese slices, no bun',
        mealType: 'anytime'
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
        description: 'Quarter pound burger without bun, lettuce wrap',
        mealType: 'lunch'
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
        description: 'Grilled chicken breast, lettuce, tomato',
        mealType: 'lunch'
      },
      {
        id: 'son-3',
        name: 'SuperSONIC Double Cheeseburger (no bun)',
        carbs: 8,
        protein: 40,
        fat: 44,
        calories: 590,
        price: 8.99,
        isOptimal: true,
        description: 'Two patties, double cheese, lettuce wrap',
        mealType: 'lunch'
      },
      {
        id: 'son-4',
        name: 'Crispy Bacon Ranch Salad (no crispy)',
        carbs: 7,
        protein: 28,
        fat: 26,
        calories: 370,
        price: 7.99,
        isOptimal: true,
        description: 'Mixed greens, bacon, ranch - skip crispy chicken, use grilled',
        mealType: 'lunch'
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
        description: 'Single patty burger, no bun, lettuce wrap',
        mealType: 'lunch'
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
        description: 'Grilled chicken, mixed greens, cheese, ranch',
        mealType: 'lunch'
      },
      {
        id: 'what-3',
        name: 'Double Meat Whataburger (no bun)',
        carbs: 9,
        protein: 46,
        fat: 52,
        calories: 680,
        price: 10.49,
        isOptimal: true,
        description: 'Two patties, cheese, veggies - no bun',
        mealType: 'anytime'
      },
      {
        id: 'what-4',
        name: 'Whatachick\'n Sandwich (no bun)',
        carbs: 6,
        protein: 36,
        fat: 18,
        calories: 330,
        price: 8.49,
        isOptimal: true,
        description: 'Grilled chicken breast, no bun, lettuce and tomato',
        mealType: 'lunch'
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
        description: 'Fresh beef patty, cheese, no bun',
        mealType: 'anytime'
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
        description: 'Grilled chicken breast without bun',
        mealType: 'lunch'
      },
      {
        id: 'cul-3',
        name: 'Bacon Deluxe ButterBurger (no bun)',
        carbs: 7,
        protein: 38,
        fat: 42,
        calories: 560,
        price: 9.49,
        isOptimal: true,
        description: 'Single patty, bacon, cheese, no bun',
        mealType: 'anytime'
      },
      {
        id: 'cul-4',
        name: 'Garden Fresco Salad with Grilled Chicken',
        carbs: 8,
        protein: 32,
        fat: 22,
        calories: 360,
        price: 8.99,
        isOptimal: true,
        description: 'Fresh greens, chicken, cheese, ranch dressing',
        mealType: 'lunch'
      }
    ]
  },
  {
    id: 'benihana',
    name: 'Benihana',
    category: 'Asian',
    meals: [{
        id: 'ben-1',
        name: 'Hibachi Steak (no rice)',
        carbs: 5,
        protein: 42,
        fat: 28,
        calories: 430,
        price: 28.99,
        isOptimal: true,
        description: 'Grilled steak with vegetables, no rice or noodles',
        mealType: 'dinner'
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
        description: 'Grilled chicken breast with veggies, skip rice',
        mealType: 'lunch'
      },
      {
        id: 'ben-3',
        name: 'Hibachi Shrimp (no rice)',
        carbs: 3,
        protein: 32,
        fat: 14,
        calories: 260,
        price: 26.99,
        isOptimal: true,
        description: 'Grilled shrimp with vegetables, no rice',
        mealType: 'lunch'
      },
      {
        id: 'ben-4',
        name: 'Hibachi Salmon (no rice)',
        carbs: 4,
        protein: 38,
        fat: 24,
        calories: 380,
        price: 27.99,
        isOptimal: true,
        description: 'Grilled salmon with veggies, skip rice',
        mealType: 'dinner'
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
        description: 'Lower carb pasta alternative, pan-fried in butter',
        mealType: 'anytime'
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
        description: 'Ready-to-eat organic chicken',
        mealType: 'dinner'
      }
    ]
  },
  {
    id: 'wholefoods',
    name: 'Whole Foods',
    category: 'Grocery',
    meals: [{
        id: 'wf-1',
        name: 'Hot Bar - Grilled Chicken & Veggies',
        carbs: 8,
        protein: 35,
        fat: 18,
        calories: 330,
        price: 10.99,
        isOptimal: true,
        description: 'Grilled chicken with roasted vegetables',
        mealType: 'lunch'
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
        description: 'Mixed greens, grilled protein, cheese, eggs, avocado',
        mealType: 'anytime'
      },
      {
        id: 'wf-3',
        name: 'Rotisserie Chicken (quarter)',
        carbs: 0,
        protein: 35,
        fat: 16,
        calories: 290,
        price: 5.99,
        isOptimal: true,
        description: 'Quarter rotisserie chicken',
        mealType: 'anytime'
      },
      {
        id: 'wf-4',
        name: 'Poke Bowl (no rice)',
        carbs: 7,
        protein: 30,
        fat: 18,
        calories: 310,
        price: 12.99,
        isOptimal: true,
        description: 'Fresh ahi tuna, avocado, edamame, no rice',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'kroger',
    name: 'Kroger',
    category: 'Grocery',
    meals: [{
        id: 'krog-1',
        name: 'Rotisserie Chicken (whole)',
        carbs: 0,
        protein: 140,
        fat: 64,
        calories: 1100,
        price: 5.99,
        isOptimal: true,
        description: 'Fresh roasted whole chicken',
        mealType: 'anytime'
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
        description: 'Pre-made salad, remove croutons',
        mealType: 'lunch'
      },
      {
        id: 'krog-3',
        name: 'Buffalo Wings (8pc)',
        carbs: 2,
        protein: 44,
        fat: 28,
        calories: 420,
        price: 9.99,
        isOptimal: true,
        description: 'Fresh deli buffalo wings',
        mealType: 'snack'
      },
      {
        id: 'krog-4',
        name: 'Prepared Salad Bar Bowl',
        carbs: 8,
        protein: 26,
        fat: 24,
        calories: 350,
        price: 8.99,
        isOptimal: true,
        description: 'Custom keto bowl from salad bar',
        mealType: 'lunch'
      }
    ]
  },
  {
    id: 'publix',
    name: 'Publix',
    category: 'Grocery',
    meals: [{
        id: 'pub-1',
        name: 'Pub Sub - Ultimate (no bread)',
        carbs: 6,
        protein: 32,
        fat: 28,
        calories: 400,
        price: 8.99,
        isOptimal: true,
        description: 'All meats and cheese in a bowl',
        mealType: 'anytime'
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
        description: 'Fresh roasted chicken',
        mealType: 'dinner'
      },
      {
        id: 'pub-3',
        name: 'Chicken Tender Sub (no bread)',
        carbs: 5,
        protein: 36,
        fat: 22,
        calories: 360,
        price: 7.99,
        isOptimal: true,
        description: 'Chicken tenders in a bowl, no bread',
        mealType: 'snack'
      },
      {
        id: 'pub-4',
        name: 'Deli Wings (10pc)',
        carbs: 3,
        protein: 50,
        fat: 32,
        calories: 480,
        price: 10.99,
        isOptimal: true,
        description: 'Hot or mild wings from deli',
        mealType: 'snack'
      }
    ]
  },
  {
    id: 'bostonmarket',
    name: 'Boston Market',
    category: 'Casual Dining',
    meals: [{
        id: 'bm-1',
        name: 'Rotisserie Chicken (quarter, white)',
        carbs: 2,
        protein: 42,
        fat: 12,
        calories: 280,
        price: 8.99,
        isOptimal: true,
        description: 'Quarter chicken with green beans',
        mealType: 'snack'
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
        description: 'Half chicken with steamed vegetables',
        mealType: 'dinner'
      },
      {
        id: 'bm-3',
        name: 'Meatloaf with Green Beans',
        carbs: 8,
        protein: 32,
        fat: 24,
        calories: 380,
        price: 9.99,
        isOptimal: true,
        description: 'Homestyle meatloaf with veggies',
        mealType: 'snack'
      },
      {
        id: 'bm-4',
        name: 'Rotisserie Turkey (quarter)',
        carbs: 2,
        protein: 38,
        fat: 10,
        calories: 250,
        price: 8.49,
        isOptimal: true,
        description: 'Quarter turkey with steamed veggies',
        mealType: 'dinner'
      }
    ]
  },
  {
    id: 'elpollo',
    name: 'El Pollo Loco',
    category: 'Mexican',
    meals: [{
        id: 'epl-1',
        name: 'Double Chicken Avocado Salad',
        carbs: 9,
        protein: 48,
        fat: 28,
        calories: 470,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken, avocado, cheese, cilantro dressing',
        mealType: 'lunch'
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
        description: 'Fire-grilled chicken breast, no sides',
        mealType: 'lunch'
      },
      {
        id: 'epl-3',
        name: 'Chicken Leg & Thigh (2pc)',
        carbs: 0,
        protein: 42,
        fat: 20,
        calories: 350,
        price: 6.99,
        isOptimal: true,
        description: 'Fire-grilled dark meat',
        mealType: 'anytime'
      },
      {
        id: 'epl-4',
        name: 'Pollo Bowl (no rice/beans)',
        carbs: 8,
        protein: 40,
        fat: 24,
        calories: 410,
        price: 9.49,
        isOptimal: true,
        description: 'Chicken, cheese, sour cream, avocado',
        mealType: 'lunch'
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
        description: 'Premium filet with butter, asparagus side',
        mealType: 'dinner'
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
        description: 'Fresh salmon with seasonal vegetables',
        mealType: 'dinner'
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
        description: 'USDA Prime filet, sizzling in butter',
        mealType: 'anytime'
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
        description: 'New Orleans-style BBQ shrimp',
        mealType: 'anytime'
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
        description: 'Prime aged beef, no sides with carbs',
        mealType: 'dinner'
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
        description: 'Jumbo shrimp with garlic butter',
        mealType: 'dinner'
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
        description: 'Prime filet with herb butter',
        mealType: 'dinner'
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
        description: 'Pan-seared with vegetables',
        mealType: 'dinner'
      }
    ]
  },
  {
    id: 'peiwei',
    name: 'Pei Wei',
    category: 'Asian',
    meals: [{
        id: 'pw-1',
        name: 'Mongolian Steak (no rice)',
        carbs: 9,
        protein: 32,
        fat: 18,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: 'Wok-fired beef with scallions, skip rice',
        mealType: 'dinner'
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
        description: 'Marinated chicken with mixed veggies',
        mealType: 'lunch'
      },
      {
        id: 'pw-3',
        name: 'Kung Pao Chicken (no rice)',
        carbs: 8,
        protein: 30,
        fat: 16,
        calories: 290,
        price: 10.49,
        isOptimal: true,
        description: 'Spicy chicken with peanuts, no rice',
        mealType: 'anytime'
      },
      {
        id: 'pw-4',
        name: 'Crispy Honey Shrimp Bowl (light sauce, no rice)',
        carbs: 9,
        protein: 26,
        fat: 14,
        calories: 270,
        price: 11.99,
        isOptimal: true,
        description: 'Shrimp with light glaze, skip rice',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'pandaexpress',
    name: 'Panda Express',
    category: 'Asian',
    meals: [{
        id: 'pe-1',
        name: 'Grilled Teriyaki Chicken (no rice)',
        carbs: 9,
        protein: 36,
        fat: 14,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken, skip rice and noodles',
        mealType: 'lunch'
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
        description: 'Beef and broccoli in savory sauce',
        mealType: 'anytime'
      },
      {
        id: 'pe-3',
        name: 'Mushroom Chicken (no rice)',
        carbs: 7,
        protein: 24,
        fat: 10,
        calories: 220,
        price: 9.49,
        isOptimal: true,
        description: 'Chicken and mushrooms, no rice',
        mealType: 'anytime'
      },
      {
        id: 'pe-4',
        name: 'Black Pepper Chicken (no rice)',
        carbs: 9,
        protein: 32,
        fat: 16,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Spicy chicken, skip rice and noodles',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'noodles',
    name: 'Noodles & Company',
    category: 'Casual Dining',
    meals: [{
        id: 'nc-1',
        name: 'Zucchini Noodles with Chicken',
        carbs: 12,
        protein: 32,
        fat: 18,
        calories: 330,
        price: 9.99,
        isOptimal: true,
        description: 'Spiralized zucchini with grilled chicken',
        mealType: 'lunch'
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
        description: 'Grilled chicken Caesar salad',
        mealType: 'lunch'
      },
      {
        id: 'nc-3',
        name: 'Zucchini Rosa with Shrimp',
        carbs: 10,
        protein: 28,
        fat: 20,
        calories: 340,
        price: 10.99,
        isOptimal: true,
        description: 'Zoodles with shrimp in rosa sauce',
        mealType: 'anytime'
      },
      {
        id: 'nc-4',
        name: 'Grilled Chicken Breast (a la carte)',
        carbs: 2,
        protein: 42,
        fat: 12,
        calories: 280,
        price: 7.99,
        isOptimal: true,
        description: 'Plain grilled chicken with side salad',
        mealType: 'snack'
      }
    ]
  },
  {
    id: 'jersey',
    name: 'Jersey Mikes',
    category: 'Sandwich Shop',
    meals: [{
        id: 'jer-1',
        name: '#13 Original Italian (sub in a tub)',
        carbs: 7,
        protein: 28,
        fat: 32,
        calories: 420,
        price: 10.99,
        isOptimal: true,
        description: 'All meats, cheese, veggies in a bowl',
        mealType: 'lunch'
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
        description: 'Turkey, cheese, lettuce, tomato',
        mealType: 'lunch'
      },
      {
        id: 'jer-3',
        name: 'Roast Beef & Provolone (sub in a tub)',
        carbs: 6,
        protein: 30,
        fat: 24,
        calories: 360,
        price: 10.49,
        isOptimal: true,
        description: 'Roast beef, provolone, veggies in bowl',
        mealType: 'lunch'
      },
      {
        id: 'jer-4',
        name: 'Club Sub (sub in a tub)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 340,
        price: 10.99,
        isOptimal: true,
        description: 'Turkey, ham, bacon, provolone',
        mealType: 'lunch'
      }
    ]
  },
  {
    id: 'potbelly',
    name: 'Potbelly',
    category: 'Sandwich Shop',
    meals: [{
        id: 'pot-1',
        name: 'Farmhouse Salad',
        carbs: 9,
        protein: 32,
        fat: 26,
        calories: 390,
        price: 8.99,
        isOptimal: true,
        description: 'Chicken, bacon, eggs, cheese, ranch',
        mealType: 'breakfast'
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
        description: 'Grilled chicken with veggies',
        mealType: 'lunch'
      },
      {
        id: 'pot-3',
        name: 'Mediterranean Salad with Chicken',
        carbs: 8,
        protein: 30,
        fat: 24,
        calories: 370,
        price: 9.49,
        isOptimal: true,
        description: 'Chicken, feta, olives, cucumbers, greens',
        mealType: 'lunch'
      },
      {
        id: 'pot-4',
        name: 'Protein Power Pack',
        carbs: 6,
        protein: 26,
        fat: 20,
        calories: 310,
        price: 8.49,
        isOptimal: true,
        description: 'Turkey, cheese, eggs, veggies',
        mealType: 'anytime'
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
        description: 'Grilled chicken with side salad',
        mealType: 'snack'
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
        description: 'Seasoned beef in a bowl with peppers',
        mealType: 'anytime'
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
        description: 'Grilled chicken, romaine, parmesan, no croutons',
        mealType: 'lunch'
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
        description: 'Buffalo or BBQ wings',
        mealType: 'snack'
      }
    ]
  },
  {
    id: 'wingstop',
    name: 'Wingstop',
    category: 'Fast Food',
    meals: [{
        id: 'ws-1',
        name: 'Classic Wings (10pc)',
        carbs: 3,
        protein: 50,
        fat: 34,
        calories: 500,
        price: 12.99,
        isOptimal: true,
        description: 'Traditional wings, various flavors',
        mealType: 'snack'
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
        description: 'Grilled chicken bites with sauce',
        mealType: 'snack'
      },
      {
        id: 'ws-3',
        name: 'Classic Wings (6pc)',
        carbs: 2,
        protein: 30,
        fat: 20,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Traditional wings, dry rubs available',
        mealType: 'snack'
      },
      {
        id: 'ws-4',
        name: 'Boneless Wings Naked (8pc)',
        carbs: 3,
        protein: 36,
        fat: 14,
        calories: 280,
        price: 10.49,
        isOptimal: true,
        description: 'Grilled chicken bites, sauce on side',
        mealType: 'snack'
      }
    ]
  },
  {
    id: 'chickensalad',
    name: 'Chicken Salad Chick',
    category: 'Casual Dining',
    meals: [{
        id: 'csc-1',
        name: 'Classic Carol Salad',
        carbs: 7,
        protein: 28,
        fat: 24,
        calories: 350,
        price: 8.99,
        isOptimal: true,
        description: 'Chicken salad on lettuce bed',
        mealType: 'lunch'
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
        description: 'Spicy buffalo chicken salad',
        mealType: 'lunch'
      },
      {
        id: 'csc-3',
        name: 'Chicken Salad Sampler on Greens',
        carbs: 8,
        protein: 26,
        fat: 22,
        calories: 330,
        price: 9.99,
        isOptimal: true,
        description: 'Three chicken salad varieties on lettuce',
        mealType: 'lunch'
      },
      {
        id: 'csc-4',
        name: 'Fancy Nancy Salad',
        carbs: 7,
        protein: 32,
        fat: 28,
        calories: 390,
        price: 9.99,
        isOptimal: true,
        description: 'Chicken salad with grapes and pecans on greens',
        mealType: 'lunch'
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
        description: 'Grilled chicken, bacon, eggs, cheese',
        mealType: 'breakfast'
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
        description: 'Chicken, nuts, cheese, mixed greens',
        mealType: 'lunch'
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
        description: 'Grilled chicken, romaine, parmesan',
        mealType: 'lunch'
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
        description: 'Turkey, ham, cheese, eggs on greens',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'corner',
    name: 'Corner Bakery',
    category: 'Casual Dining',
    meals: [{
        id: 'cb-1',
        name: 'Harvest Salad with Chicken',
        carbs: 9,
        protein: 32,
        fat: 28,
        calories: 410,
        price: 10.99,
        isOptimal: true,
        description: 'Grilled chicken, nuts, cheese, greens',
        mealType: 'lunch'
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
        description: 'Grilled chicken with tomato basil, no pasta',
        mealType: 'lunch'
      },
      {
        id: 'cb-3',
        name: 'Mom\'s Chicken Noodle (no noodles)',
        carbs: 6,
        protein: 24,
        fat: 8,
        calories: 190,
        price: 7.99,
        isOptimal: true,
        description: 'Chicken vegetable soup, no noodles',
        mealType: 'anytime'
      },
      {
        id: 'cb-4',
        name: 'Grilled Salmon Salad',
        carbs: 9,
        protein: 36,
        fat: 28,
        calories: 420,
        price: 12.99,
        isOptimal: true,
        description: 'Grilled salmon, greens, veggies, vinaigrette',
        mealType: 'dinner'
      }
    ]
  },
  {
    id: 'cava',
    name: 'CAVA',
    category: 'Mediterranean',
    meals: [{
        id: 'cava-1',
        name: 'Grilled Chicken Bowl',
        carbs: 9,
        protein: 38,
        fat: 24,
        calories: 400,
        price: 10.99,
        isOptimal: true,
        description: 'Chicken, greens, veggies, no rice or pita',
        mealType: 'lunch'
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
        description: 'Steak, greens, hummus, veggies',
        mealType: 'dinner'
      },
      {
        id: 'cava-3',
        name: 'Spicy Lamb Meatball Bowl',
        carbs: 8,
        protein: 34,
        fat: 26,
        calories: 390,
        price: 11.99,
        isOptimal: true,
        description: 'Lamb meatballs, greens, harissa, no rice',
        mealType: 'anytime'
      },
      {
        id: 'cava-4',
        name: 'Falafel Bowl (1-2 falafel, no rice)',
        carbs: 12,
        protein: 18,
        fat: 28,
        calories: 380,
        price: 9.99,
        isOptimal: false,
        description: 'Limited falafel, greens, veggies, tahini',
        mealType: 'anytime'
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
        description: 'Chicken kabobs with vegetables',
        mealType: 'lunch'
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
        description: 'Grilled salmon, mixed greens, feta',
        mealType: 'dinner'
      }
    ]
  },
  {
    id: 'lazydogsaloon',
    name: 'Lazy Dog Restaurant',
    category: 'Casual Dining',
    meals: [{
        id: 'ld-1',
        name: 'Grilled Chicken Breast',
        carbs: 4,
        protein: 48,
        fat: 16,
        calories: 340,
        price: 14.99,
        isOptimal: true,
        description: 'Herb-marinated chicken with veggies',
        mealType: 'lunch'
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
        description: 'Blackened fish, cabbage slaw in a bowl',
        mealType: 'anytime'
      },
      {
        id: 'ld-3',
        name: 'Grilled Steak',
        carbs: 3,
        protein: 44,
        fat: 28,
        calories: 430,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with seasonal veggies',
        mealType: 'dinner'
      },
      {
        id: 'ld-4',
        name: 'Seared Ahi Tuna Bowl',
        carbs: 7,
        protein: 34,
        fat: 20,
        calories: 330,
        price: 15.99,
        isOptimal: true,
        description: 'Seared tuna, avocado, greens, no rice',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'californiapizzo',
    name: 'California Pizza Kitchen',
    category: 'Casual Dining',
    meals: [{
        id: 'cpk-1',
        name: 'Grilled Salmon',
        carbs: 6,
        protein: 40,
        fat: 26,
        calories: 410,
        price: 18.99,
        isOptimal: true,
        description: 'Fresh salmon with asparagus',
        mealType: 'dinner'
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
        description: 'Grilled chicken, greens, goat cheese',
        mealType: 'lunch'
      },
      {
        id: 'cpk-3',
        name: 'Grilled Chicken Breast',
        carbs: 4,
        protein: 46,
        fat: 14,
        calories: 320,
        price: 15.99,
        isOptimal: true,
        description: 'Herb-grilled chicken with broccoli',
        mealType: 'lunch'
      },
      {
        id: 'cpk-4',
        name: 'Miso Salmon Bowl (no rice)',
        carbs: 8,
        protein: 38,
        fat: 24,
        calories: 390,
        price: 19.99,
        isOptimal: true,
        description: 'Miso-glazed salmon, edamame, no rice',
        mealType: 'dinner'
      }
    ]
  },
  {
    id: 'yardhouse',
    name: 'Yard House',
    category: 'Casual Dining',
    meals: [{
        id: 'yh-1',
        name: 'Grilled Chicken Breast',
        carbs: 5,
        protein: 46,
        fat: 18,
        calories: 360,
        price: 16.99,
        isOptimal: true,
        description: 'Seasoned chicken with steamed broccoli',
        mealType: 'lunch'
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
        description: 'Fresh ahi tuna with avocado',
        mealType: 'anytime'
      },
      {
        id: 'yh-3',
        name: 'Grilled Salmon',
        carbs: 6,
        protein: 42,
        fat: 26,
        calories: 410,
        price: 19.99,
        isOptimal: true,
        description: 'Fresh grilled salmon with asparagus',
        mealType: 'dinner'
      },
      {
        id: 'yh-4',
        name: 'Chicken Caesar Salad',
        carbs: 8,
        protein: 36,
        fat: 28,
        calories: 410,
        price: 14.99,
        isOptimal: true,
        description: 'Grilled chicken, romaine, parmesan, no croutons',
        mealType: 'lunch'
      }
    ]
  },
  {
    id: 'bonefish',
    name: 'Bonefish Grill',
    category: 'Casual Dining',
    meals: [{
        id: 'bf-1',
        name: 'Grilled Salmon',
        carbs: 4,
        protein: 42,
        fat: 28,
        calories: 430,
        price: 21.99,
        isOptimal: true,
        description: 'Fresh Atlantic salmon with asparagus',
        mealType: 'dinner'
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
        description: 'Grilled chicken with goat cheese and vegetables',
        mealType: 'lunch'
      },
      {
        id: 'bf-3',
        name: 'Mahi-Mahi',
        carbs: 5,
        protein: 38,
        fat: 20,
        calories: 340,
        price: 20.99,
        isOptimal: true,
        description: 'Grilled mahi with asparagus',
        mealType: 'dinner'
      },
      {
        id: 'bf-4',
        name: 'Ahi Tuna Steak',
        carbs: 3,
        protein: 44,
        fat: 16,
        calories: 320,
        price: 23.99,
        isOptimal: true,
        description: 'Seared rare ahi with vegetables',
        mealType: 'dinner'
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
        description: 'Grilled chicken, goat cheese, sundried tomatoes',
        mealType: 'lunch'
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
        description: 'Fresh salmon with vegetables, no pasta',
        mealType: 'dinner'
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
        description: 'Grilled salmon with vegetables',
        mealType: 'dinner'
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
        description: 'Grilled chicken, mozzarella, tomatoes, no pasta',
        mealType: 'lunch'
      }
    ]
  },
  {
    id: 'waffehouse',
    name: 'Waffle House',
    category: 'Casual Dining',
    meals: [{
        id: 'wh-1',
        name: 'Eggs & Bacon',
        carbs: 2,
        protein: 28,
        fat: 32,
        calories: 400,
        price: 7.99,
        isOptimal: true,
        description: 'Three eggs with bacon, no toast or hashbrowns',
        mealType: 'breakfast'
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
        description: 'Plain grilled chicken with side salad',
        mealType: 'snack'
      },
      {
        id: 'wh-3',
        name: 'Ham & Cheese Omelette (no toast)',
        carbs: 4,
        protein: 32,
        fat: 28,
        calories: 390,
        price: 8.49,
        isOptimal: true,
        description: 'Three-egg omelette with ham and cheese',
        mealType: 'breakfast'
      },
      {
        id: 'wh-4',
        name: 'T-Bone Steak & Eggs',
        carbs: 3,
        protein: 56,
        fat: 42,
        calories: 620,
        price: 13.99,
        isOptimal: true,
        description: 'T-bone steak with eggs, no hashbrowns',
        mealType: 'dinner'
      }
    ]
  },
  {
    id: 'jamba',
    name: 'Jamba Juice',
    category: 'Cafe',
    meals: [{
        id: 'jam-1',
        name: 'Impossible Breakfast Sandwich (no bread)',
        carbs: 8,
        protein: 24,
        fat: 18,
        calories: 290,
        price: 6.99,
        isOptimal: true,
        description: 'Plant-based patty, egg, cheese - no bread',
        mealType: 'breakfast'
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
        description: 'Kale, mango, pineapple blend - skip granola',
        mealType: 'anytime'
      },
      {
        id: 'jam-3',
        name: 'Protein Berry Workout Bowl (no granola)',
        carbs: 11,
        protein: 22,
        fat: 4,
        calories: 160,
        price: 8.49,
        isOptimal: true,
        description: 'Berry blend with protein, skip granola',
        mealType: 'anytime'
      },
      {
        id: 'jam-4',
        name: 'Açaí Primo Bowl (no granola)',
        carbs: 13,
        protein: 12,
        fat: 8,
        calories: 170,
        price: 8.99,
        isOptimal: false,
        description: 'Açaí blend, skip granola topping',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'smoothieking',
    name: 'Smoothie King',
    category: 'Cafe',
    meals: [{
        id: 'sk-1',
        name: 'Keto Champ Berry',
        carbs: 12,
        protein: 32,
        fat: 24,
        calories: 370,
        price: 7.99,
        isOptimal: true,
        description: 'Keto-friendly smoothie with MCT oil',
        mealType: 'anytime'
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
        description: 'Coffee smoothie with keto ingredients',
        mealType: 'anytime'
      },
      {
        id: 'sk-3',
        name: 'Gladiator Strawberry',
        carbs: 6,
        protein: 45,
        fat: 2,
        calories: 230,
        price: 7.99,
        isOptimal: true,
        description: 'Protein smoothie with minimal carbs',
        mealType: 'anytime'
      },
      {
        id: 'sk-4',
        name: 'Gladiator Chocolate',
        carbs: 7,
        protein: 45,
        fat: 3,
        calories: 240,
        price: 7.99,
        isOptimal: true,
        description: 'Chocolate protein smoothie',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'caribou',
    name: 'Caribou Coffee',
    category: 'Cafe',
    meals: [{
        id: 'cc-1',
        name: 'Protein Power Breakfast Bowl',
        carbs: 8,
        protein: 26,
        fat: 22,
        calories: 330,
        price: 6.99,
        isOptimal: true,
        description: 'Eggs, cheese, bacon, no potatoes',
        mealType: 'breakfast'
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
        description: 'Egg bites with turkey sausage',
        mealType: 'breakfast'
      },
      {
        id: 'cc-3',
        name: 'Sausage & Egg Sandwich (no bread)',
        carbs: 5,
        protein: 24,
        fat: 26,
        calories: 340,
        price: 5.99,
        isOptimal: true,
        description: 'Sausage, egg, cheese - no bread',
        mealType: 'breakfast'
      },
      {
        id: 'cc-4',
        name: 'Spinach & Feta Egg Bites',
        carbs: 6,
        protein: 16,
        fat: 14,
        calories: 210,
        price: 4.49,
        isOptimal: true,
        description: 'Egg bites with spinach and feta',
        mealType: 'breakfast'
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
        description: 'Egg bites with bacon and cheese',
        mealType: 'breakfast'
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
        description: 'Hardboiled eggs, cheese, almonds',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'pieology',
    name: 'Pieology',
    category: 'Pizza',
    meals: [{
        id: 'pieo-1',
        name: 'Caesar Salad with Chicken',
        carbs: 7,
        protein: 32,
        fat: 24,
        calories: 360,
        price: 9.99,
        isOptimal: true,
        description: 'Grilled chicken Caesar, no croutons',
        mealType: 'lunch'
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
        description: 'Traditional wings with buffalo sauce',
        mealType: 'snack'
      },
      {
        id: 'pieo-3',
        name: 'Grilled Chicken Salad',
        carbs: 6,
        protein: 30,
        fat: 20,
        calories: 310,
        price: 9.49,
        isOptimal: true,
        description: 'Grilled chicken, greens, Italian dressing',
        mealType: 'lunch'
      },
      {
        id: 'pieo-4',
        name: 'Traditional Wings (6pc)',
        carbs: 2,
        protein: 32,
        fat: 20,
        calories: 310,
        price: 9.99,
        isOptimal: true,
        description: 'Wings with choice of sauce',
        mealType: 'snack'
      }
    ]
  },
  {
    id: 'blaze',
    name: 'Blaze Pizza',
    category: 'Pizza',
    meals: [{
        id: 'blz-1',
        name: 'Grilled Chicken Salad',
        carbs: 8,
        protein: 34,
        fat: 22,
        calories: 350,
        price: 8.99,
        isOptimal: true,
        description: 'Grilled chicken, greens, veggies',
        mealType: 'lunch'
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
        description: 'Cauliflower crust with toppings',
        mealType: 'anytime'
      },
      {
        id: 'blz-3',
        name: 'Caesar Salad with Chicken',
        carbs: 7,
        protein: 32,
        fat: 24,
        calories: 360,
        price: 9.49,
        isOptimal: true,
        description: 'Grilled chicken Caesar, no croutons',
        mealType: 'lunch'
      },
      {
        id: 'blz-4',
        name: 'Buffalo Wings (6pc)',
        carbs: 3,
        protein: 34,
        fat: 22,
        calories: 340,
        price: 9.99,
        isOptimal: true,
        description: 'Spicy buffalo wings',
        mealType: 'snack'
      }
    ]
  },
  {
    id: 'modsquad',
    name: 'MOD Pizza',
    category: 'Pizza',
    meals: [{
        id: 'mod-1',
        name: 'Salad - No Name',
        carbs: 7,
        protein: 30,
        fat: 24,
        calories: 350,
        price: 9.99,
        isOptimal: true,
        description: 'Customizable salad with grilled chicken',
        mealType: 'lunch'
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
        description: 'Keto-friendly crust with toppings',
        mealType: 'anytime'
      },
      {
        id: 'mod-3',
        name: 'Caesar Salad',
        carbs: 6,
        protein: 8,
        fat: 18,
        calories: 220,
        price: 8.99,
        isOptimal: true,
        description: 'Classic Caesar, add chicken for $2',
        mealType: 'lunch'
      },
      {
        id: 'mod-1',
        name: 'Salad - No Name',
        carbs: 7,
        protein: 30,
        fat: 24,
        calories: 350,
        price: 9.99,
        isOptimal: true,
        description: 'Customizable salad with grilled chicken',
        mealType: 'lunch'
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
        description: 'Keto-friendly crust with toppings',
        mealType: 'anytime'
      },
      {
        id: 'mod-4',
        name: 'Garden Salad with Grilled Chicken',
        carbs: 8,
        protein: 32,
        fat: 22,
        calories: 350,
        price: 9.99,
        isOptimal: true,
        description: 'Mixed greens, grilled chicken, veggies',
        mealType: 'lunch'
      }
    ]
  },
  {
    id: 'jitb',
    name: 'Jack in the Box',
    category: 'Fast Food',
    meals: [{
        id: 'jib-1',
        name: 'Grilled Chicken Salad',
        carbs: 8,
        protein: 32,
        fat: 22,
        calories: 350,
        price: 7.99,
        isOptimal: true,
        description: 'Grilled chicken on greens',
        mealType: 'lunch'
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
        description: 'Burger without bun, lettuce wrap',
        mealType: 'lunch'
      },
      {
        id: 'jib-3',
        name: 'Breakfast Jack (no bun)',
        carbs: 4,
        protein: 20,
        fat: 18,
        calories: 260,
        price: 4.99,
        isOptimal: true,
        description: 'Egg, ham, cheese - no bun',
        mealType: 'breakfast'
      },
      {
        id: 'jib-4',
        name: 'Sourdough Grilled Chicken (no bread)',
        carbs: 6,
        protein: 34,
        fat: 20,
        calories: 330,
        price: 7.49,
        isOptimal: true,
        description: 'Grilled chicken, bacon, cheese, no bread',
        mealType: 'lunch'
      }
    ]
  },
  {
    id: 'checkers',
    name: 'Checkers',
    category: 'Fast Food',
    meals: [{
        id: 'chk-1',
        name: 'Grilled Chicken Sandwich (no bun)',
        carbs: 5,
        protein: 32,
        fat: 16,
        calories: 280,
        price: 6.99,
        isOptimal: true,
        description: 'Grilled chicken breast, no bun',
        mealType: 'lunch'
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
        description: 'Double burger, cheese, bacon, no bun',
        mealType: 'anytime'
      },
      {
        id: 'chk-3',
        name: 'Fry Seasoned Chicken Bites (8pc, no breading)',
        carbs: 4,
        protein: 28,
        fat: 12,
        calories: 240,
        price: 5.99,
        isOptimal: true,
        description: 'Grilled chicken bites',
        mealType: 'lunch'
      },
      {
        id: 'chk-4',
        name: 'Bacon Loaded Fries (no fries, toppings only)',
        carbs: 6,
        protein: 22,
        fat: 32,
        calories: 390,
        price: 6.49,
        isOptimal: true,
        description: 'Bacon, cheese, ranch - skip the fries',
        mealType: 'anytime'
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
        description: 'Seasoned grilled chicken',
        mealType: 'lunch'
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
        description: 'Bacon cheeseburger without bun',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'cookout',
    name: 'Cook Out',
    category: 'Fast Food',
    meals: [{
        id: 'cok-1',
        name: 'Grilled Chicken Breast',
        carbs: 3,
        protein: 38,
        fat: 12,
        calories: 260,
        price: 5.99,
        isOptimal: true,
        description: 'Plain grilled chicken',
        mealType: 'lunch'
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
        description: 'Charbroiled burger, no bun',
        mealType: 'anytime'
      },
      {
        id: 'cok-3',
        name: 'BLT (no bun)',
        carbs: 5,
        protein: 18,
        fat: 24,
        calories: 310,
        price: 4.49,
        isOptimal: true,
        description: 'Bacon, lettuce, tomato in a bowl',
        mealType: 'anytime'
      },
      {
        id: 'cok-4',
        name: 'Quesadilla (cheese only, 1/2)',
        carbs: 8,
        protein: 20,
        fat: 22,
        calories: 300,
        price: 4.99,
        isOptimal: true,
        description: 'Half cheese quesadilla, keto-friendly portion',
        mealType: 'anytime'
      }
    ]
  }
,
  {
    id: 'farmer-cow',
    name: 'Farmer & The Cow',
    category: 'Casual Dining',
    meals: [
      {
        id: 'farmer-cow-1',
        name: 'Grilled Chicken Breast',
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed vegetables',
        mealType: 'lunch'
      },
      {
        id: 'farmer-cow-2',
        name: 'Sirloin Steak (8oz)',
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with side salad',
        mealType: 'dinner'
      },
      {
        id: 'farmer-cow-3',
        name: 'Cobb Salad (no croutons)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, egg, avocado, cheese',
        mealType: 'lunch'
      },
      {
        id: 'farmer-cow-4',
        name: 'Bunless Cheeseburger',
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with cheese',
        mealType: 'anytime'
      },
      {
        id: 'farmer-cow-5',
        name: 'Breakfast Scramble',
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Eggs, cheese, sausage, peppers',
        mealType: 'breakfast'
      }
    ]
  },
  {
    id: 'mrs-robinos',
    name: 'Mrs. Robino\'s Restaurant',
    category: 'Casual Dining',
    meals: [
      {
        id: 'mrs-robinos-1',
        name: 'Grilled Chicken Breast',
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed vegetables',
        mealType: 'lunch'
      },
      {
        id: 'mrs-robinos-2',
        name: 'Sirloin Steak (8oz)',
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with side salad',
        mealType: 'dinner'
      },
      {
        id: 'mrs-robinos-3',
        name: 'Cobb Salad (no croutons)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, egg, avocado, cheese',
        mealType: 'lunch'
      },
      {
        id: 'mrs-robinos-4',
        name: 'Bunless Cheeseburger',
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with cheese',
        mealType: 'anytime'
      },
      {
        id: 'mrs-robinos-5',
        name: 'Breakfast Scramble',
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Eggs, cheese, sausage, peppers',
        mealType: 'breakfast'
      }
    ]
  },
  {
    id: 'capers-lemons',
    name: 'Capers & Lemons',
    category: 'Casual Dining',
    meals: [
      {
        id: 'capers-lemons-1',
        name: 'Grilled Chicken Breast',
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed vegetables',
        mealType: 'lunch'
      },
      {
        id: 'capers-lemons-2',
        name: 'Sirloin Steak (8oz)',
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with side salad',
        mealType: 'dinner'
      },
      {
        id: 'capers-lemons-3',
        name: 'Cobb Salad (no croutons)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, egg, avocado, cheese',
        mealType: 'lunch'
      },
      {
        id: 'capers-lemons-4',
        name: 'Bunless Cheeseburger',
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with cheese',
        mealType: 'anytime'
      },
      {
        id: 'capers-lemons-5',
        name: 'Breakfast Scramble',
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Eggs, cheese, sausage, peppers',
        mealType: 'breakfast'
      }
    ]
  },
  {
    id: 'cafe-napoli',
    name: 'Cafe Napoli',
    category: 'Italian',
    meals: [
      {
        id: 'cafe-napoli-1',
        name: 'Chicken Parmigiana (no breading)',
        carbs: 8,
        protein: 42,
        fat: 24,
        calories: 400,
        price: 16.99,
        isOptimal: true,
        description: 'Grilled chicken with marinara and mozzarella',
        mealType: 'dinner'
      },
      {
        id: 'cafe-napoli-2',
        name: 'Caprese Salad',
        carbs: 6,
        protein: 12,
        fat: 18,
        calories: 230,
        price: 9.99,
        isOptimal: true,
        description: 'Fresh mozzarella, tomatoes, basil, olive oil',
        mealType: 'lunch'
      },
      {
        id: 'cafe-napoli-3',
        name: 'Shrimp Scampi (zucchini noodles)',
        carbs: 9,
        protein: 26,
        fat: 22,
        calories: 330,
        price: 18.99,
        isOptimal: false,
        description: 'Garlic butter shrimp over zoodles',
        mealType: 'dinner'
      },
      {
        id: 'cafe-napoli-4',
        name: 'Italian Sausage & Peppers',
        carbs: 7,
        protein: 24,
        fat: 28,
        calories: 370,
        price: 13.99,
        isOptimal: true,
        description: 'Grilled sausage with peppers and onions',
        mealType: 'anytime'
      },
      {
        id: 'cafe-napoli-5',
        name: 'Antipasto Platter',
        carbs: 8,
        protein: 18,
        fat: 24,
        calories: 310,
        price: 14.99,
        isOptimal: true,
        description: 'Salami, prosciutto, cheese, olives',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'cosmos',
    name: 'Cosmos Restaurant',
    category: 'Casual Dining',
    meals: [
      {
        id: 'cosmos-1',
        name: 'Grilled Chicken Breast',
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed vegetables',
        mealType: 'lunch'
      },
      {
        id: 'cosmos-2',
        name: 'Sirloin Steak (8oz)',
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with side salad',
        mealType: 'dinner'
      },
      {
        id: 'cosmos-3',
        name: 'Cobb Salad (no croutons)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, egg, avocado, cheese',
        mealType: 'lunch'
      },
      {
        id: 'cosmos-4',
        name: 'Bunless Cheeseburger',
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with cheese',
        mealType: 'anytime'
      },
      {
        id: 'cosmos-5',
        name: 'Breakfast Scramble',
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Eggs, cheese, sausage, peppers',
        mealType: 'breakfast'
      }
    ]
  },
  {
    id: 'libbys',
    name: 'Libby\'s Restaurant',
    category: 'Casual Dining',
    meals: [
      {
        id: 'libbys-1',
        name: 'Grilled Chicken Breast',
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed vegetables',
        mealType: 'lunch'
      },
      {
        id: 'libbys-2',
        name: 'Sirloin Steak (8oz)',
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with side salad',
        mealType: 'dinner'
      },
      {
        id: 'libbys-3',
        name: 'Cobb Salad (no croutons)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, egg, avocado, cheese',
        mealType: 'lunch'
      },
      {
        id: 'libbys-4',
        name: 'Bunless Cheeseburger',
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with cheese',
        mealType: 'anytime'
      },
      {
        id: 'libbys-5',
        name: 'Breakfast Scramble',
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Eggs, cheese, sausage, peppers',
        mealType: 'breakfast'
      }
    ]
  },
  {
    id: 'marys-kountry',
    name: 'Mary\'s Kountry Kitchen',
    category: 'Casual Dining',
    meals: [
      {
        id: 'marys-kountry-1',
        name: 'Grilled Chicken Breast',
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed vegetables',
        mealType: 'lunch'
      },
      {
        id: 'marys-kountry-2',
        name: 'Sirloin Steak (8oz)',
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with side salad',
        mealType: 'dinner'
      },
      {
        id: 'marys-kountry-3',
        name: 'Cobb Salad (no croutons)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, egg, avocado, cheese',
        mealType: 'lunch'
      },
      {
        id: 'marys-kountry-4',
        name: 'Bunless Cheeseburger',
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with cheese',
        mealType: 'anytime'
      },
      {
        id: 'marys-kountry-5',
        name: 'Breakfast Scramble',
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Eggs, cheese, sausage, peppers',
        mealType: 'breakfast'
      }
    ]
  },
  {
    id: 'smileys-diner',
    name: 'Smiley\'s Diner',
    category: 'Casual Dining',
    meals: [
      {
        id: 'smileys-diner-1',
        name: 'Grilled Chicken Breast',
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed vegetables',
        mealType: 'lunch'
      },
      {
        id: 'smileys-diner-2',
        name: 'Sirloin Steak (8oz)',
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with side salad',
        mealType: 'dinner'
      },
      {
        id: 'smileys-diner-3',
        name: 'Cobb Salad (no croutons)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, egg, avocado, cheese',
        mealType: 'lunch'
      },
      {
        id: 'smileys-diner-4',
        name: 'Bunless Cheeseburger',
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with cheese',
        mealType: 'anytime'
      },
      {
        id: 'smileys-diner-5',
        name: 'Breakfast Scramble',
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Eggs, cheese, sausage, peppers',
        mealType: 'breakfast'
      }
    ]
  },
  {
    id: 'derbys',
    name: 'Derby\'s Bar & Restaurant',
    category: 'Bar & Grill',
    meals: [
      {
        id: 'derbys-1',
        name: 'Bunless Burger',
        carbs: 4,
        protein: 32,
        fat: 28,
        calories: 390,
        price: 11.99,
        isOptimal: true,
        description: 'Half-pound burger, lettuce wrapped',
        mealType: 'lunch'
      },
      {
        id: 'derbys-2',
        name: 'Buffalo Wings',
        carbs: 2,
        protein: 28,
        fat: 24,
        calories: 340,
        price: 12.99,
        isOptimal: true,
        description: 'Traditional wings, no breading',
        mealType: 'anytime'
      },
      {
        id: 'derbys-3',
        name: 'Grilled Chicken Caesar (no croutons)',
        carbs: 6,
        protein: 36,
        fat: 18,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: 'Romaine, parmesan, Caesar dressing',
        mealType: 'lunch'
      },
      {
        id: 'derbys-4',
        name: 'Steak Tips',
        carbs: 3,
        protein: 34,
        fat: 26,
        calories: 380,
        price: 15.99,
        isOptimal: true,
        description: 'Marinated sirloin tips with vegetables',
        mealType: 'dinner'
      },
      {
        id: 'derbys-5',
        name: 'Bacon-Wrapped Shrimp',
        carbs: 4,
        protein: 22,
        fat: 18,
        calories: 270,
        price: 13.99,
        isOptimal: true,
        description: 'Jumbo shrimp wrapped in bacon',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'grain-craft',
    name: 'Grain Craft Bar + Kitchen',
    category: 'Bar & Grill',
    meals: [
      {
        id: 'grain-craft-1',
        name: 'Bunless Burger',
        carbs: 4,
        protein: 32,
        fat: 28,
        calories: 390,
        price: 11.99,
        isOptimal: true,
        description: 'Half-pound burger, lettuce wrapped',
        mealType: 'lunch'
      },
      {
        id: 'grain-craft-2',
        name: 'Buffalo Wings',
        carbs: 2,
        protein: 28,
        fat: 24,
        calories: 340,
        price: 12.99,
        isOptimal: true,
        description: 'Traditional wings, no breading',
        mealType: 'anytime'
      },
      {
        id: 'grain-craft-3',
        name: 'Grilled Chicken Caesar (no croutons)',
        carbs: 6,
        protein: 36,
        fat: 18,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: 'Romaine, parmesan, Caesar dressing',
        mealType: 'lunch'
      },
      {
        id: 'grain-craft-4',
        name: 'Steak Tips',
        carbs: 3,
        protein: 34,
        fat: 26,
        calories: 380,
        price: 15.99,
        isOptimal: true,
        description: 'Marinated sirloin tips with vegetables',
        mealType: 'dinner'
      },
      {
        id: 'grain-craft-5',
        name: 'Bacon-Wrapped Shrimp',
        carbs: 4,
        protein: 22,
        fat: 18,
        calories: 270,
        price: 13.99,
        isOptimal: true,
        description: 'Jumbo shrimp wrapped in bacon',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'two-stones',
    name: 'Two Stones Pub',
    category: 'Bar & Grill',
    meals: [
      {
        id: 'two-stones-1',
        name: 'Bunless Burger',
        carbs: 4,
        protein: 32,
        fat: 28,
        calories: 390,
        price: 11.99,
        isOptimal: true,
        description: 'Half-pound burger, lettuce wrapped',
        mealType: 'lunch'
      },
      {
        id: 'two-stones-2',
        name: 'Buffalo Wings',
        carbs: 2,
        protein: 28,
        fat: 24,
        calories: 340,
        price: 12.99,
        isOptimal: true,
        description: 'Traditional wings, no breading',
        mealType: 'anytime'
      },
      {
        id: 'two-stones-3',
        name: 'Grilled Chicken Caesar (no croutons)',
        carbs: 6,
        protein: 36,
        fat: 18,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: 'Romaine, parmesan, Caesar dressing',
        mealType: 'lunch'
      },
      {
        id: 'two-stones-4',
        name: 'Steak Tips',
        carbs: 3,
        protein: 34,
        fat: 26,
        calories: 380,
        price: 15.99,
        isOptimal: true,
        description: 'Marinated sirloin tips with vegetables',
        mealType: 'dinner'
      },
      {
        id: 'two-stones-5',
        name: 'Bacon-Wrapped Shrimp',
        carbs: 4,
        protein: 22,
        fat: 18,
        calories: 270,
        price: 13.99,
        isOptimal: true,
        description: 'Jumbo shrimp wrapped in bacon',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'bbc-tavern',
    name: 'BBC Tavern & Grill',
    category: 'Bar & Grill',
    meals: [
      {
        id: 'bbc-tavern-1',
        name: 'Bunless Burger',
        carbs: 4,
        protein: 32,
        fat: 28,
        calories: 390,
        price: 11.99,
        isOptimal: true,
        description: 'Half-pound burger, lettuce wrapped',
        mealType: 'lunch'
      },
      {
        id: 'bbc-tavern-2',
        name: 'Buffalo Wings',
        carbs: 2,
        protein: 28,
        fat: 24,
        calories: 340,
        price: 12.99,
        isOptimal: true,
        description: 'Traditional wings, no breading',
        mealType: 'anytime'
      },
      {
        id: 'bbc-tavern-3',
        name: 'Grilled Chicken Caesar (no croutons)',
        carbs: 6,
        protein: 36,
        fat: 18,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: 'Romaine, parmesan, Caesar dressing',
        mealType: 'lunch'
      },
      {
        id: 'bbc-tavern-4',
        name: 'Steak Tips',
        carbs: 3,
        protein: 34,
        fat: 26,
        calories: 380,
        price: 15.99,
        isOptimal: true,
        description: 'Marinated sirloin tips with vegetables',
        mealType: 'dinner'
      },
      {
        id: 'bbc-tavern-5',
        name: 'Bacon-Wrapped Shrimp',
        carbs: 4,
        protein: 22,
        fat: 18,
        calories: 270,
        price: 13.99,
        isOptimal: true,
        description: 'Jumbo shrimp wrapped in bacon',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'iron-hill',
    name: 'Iron Hill Brewery',
    category: 'Bar & Grill',
    meals: [
      {
        id: 'iron-hill-1',
        name: 'Bunless Burger',
        carbs: 4,
        protein: 32,
        fat: 28,
        calories: 390,
        price: 11.99,
        isOptimal: true,
        description: 'Half-pound burger, lettuce wrapped',
        mealType: 'lunch'
      },
      {
        id: 'iron-hill-2',
        name: 'Buffalo Wings',
        carbs: 2,
        protein: 28,
        fat: 24,
        calories: 340,
        price: 12.99,
        isOptimal: true,
        description: 'Traditional wings, no breading',
        mealType: 'anytime'
      },
      {
        id: 'iron-hill-3',
        name: 'Grilled Chicken Caesar (no croutons)',
        carbs: 6,
        protein: 36,
        fat: 18,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: 'Romaine, parmesan, Caesar dressing',
        mealType: 'lunch'
      },
      {
        id: 'iron-hill-4',
        name: 'Steak Tips',
        carbs: 3,
        protein: 34,
        fat: 26,
        calories: 380,
        price: 15.99,
        isOptimal: true,
        description: 'Marinated sirloin tips with vegetables',
        mealType: 'dinner'
      },
      {
        id: 'iron-hill-5',
        name: 'Bacon-Wrapped Shrimp',
        carbs: 4,
        protein: 22,
        fat: 18,
        calories: 270,
        price: 13.99,
        isOptimal: true,
        description: 'Jumbo shrimp wrapped in bacon',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'po-boys',
    name: 'Po\' Boys Creole Restaurant',
    category: 'Cajun/Creole',
    meals: [
      {
        id: 'po-boys-1',
        name: 'Blackened Catfish',
        carbs: 3,
        protein: 28,
        fat: 16,
        calories: 270,
        price: 14.99,
        isOptimal: true,
        description: 'Cajun-spiced catfish with remoulade',
        mealType: 'dinner'
      },
      {
        id: 'po-boys-2',
        name: 'Shrimp Étouffée (no rice)',
        carbs: 8,
        protein: 24,
        fat: 22,
        calories: 320,
        price: 16.99,
        isOptimal: true,
        description: 'Spicy shrimp stew, skip the rice',
        mealType: 'lunch'
      },
      {
        id: 'po-boys-3',
        name: 'Jambalaya (low-rice version)',
        carbs: 9,
        protein: 26,
        fat: 18,
        calories: 300,
        price: 13.99,
        isOptimal: false,
        description: 'Request extra meat, light on rice',
        mealType: 'dinner'
      },
      {
        id: 'po-boys-4',
        name: 'Boudin Sausage',
        carbs: 7,
        protein: 20,
        fat: 24,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: 'Cajun pork and rice sausage',
        mealType: 'anytime'
      },
      {
        id: 'po-boys-5',
        name: 'Crawfish Boil (1 lb)',
        carbs: 2,
        protein: 22,
        fat: 4,
        calories: 130,
        price: 15.99,
        isOptimal: true,
        description: 'Boiled crawfish, seasoned',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'bangkok-bistro',
    name: 'Bangkok Bistro',
    category: 'Asian',
    meals: [
      {
        id: 'bangkok-bistro-1',
        name: 'Thai Basil Chicken (no rice)',
        carbs: 8,
        protein: 32,
        fat: 18,
        calories: 310,
        price: 13.99,
        isOptimal: true,
        description: 'Stir-fried chicken with basil and vegetables',
        mealType: 'lunch'
      },
      {
        id: 'bangkok-bistro-2',
        name: 'Curry Shrimp (no rice)',
        carbs: 9,
        protein: 24,
        fat: 22,
        calories: 320,
        price: 15.99,
        isOptimal: false,
        description: 'Red curry with shrimp and vegetables',
        mealType: 'dinner'
      },
      {
        id: 'bangkok-bistro-3',
        name: 'Larb Gai Salad',
        carbs: 7,
        protein: 28,
        fat: 16,
        calories: 280,
        price: 12.99,
        isOptimal: true,
        description: 'Minced chicken salad with herbs and lime',
        mealType: 'lunch'
      },
      {
        id: 'bangkok-bistro-4',
        name: 'Satay Chicken Skewers',
        carbs: 6,
        protein: 26,
        fat: 20,
        calories: 290,
        price: 11.99,
        isOptimal: true,
        description: 'Grilled chicken skewers with peanut sauce',
        mealType: 'anytime'
      },
      {
        id: 'bangkok-bistro-5',
        name: 'Tom Yum Soup',
        carbs: 8,
        protein: 18,
        fat: 12,
        calories: 200,
        price: 9.99,
        isOptimal: true,
        description: 'Spicy Thai soup with shrimp',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'magnolia',
    name: 'Magnolia Restaurant',
    category: 'Casual Dining',
    meals: [
      {
        id: 'magnolia-1',
        name: 'Grilled Chicken Breast',
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed vegetables',
        mealType: 'lunch'
      },
      {
        id: 'magnolia-2',
        name: 'Sirloin Steak (8oz)',
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with side salad',
        mealType: 'dinner'
      },
      {
        id: 'magnolia-3',
        name: 'Cobb Salad (no croutons)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, egg, avocado, cheese',
        mealType: 'lunch'
      },
      {
        id: 'magnolia-4',
        name: 'Bunless Cheeseburger',
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with cheese',
        mealType: 'anytime'
      },
      {
        id: 'magnolia-5',
        name: 'Breakfast Scramble',
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Eggs, cheese, sausage, peppers',
        mealType: 'breakfast'
      }
    ]
  },
  {
    id: 'rudys',
    name: 'Rudy\'s Family Restaurant',
    category: 'Casual Dining',
    meals: [
      {
        id: 'rudys-1',
        name: 'Grilled Chicken Breast',
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed vegetables',
        mealType: 'lunch'
      },
      {
        id: 'rudys-2',
        name: 'Sirloin Steak (8oz)',
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with side salad',
        mealType: 'dinner'
      },
      {
        id: 'rudys-3',
        name: 'Cobb Salad (no croutons)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, egg, avocado, cheese',
        mealType: 'lunch'
      },
      {
        id: 'rudys-4',
        name: 'Bunless Cheeseburger',
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with cheese',
        mealType: 'anytime'
      },
      {
        id: 'rudys-5',
        name: 'Breakfast Scramble',
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Eggs, cheese, sausage, peppers',
        mealType: 'breakfast'
      }
    ]
  },
  {
    id: 'brick-wood',
    name: 'The Brick-Wood Fired Eats',
    category: 'Casual Dining',
    meals: [
      {
        id: 'brick-wood-1',
        name: 'Grilled Chicken Breast',
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed vegetables',
        mealType: 'lunch'
      },
      {
        id: 'brick-wood-2',
        name: 'Sirloin Steak (8oz)',
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with side salad',
        mealType: 'dinner'
      },
      {
        id: 'brick-wood-3',
        name: 'Cobb Salad (no croutons)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, egg, avocado, cheese',
        mealType: 'lunch'
      },
      {
        id: 'brick-wood-4',
        name: 'Bunless Cheeseburger',
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with cheese',
        mealType: 'anytime'
      },
      {
        id: 'brick-wood-5',
        name: 'Breakfast Scramble',
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Eggs, cheese, sausage, peppers',
        mealType: 'breakfast'
      }
    ]
  },
  {
    id: 'mcglynns',
    name: 'McGlynn\'s Pub',
    category: 'Bar & Grill',
    meals: [
      {
        id: 'mcglynns-1',
        name: 'Bunless Burger',
        carbs: 4,
        protein: 32,
        fat: 28,
        calories: 390,
        price: 11.99,
        isOptimal: true,
        description: 'Half-pound burger, lettuce wrapped',
        mealType: 'lunch'
      },
      {
        id: 'mcglynns-2',
        name: 'Buffalo Wings',
        carbs: 2,
        protein: 28,
        fat: 24,
        calories: 340,
        price: 12.99,
        isOptimal: true,
        description: 'Traditional wings, no breading',
        mealType: 'anytime'
      },
      {
        id: 'mcglynns-3',
        name: 'Grilled Chicken Caesar (no croutons)',
        carbs: 6,
        protein: 36,
        fat: 18,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: 'Romaine, parmesan, Caesar dressing',
        mealType: 'lunch'
      },
      {
        id: 'mcglynns-4',
        name: 'Steak Tips',
        carbs: 3,
        protein: 34,
        fat: 26,
        calories: 380,
        price: 15.99,
        isOptimal: true,
        description: 'Marinated sirloin tips with vegetables',
        mealType: 'dinner'
      },
      {
        id: 'mcglynns-5',
        name: 'Bacon-Wrapped Shrimp',
        carbs: 4,
        protein: 22,
        fat: 18,
        calories: 270,
        price: 13.99,
        isOptimal: true,
        description: 'Jumbo shrimp wrapped in bacon',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'grey-fox',
    name: 'Grey Fox Grille & Public House',
    category: 'Bar & Grill',
    meals: [
      {
        id: 'grey-fox-1',
        name: 'Bunless Burger',
        carbs: 4,
        protein: 32,
        fat: 28,
        calories: 390,
        price: 11.99,
        isOptimal: true,
        description: 'Half-pound burger, lettuce wrapped',
        mealType: 'lunch'
      },
      {
        id: 'grey-fox-2',
        name: 'Buffalo Wings',
        carbs: 2,
        protein: 28,
        fat: 24,
        calories: 340,
        price: 12.99,
        isOptimal: true,
        description: 'Traditional wings, no breading',
        mealType: 'anytime'
      },
      {
        id: 'grey-fox-3',
        name: 'Grilled Chicken Caesar (no croutons)',
        carbs: 6,
        protein: 36,
        fat: 18,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: 'Romaine, parmesan, Caesar dressing',
        mealType: 'lunch'
      },
      {
        id: 'grey-fox-4',
        name: 'Steak Tips',
        carbs: 3,
        protein: 34,
        fat: 26,
        calories: 380,
        price: 15.99,
        isOptimal: true,
        description: 'Marinated sirloin tips with vegetables',
        mealType: 'dinner'
      },
      {
        id: 'grey-fox-5',
        name: 'Bacon-Wrapped Shrimp',
        carbs: 4,
        protein: 22,
        fat: 18,
        calories: 270,
        price: 13.99,
        isOptimal: true,
        description: 'Jumbo shrimp wrapped in bacon',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'abbotts',
    name: 'Abbott\'s on Broad Creek',
    category: 'Seafood',
    meals: [
      {
        id: 'abbotts-1',
        name: 'Grilled Salmon',
        carbs: 2,
        protein: 34,
        fat: 18,
        calories: 310,
        price: 18.99,
        isOptimal: true,
        description: 'Fresh Atlantic salmon, grilled with lemon butter',
        mealType: 'lunch'
      },
      {
        id: 'abbotts-2',
        name: 'Blackened Mahi-Mahi',
        carbs: 3,
        protein: 28,
        fat: 14,
        calories: 250,
        price: 16.99,
        isOptimal: true,
        description: 'Cajun-spiced, served with side salad',
        mealType: 'dinner'
      },
      {
        id: 'abbotts-3',
        name: 'Shrimp Scampi (no pasta)',
        carbs: 5,
        protein: 24,
        fat: 22,
        calories: 310,
        price: 17.99,
        isOptimal: true,
        description: 'Garlic butter shrimp with vegetables',
        mealType: 'dinner'
      },
      {
        id: 'abbotts-4',
        name: 'Crab Cake',
        carbs: 6,
        protein: 18,
        fat: 16,
        calories: 240,
        price: 14.99,
        isOptimal: true,
        description: 'Lump crab meat, minimal fillers',
        mealType: 'anytime'
      },
      {
        id: 'abbotts-5',
        name: 'Grilled Tuna Steak',
        carbs: 1,
        protein: 32,
        fat: 12,
        calories: 240,
        price: 19.99,
        isOptimal: true,
        description: 'Seared rare with wasabi aioli',
        mealType: 'dinner'
      }
    ]
  },
  {
    id: 'southern-grille',
    name: 'The Southern Grille',
    category: 'Casual Dining',
    meals: [
      {
        id: 'southern-grille-1',
        name: 'Grilled Chicken Breast',
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed vegetables',
        mealType: 'lunch'
      },
      {
        id: 'southern-grille-2',
        name: 'Sirloin Steak (8oz)',
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with side salad',
        mealType: 'dinner'
      },
      {
        id: 'southern-grille-3',
        name: 'Cobb Salad (no croutons)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, egg, avocado, cheese',
        mealType: 'lunch'
      },
      {
        id: 'southern-grille-4',
        name: 'Bunless Cheeseburger',
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with cheese',
        mealType: 'anytime'
      },
      {
        id: 'southern-grille-5',
        name: 'Breakfast Scramble',
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Eggs, cheese, sausage, peppers',
        mealType: 'breakfast'
      }
    ]
  },
  {
    id: 'little-creek',
    name: 'Little Creek Grill',
    category: 'Casual Dining',
    meals: [
      {
        id: 'little-creek-1',
        name: 'Grilled Chicken Breast',
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed vegetables',
        mealType: 'lunch'
      },
      {
        id: 'little-creek-2',
        name: 'Sirloin Steak (8oz)',
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with side salad',
        mealType: 'dinner'
      },
      {
        id: 'little-creek-3',
        name: 'Cobb Salad (no croutons)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, egg, avocado, cheese',
        mealType: 'lunch'
      },
      {
        id: 'little-creek-4',
        name: 'Bunless Cheeseburger',
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with cheese',
        mealType: 'anytime'
      },
      {
        id: 'little-creek-5',
        name: 'Breakfast Scramble',
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Eggs, cheese, sausage, peppers',
        mealType: 'breakfast'
      }
    ]
  },
  {
    id: 'arenas-deli',
    name: 'Arena\'s Deli',
    category: 'Deli',
    meals: [
      {
        id: 'arenas-deli-1',
        name: 'Turkey & Cheese Lettuce Wrap',
        carbs: 4,
        protein: 24,
        fat: 14,
        calories: 230,
        price: 8.99,
        isOptimal: true,
        description: 'Sliced turkey, cheese, wrapped in lettuce',
        mealType: 'lunch'
      },
      {
        id: 'arenas-deli-2',
        name: 'Italian Sub Bowl',
        carbs: 6,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: 'Sub ingredients in a bowl, no bread',
        mealType: 'lunch'
      },
      {
        id: 'arenas-deli-3',
        name: 'Roast Beef & Cheddar Wrap',
        carbs: 5,
        protein: 26,
        fat: 18,
        calories: 280,
        price: 9.99,
        isOptimal: true,
        description: 'Lettuce-wrapped roast beef',
        mealType: 'anytime'
      },
      {
        id: 'arenas-deli-4',
        name: 'Chef Salad',
        carbs: 7,
        protein: 22,
        fat: 20,
        calories: 290,
        price: 9.49,
        isOptimal: true,
        description: 'Ham, turkey, cheese, hard-boiled egg',
        mealType: 'lunch'
      },
      {
        id: 'arenas-deli-5',
        name: 'Chicken Salad (on lettuce)',
        carbs: 5,
        protein: 20,
        fat: 16,
        calories: 240,
        price: 8.49,
        isOptimal: true,
        description: 'House-made chicken salad on lettuce',
        mealType: 'anytime'
      }
    ]
  },
  {
    id: 'big-fish',
    name: 'Big Fish Grill',
    category: 'Seafood',
    meals: [
      {
        id: 'big-fish-1',
        name: 'Grilled Salmon',
        carbs: 2,
        protein: 34,
        fat: 18,
        calories: 310,
        price: 18.99,
        isOptimal: true,
        description: 'Fresh Atlantic salmon, grilled with lemon butter',
        mealType: 'lunch'
      },
      {
        id: 'big-fish-2',
        name: 'Blackened Mahi-Mahi',
        carbs: 3,
        protein: 28,
        fat: 14,
        calories: 250,
        price: 16.99,
        isOptimal: true,
        description: 'Cajun-spiced, served with side salad',
        mealType: 'dinner'
      },
      {
        id: 'big-fish-3',
        name: 'Shrimp Scampi (no pasta)',
        carbs: 5,
        protein: 24,
        fat: 22,
        calories: 310,
        price: 17.99,
        isOptimal: true,
        description: 'Garlic butter shrimp with vegetables',
        mealType: 'dinner'
      },
      {
        id: 'big-fish-4',
        name: 'Crab Cake',
        carbs: 6,
        protein: 18,
        fat: 16,
        calories: 240,
        price: 14.99,
        isOptimal: true,
        description: 'Lump crab meat, minimal fillers',
        mealType: 'anytime'
      },
      {
        id: 'big-fish-5',
        name: 'Grilled Tuna Steak',
        carbs: 1,
        protein: 32,
        fat: 12,
        calories: 240,
        price: 19.99,
        isOptimal: true,
        description: 'Seared rare with wasabi aioli',
        mealType: 'dinner'
      }
    ]
  },
  {
    id: 'go-fish',
    name: 'Go Fish!',
    category: 'Seafood',
    meals: [
      {
        id: 'go-fish-1',
        name: 'Grilled Salmon',
        carbs: 2,
        protein: 34,
        fat: 18,
        calories: 310,
        price: 18.99,
        isOptimal: true,
        description: 'Fresh Atlantic salmon, grilled with lemon butter',
        mealType: 'lunch'
      },
      {
        id: 'go-fish-2',
        name: 'Blackened Mahi-Mahi',
        carbs: 3,
        protein: 28,
        fat: 14,
        calories: 250,
        price: 16.99,
        isOptimal: true,
        description: 'Cajun-spiced, served with side salad',
        mealType: 'dinner'
      },
      {
        id: 'go-fish-3',
        name: 'Shrimp Scampi (no pasta)',
        carbs: 5,
        protein: 24,
        fat: 22,
        calories: 310,
        price: 17.99,
        isOptimal: true,
        description: 'Garlic butter shrimp with vegetables',
        mealType: 'dinner'
      },
      {
        id: 'go-fish-4',
        name: 'Crab Cake',
        carbs: 6,
        protein: 18,
        fat: 16,
        calories: 240,
        price: 14.99,
        isOptimal: true,
        description: 'Lump crab meat, minimal fillers',
        mealType: 'anytime'
      },
      {
        id: 'go-fish-5',
        name: 'Grilled Tuna Steak',
        carbs: 1,
        protein: 32,
        fat: 12,
        calories: 240,
        price: 19.99,
        isOptimal: true,
        description: 'Seared rare with wasabi aioli',
        mealType: 'dinner'
      }
    ]
  },
  {
    id: 'seedbol',
    name: 'Seedbol Kitchen',
    category: 'Casual Dining',
    meals: [
      {
        id: 'seedbol-1',
        name: 'Grilled Chicken Breast',
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: 'Plain grilled chicken with steamed vegetables',
        mealType: 'lunch'
      },
      {
        id: 'seedbol-2',
        name: 'Sirloin Steak (8oz)',
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: 'Grilled sirloin with side salad',
        mealType: 'dinner'
      },
      {
        id: 'seedbol-3',
        name: 'Cobb Salad (no croutons)',
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: 'Chicken, bacon, egg, avocado, cheese',
        mealType: 'lunch'
      },
      {
        id: 'seedbol-4',
        name: 'Bunless Cheeseburger',
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: 'Lettuce-wrapped burger with cheese',
        mealType: 'anytime'
      },
      {
        id: 'seedbol-5',
        name: 'Breakfast Scramble',
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: 'Eggs, cheese, sausage, peppers',
        mealType: 'breakfast'
      }
    ]
  },
  {
    id: 'bluecoast',
    name: 'Bluecoast Seafood Grill',
    category: 'Seafood',
    meals: [
      {
        id: 'bluecoast-1',
        name: 'Grilled Salmon',
        carbs: 2,
        protein: 34,
        fat: 18,
        calories: 310,
        price: 18.99,
        isOptimal: true,
        description: 'Fresh Atlantic salmon, grilled with lemon butter',
        mealType: 'lunch'
      },
      {
        id: 'bluecoast-2',
        name: 'Blackened Mahi-Mahi',
        carbs: 3,
        protein: 28,
        fat: 14,
        calories: 250,
        price: 16.99,
        isOptimal: true,
        description: 'Cajun-spiced, served with side salad',
        mealType: 'dinner'
      },
      {
        id: 'bluecoast-3',
        name: 'Shrimp Scampi (no pasta)',
        carbs: 5,
        protein: 24,
        fat: 22,
        calories: 310,
        price: 17.99,
        isOptimal: true,
        description: 'Garlic butter shrimp with vegetables',
        mealType: 'dinner'
      },
      {
        id: 'bluecoast-4',
        name: 'Crab Cake',
        carbs: 6,
        protein: 18,
        fat: 16,
        calories: 240,
        price: 14.99,
        isOptimal: true,
        description: 'Lump crab meat, minimal fillers',
        mealType: 'anytime'
      },
      {
        id: 'bluecoast-5',
        name: 'Grilled Tuna Steak',
        carbs: 1,
        protein: 32,
        fat: 12,
        calories: 240,
        price: 19.99,
        isOptimal: true,
        description: 'Seared rare with wasabi aioli',
        mealType: 'dinner'
      }
    ]
  },
  {
    id: 'bethany-blues',
    name: 'Bethany Blues BBQ',
    category: 'BBQ',
    meals: [
      {
        id: 'bethany-blues-1',
        name: 'Pulled Pork (no sauce)',
        carbs: 2,
        protein: 36,
        fat: 24,
        calories: 380,
        price: 12.99,
        isOptimal: true,
        description: 'Smoked pork shoulder, sauce on side',
        mealType: 'lunch'
      },
      {
        id: 'bethany-blues-2',
        name: 'Beef Brisket',
        carbs: 3,
        protein: 38,
        fat: 28,
        calories: 420,
        price: 15.99,
        isOptimal: true,
        description: '12-hour smoked brisket, no sauce',
        mealType: 'dinner'
      },
      {
        id: 'bethany-blues-3',
        name: 'BBQ Chicken Leg Quarters',
        carbs: 4,
        protein: 32,
        fat: 22,
        calories: 340,
        price: 11.99,
        isOptimal: true,
        description: 'Dry rub chicken, sauce optional',
        mealType: 'anytime'
      },
      {
        id: 'bethany-blues-4',
        name: 'Smoked Sausage',
        carbs: 5,
        protein: 20,
        fat: 26,
        calories: 330,
        price: 9.99,
        isOptimal: true,
        description: 'House-made smoked sausage',
        mealType: 'anytime'
      },
      {
        id: 'bethany-blues-5',
        name: 'BBQ Burnt Ends',
        carbs: 4,
        protein: 28,
        fat: 32,
        calories: 400,
        price: 14.99,
        isOptimal: true,
        description: 'Crispy brisket tips',
        mealType: 'lunch'
      }
    ]
  },
  {
    id: 'nicola-pizza',
    name: 'Nicola Pizza',
    category: 'Pizza',
    meals: [
      {
        id: 'nicola-pizza-1',
        name: 'Crustless Pizza Bowl',
        carbs: 8,
        protein: 24,
        fat: 26,
        calories: 350,
        price: 12.99,
        isOptimal: true,
        description: 'Pizza toppings in a bowl, no crust',
        mealType: 'anytime'
      },
      {
        id: 'nicola-pizza-2',
        name: 'Caprese Salad',
        carbs: 6,
        protein: 12,
        fat: 18,
        calories: 230,
        price: 8.99,
        isOptimal: true,
        description: 'Fresh mozzarella, tomatoes, basil',
        mealType: 'lunch'
      },
      {
        id: 'nicola-pizza-3',
        name: 'Meatball Marinara (no pasta)',
        carbs: 9,
        protein: 28,
        fat: 22,
        calories: 340,
        price: 11.99,
        isOptimal: false,
        description: 'Italian meatballs in marinara sauce',
        mealType: 'dinner'
      },
      {
        id: 'nicola-pizza-4',
        name: 'Antipasto Salad',
        carbs: 7,
        protein: 18,
        fat: 24,
        calories: 300,
        price: 10.99,
        isOptimal: true,
        description: 'Salami, ham, cheese, olives, peppers',
        mealType: 'anytime'
      },
      {
        id: 'nicola-pizza-5',
        name: 'Buffalo Chicken Salad',
        carbs: 6,
        protein: 26,
        fat: 20,
        calories: 300,
        price: 11.49,
        isOptimal: true,
        description: 'Grilled chicken, buffalo sauce, blue cheese',
        mealType: 'lunch'
      }
    ]
  }
];
