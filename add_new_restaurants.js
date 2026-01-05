const fs = require('fs');

// Read the current restaurants file
const filePath = './data/restaurants.ts';
let content = fs.readFileSync(filePath, 'utf8');

// New restaurants to add
const newRestaurants = [
  { name: "Farmer & The Cow", category: "Casual Dining", id: "farmer-cow" },
  { name: "Mrs. Robino's Restaurant", category: "Casual Dining", id: "mrs-robinos" },
  { name: "Capers & Lemons", category: "Casual Dining", id: "capers-lemons" },
  { name: "Cafe Napoli", category: "Italian", id: "cafe-napoli" },
  { name: "Cosmos Restaurant", category: "Casual Dining", id: "cosmos" },
  { name: "Libby's Restaurant", category: "Casual Dining", id: "libbys" },
  { name: "Mary's Kountry Kitchen", category: "Casual Dining", id: "marys-kountry" },
  { name: "Smiley's Diner", category: "Casual Dining", id: "smileys-diner" },
  { name: "Derby's Bar & Restaurant", category: "Bar & Grill", id: "derbys" },
  { name: "Grain Craft Bar + Kitchen", category: "Bar & Grill", id: "grain-craft" },
  { name: "Two Stones Pub", category: "Bar & Grill", id: "two-stones" },
  { name: "BBC Tavern & Grill", category: "Bar & Grill", id: "bbc-tavern" },
  { name: "Iron Hill Brewery", category: "Bar & Grill", id: "iron-hill" },
  { name: "Po' Boys Creole Restaurant", category: "Cajun/Creole", id: "po-boys" },
  { name: "Bangkok Bistro", category: "Asian", id: "bangkok-bistro" },
  { name: "Magnolia Restaurant", category: "Casual Dining", id: "magnolia" },
  { name: "Rudy's Family Restaurant", category: "Casual Dining", id: "rudys" },
  { name: "The Brick-Wood Fired Eats", category: "Casual Dining", id: "brick-wood" },
  { name: "McGlynn's Pub", category: "Bar & Grill", id: "mcglynns" },
  { name: "Grey Fox Grille & Public House", category: "Bar & Grill", id: "grey-fox" },
  { name: "Abbott's on Broad Creek", category: "Seafood", id: "abbotts" },
  { name: "The Southern Grille", category: "Casual Dining", id: "southern-grille" },
  { name: "Little Creek Grill", category: "Casual Dining", id: "little-creek" },
  { name: "Arena's Deli", category: "Deli", id: "arenas-deli" },
  { name: "Big Fish Grill", category: "Seafood", id: "big-fish" },
  { name: "Go Fish!", category: "Seafood", id: "go-fish" },
  { name: "Seedbol Kitchen", category: "Casual Dining", id: "seedbol" },
  { name: "Bluecoast Seafood Grill", category: "Seafood", id: "bluecoast" },
  { name: "Bethany Blues BBQ", category: "BBQ", id: "bethany-blues" },
  { name: "Nicola Pizza", category: "Pizza", id: "nicola-pizza" }
];

// Meal templates based on category
const getMeals = (restaurant) => {
  const { category, id, name } = restaurant;
  const meals = [];

  if (category === "Seafood") {
    meals.push(
      {
        name: "Grilled Salmon",
        carbs: 2,
        protein: 34,
        fat: 18,
        calories: 310,
        price: 18.99,
        isOptimal: true,
        description: "Fresh Atlantic salmon, grilled with lemon butter",
        mealType: "lunch"
      },
      {
        name: "Blackened Mahi-Mahi",
        carbs: 3,
        protein: 28,
        fat: 14,
        calories: 250,
        price: 16.99,
        isOptimal: true,
        description: "Cajun-spiced, served with side salad",
        mealType: "dinner"
      },
      {
        name: "Shrimp Scampi (no pasta)",
        carbs: 5,
        protein: 24,
        fat: 22,
        calories: 310,
        price: 17.99,
        isOptimal: true,
        description: "Garlic butter shrimp with vegetables",
        mealType: "dinner"
      },
      {
        name: "Crab Cake",
        carbs: 6,
        protein: 18,
        fat: 16,
        calories: 240,
        price: 14.99,
        isOptimal: true,
        description: "Lump crab meat, minimal fillers",
        mealType: "anytime"
      },
      {
        name: "Grilled Tuna Steak",
        carbs: 1,
        protein: 32,
        fat: 12,
        calories: 240,
        price: 19.99,
        isOptimal: true,
        description: "Seared rare with wasabi aioli",
        mealType: "dinner"
      }
    );
  } else if (category === "BBQ") {
    meals.push(
      {
        name: "Pulled Pork (no sauce)",
        carbs: 2,
        protein: 36,
        fat: 24,
        calories: 380,
        price: 12.99,
        isOptimal: true,
        description: "Smoked pork shoulder, sauce on side",
        mealType: "lunch"
      },
      {
        name: "Beef Brisket",
        carbs: 3,
        protein: 38,
        fat: 28,
        calories: 420,
        price: 15.99,
        isOptimal: true,
        description: "12-hour smoked brisket, no sauce",
        mealType: "dinner"
      },
      {
        name: "BBQ Chicken Leg Quarters",
        carbs: 4,
        protein: 32,
        fat: 22,
        calories: 340,
        price: 11.99,
        isOptimal: true,
        description: "Dry rub chicken, sauce optional",
        mealType: "anytime"
      },
      {
        name: "Smoked Sausage",
        carbs: 5,
        protein: 20,
        fat: 26,
        calories: 330,
        price: 9.99,
        isOptimal: true,
        description: "House-made smoked sausage",
        mealType: "anytime"
      },
      {
        name: "BBQ Burnt Ends",
        carbs: 4,
        protein: 28,
        fat: 32,
        calories: 400,
        price: 14.99,
        isOptimal: true,
        description: "Crispy brisket tips",
        mealType: "lunch"
      }
    );
  } else if (category === "Bar & Grill") {
    meals.push(
      {
        name: "Bunless Burger",
        carbs: 4,
        protein: 32,
        fat: 28,
        calories: 390,
        price: 11.99,
        isOptimal: true,
        description: "Half-pound burger, lettuce wrapped",
        mealType: "lunch"
      },
      {
        name: "Buffalo Wings",
        carbs: 2,
        protein: 28,
        fat: 24,
        calories: 340,
        price: 12.99,
        isOptimal: true,
        description: "Traditional wings, no breading",
        mealType: "anytime"
      },
      {
        name: "Grilled Chicken Caesar (no croutons)",
        carbs: 6,
        protein: 36,
        fat: 18,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: "Romaine, parmesan, Caesar dressing",
        mealType: "lunch"
      },
      {
        name: "Steak Tips",
        carbs: 3,
        protein: 34,
        fat: 26,
        calories: 380,
        price: 15.99,
        isOptimal: true,
        description: "Marinated sirloin tips with vegetables",
        mealType: "dinner"
      },
      {
        name: "Bacon-Wrapped Shrimp",
        carbs: 4,
        protein: 22,
        fat: 18,
        calories: 270,
        price: 13.99,
        isOptimal: true,
        description: "Jumbo shrimp wrapped in bacon",
        mealType: "anytime"
      }
    );
  } else if (category === "Italian") {
    meals.push(
      {
        name: "Chicken Parmigiana (no breading)",
        carbs: 8,
        protein: 42,
        fat: 24,
        calories: 400,
        price: 16.99,
        isOptimal: true,
        description: "Grilled chicken with marinara and mozzarella",
        mealType: "dinner"
      },
      {
        name: "Caprese Salad",
        carbs: 6,
        protein: 12,
        fat: 18,
        calories: 230,
        price: 9.99,
        isOptimal: true,
        description: "Fresh mozzarella, tomatoes, basil, olive oil",
        mealType: "lunch"
      },
      {
        name: "Shrimp Scampi (zucchini noodles)",
        carbs: 9,
        protein: 26,
        fat: 22,
        calories: 330,
        price: 18.99,
        isOptimal: false,
        description: "Garlic butter shrimp over zoodles",
        mealType: "dinner"
      },
      {
        name: "Italian Sausage & Peppers",
        carbs: 7,
        protein: 24,
        fat: 28,
        calories: 370,
        price: 13.99,
        isOptimal: true,
        description: "Grilled sausage with peppers and onions",
        mealType: "anytime"
      },
      {
        name: "Antipasto Platter",
        carbs: 8,
        protein: 18,
        fat: 24,
        calories: 310,
        price: 14.99,
        isOptimal: true,
        description: "Salami, prosciutto, cheese, olives",
        mealType: "anytime"
      }
    );
  } else if (category === "Asian") {
    meals.push(
      {
        name: "Thai Basil Chicken (no rice)",
        carbs: 8,
        protein: 32,
        fat: 18,
        calories: 310,
        price: 13.99,
        isOptimal: true,
        description: "Stir-fried chicken with basil and vegetables",
        mealType: "lunch"
      },
      {
        name: "Curry Shrimp (no rice)",
        carbs: 9,
        protein: 24,
        fat: 22,
        calories: 320,
        price: 15.99,
        isOptimal: false,
        description: "Red curry with shrimp and vegetables",
        mealType: "dinner"
      },
      {
        name: "Larb Gai Salad",
        carbs: 7,
        protein: 28,
        fat: 16,
        calories: 280,
        price: 12.99,
        isOptimal: true,
        description: "Minced chicken salad with herbs and lime",
        mealType: "lunch"
      },
      {
        name: "Satay Chicken Skewers",
        carbs: 6,
        protein: 26,
        fat: 20,
        calories: 290,
        price: 11.99,
        isOptimal: true,
        description: "Grilled chicken skewers with peanut sauce",
        mealType: "anytime"
      },
      {
        name: "Tom Yum Soup",
        carbs: 8,
        protein: 18,
        fat: 12,
        calories: 200,
        price: 9.99,
        isOptimal: true,
        description: "Spicy Thai soup with shrimp",
        mealType: "anytime"
      }
    );
  } else if (category === "Cajun/Creole") {
    meals.push(
      {
        name: "Blackened Catfish",
        carbs: 3,
        protein: 28,
        fat: 16,
        calories: 270,
        price: 14.99,
        isOptimal: true,
        description: "Cajun-spiced catfish with remoulade",
        mealType: "dinner"
      },
      {
        name: "Shrimp Étouffée (no rice)",
        carbs: 8,
        protein: 24,
        fat: 22,
        calories: 320,
        price: 16.99,
        isOptimal: true,
        description: "Spicy shrimp stew, skip the rice",
        mealType: "lunch"
      },
      {
        name: "Jambalaya (low-rice version)",
        carbs: 9,
        protein: 26,
        fat: 18,
        calories: 300,
        price: 13.99,
        isOptimal: false,
        description: "Request extra meat, light on rice",
        mealType: "dinner"
      },
      {
        name: "Boudin Sausage",
        carbs: 7,
        protein: 20,
        fat: 24,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: "Cajun pork and rice sausage",
        mealType: "anytime"
      },
      {
        name: "Crawfish Boil (1 lb)",
        carbs: 2,
        protein: 22,
        fat: 4,
        calories: 130,
        price: 15.99,
        isOptimal: true,
        description: "Boiled crawfish, seasoned",
        mealType: "anytime"
      }
    );
  } else if (category === "Deli") {
    meals.push(
      {
        name: "Turkey & Cheese Lettuce Wrap",
        carbs: 4,
        protein: 24,
        fat: 14,
        calories: 230,
        price: 8.99,
        isOptimal: true,
        description: "Sliced turkey, cheese, wrapped in lettuce",
        mealType: "lunch"
      },
      {
        name: "Italian Sub Bowl",
        carbs: 6,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 10.99,
        isOptimal: true,
        description: "Sub ingredients in a bowl, no bread",
        mealType: "lunch"
      },
      {
        name: "Roast Beef & Cheddar Wrap",
        carbs: 5,
        protein: 26,
        fat: 18,
        calories: 280,
        price: 9.99,
        isOptimal: true,
        description: "Lettuce-wrapped roast beef",
        mealType: "anytime"
      },
      {
        name: "Chef Salad",
        carbs: 7,
        protein: 22,
        fat: 20,
        calories: 290,
        price: 9.49,
        isOptimal: true,
        description: "Ham, turkey, cheese, hard-boiled egg",
        mealType: "lunch"
      },
      {
        name: "Chicken Salad (on lettuce)",
        carbs: 5,
        protein: 20,
        fat: 16,
        calories: 240,
        price: 8.49,
        isOptimal: true,
        description: "House-made chicken salad on lettuce",
        mealType: "anytime"
      }
    );
  } else if (category === "Pizza") {
    meals.push(
      {
        name: "Crustless Pizza Bowl",
        carbs: 8,
        protein: 24,
        fat: 26,
        calories: 350,
        price: 12.99,
        isOptimal: true,
        description: "Pizza toppings in a bowl, no crust",
        mealType: "anytime"
      },
      {
        name: "Caprese Salad",
        carbs: 6,
        protein: 12,
        fat: 18,
        calories: 230,
        price: 8.99,
        isOptimal: true,
        description: "Fresh mozzarella, tomatoes, basil",
        mealType: "lunch"
      },
      {
        name: "Meatball Marinara (no pasta)",
        carbs: 9,
        protein: 28,
        fat: 22,
        calories: 340,
        price: 11.99,
        isOptimal: false,
        description: "Italian meatballs in marinara sauce",
        mealType: "dinner"
      },
      {
        name: "Antipasto Salad",
        carbs: 7,
        protein: 18,
        fat: 24,
        calories: 300,
        price: 10.99,
        isOptimal: true,
        description: "Salami, ham, cheese, olives, peppers",
        mealType: "anytime"
      },
      {
        name: "Buffalo Chicken Salad",
        carbs: 6,
        protein: 26,
        fat: 20,
        calories: 300,
        price: 11.49,
        isOptimal: true,
        description: "Grilled chicken, buffalo sauce, blue cheese",
        mealType: "lunch"
      }
    );
  } else {
    // Casual Dining default meals
    meals.push(
      {
        name: "Grilled Chicken Breast",
        carbs: 2,
        protein: 36,
        fat: 12,
        calories: 250,
        price: 12.99,
        isOptimal: true,
        description: "Plain grilled chicken with steamed vegetables",
        mealType: "lunch"
      },
      {
        name: "Sirloin Steak (8oz)",
        carbs: 1,
        protein: 42,
        fat: 24,
        calories: 380,
        price: 18.99,
        isOptimal: true,
        description: "Grilled sirloin with side salad",
        mealType: "dinner"
      },
      {
        name: "Cobb Salad (no croutons)",
        carbs: 7,
        protein: 28,
        fat: 22,
        calories: 320,
        price: 11.99,
        isOptimal: true,
        description: "Chicken, bacon, egg, avocado, cheese",
        mealType: "lunch"
      },
      {
        name: "Bunless Cheeseburger",
        carbs: 5,
        protein: 30,
        fat: 26,
        calories: 370,
        price: 10.99,
        isOptimal: true,
        description: "Lettuce-wrapped burger with cheese",
        mealType: "anytime"
      },
      {
        name: "Breakfast Scramble",
        carbs: 4,
        protein: 24,
        fat: 22,
        calories: 300,
        price: 9.99,
        isOptimal: true,
        description: "Eggs, cheese, sausage, peppers",
        mealType: "breakfast"
      }
    );
  }

  return meals;
};

// Generate restaurant entries
let restaurantsCode = "";
newRestaurants.forEach((restaurant, idx) => {
  const meals = getMeals(restaurant);

  restaurantsCode += `,\n  {\n`;
  restaurantsCode += `    id: '${restaurant.id}',\n`;
  restaurantsCode += `    name: '${restaurant.name}',\n`;
  restaurantsCode += `    category: '${restaurant.category}',\n`;
  restaurantsCode += `    meals: [\n`;

  meals.forEach((meal, mealIdx) => {
    restaurantsCode += `      {\n`;
    restaurantsCode += `        id: '${restaurant.id}-${mealIdx + 1}',\n`;
    restaurantsCode += `        name: '${meal.name}',\n`;
    restaurantsCode += `        carbs: ${meal.carbs},\n`;
    restaurantsCode += `        protein: ${meal.protein},\n`;
    restaurantsCode += `        fat: ${meal.fat},\n`;
    restaurantsCode += `        calories: ${meal.calories},\n`;
    restaurantsCode += `        price: ${meal.price},\n`;
    restaurantsCode += `        isOptimal: ${meal.isOptimal},\n`;
    restaurantsCode += `        description: '${meal.description}',\n`;
    restaurantsCode += `        mealType: '${meal.mealType}'\n`;
    restaurantsCode += `      }${mealIdx < meals.length - 1 ? ',' : ''}\n`;
  });

  restaurantsCode += `    ]\n`;
  restaurantsCode += `  }`;
});

// Insert before the closing ];
content = content.replace(/(\n  \}\n)\];/, '$1' + restaurantsCode + '\n];');

// Write back
fs.writeFileSync(filePath, content, 'utf8');

console.log(`✓ Added ${newRestaurants.length} new restaurants!`);
