const fs = require('fs');

// Read the current file
let content = fs.readFileSync('data/restaurants.ts', 'utf8');

// Define additional meals for restaurants that need them
const mealsToAdd = {
  'panagrill': [
    { id: 'panda-3', name: 'Mushroom Chicken (no rice)', carbs: 7, protein: 24, fat: 10, calories: 220, price: 9.49, isOptimal: true, description: 'Chicken and mushrooms, no rice or noodles' },
    { id: 'panda-4', name: 'Black Pepper Chicken (no rice)', carbs: 9, protein: 32, fat: 16, calories: 300, price: 9.99, isOptimal: true, description: 'Spicy chicken in black pepper sauce, skip rice' }
  ],
  'benihana': [
    { id: 'ben-3', name: 'Hibachi Shrimp (no rice)', carbs: 3, protein: 32, fat: 14, calories: 260, price: 26.99, isOptimal: true, description: 'Grilled shrimp with vegetables, no rice' },
    { id: 'ben-4', name: 'Hibachi Salmon (no rice)', carbs: 4, protein: 38, fat: 24, calories: 380, price: 27.99, isOptimal: true, description: 'Grilled salmon with veggies, skip rice' }
  ],
  'wholefoods': [
    { id: 'wf-3', name: 'Rotisserie Chicken (quarter)', carbs: 0, protein: 35, fat: 16, calories: 290, price: 5.99, isOptimal: true, description: 'Quarter rotisserie chicken' },
    { id: 'wf-4', name: 'Poke Bowl (no rice)', carbs: 7, protein: 30, fat: 18, calories: 310, price: 12.99, isOptimal: true, description: 'Fresh ahi tuna, avocado, edamame, no rice' }
  ],
  'kroger': [
    { id: 'krog-3', name: 'Buffalo Wings (8pc)', carbs: 2, protein: 44, fat: 28, calories: 420, price: 9.99, isOptimal: true, description: 'Fresh deli buffalo wings' },
    { id: 'krog-4', name: 'Prepared Salad Bar Bowl', carbs: 8, protein: 26, fat: 24, calories: 350, price: 8.99, isOptimal: true, description: 'Custom keto bowl from salad bar' }
  ],
  'publix': [
    { id: 'pub-3', name: 'Chicken Tender Sub (no bread)', carbs: 5, protein: 36, fat: 22, calories: 360, price: 7.99, isOptimal: true, description: 'Chicken tenders in a bowl, no bread' },
    { id: 'pub-4', name: 'Deli Wings (10pc)', carbs: 3, protein: 50, fat: 32, calories: 480, price: 10.99, isOptimal: true, description: 'Hot or mild wings from deli' }
  ],
  'bostonmarket': [
    { id: 'bm-3', name: 'Meatloaf with Green Beans', carbs: 8, protein: 32, fat: 24, calories: 380, price: 9.99, isOptimal: true, description: 'Homestyle meatloaf with veggies' },
    { id: 'bm-4', name: 'Rotisserie Turkey (quarter)', carbs: 2, protein: 38, fat: 10, calories: 250, price: 8.49, isOptimal: true, description: 'Quarter turkey with steamed veggies' }
  ],
  'elpollo': [
    { id: 'epl-3', name: 'Chicken Leg & Thigh (2pc)', carbs: 0, protein: 42, fat: 20, calories: 350, price: 6.99, isOptimal: true, description: 'Fire-grilled dark meat' },
    { id: 'epl-4', name: 'Pollo Bowl (no rice/beans)', carbs: 8, protein: 40, fat: 24, calories: 410, price: 9.49, isOptimal: true, description: 'Chicken, cheese, sour cream, avocado' }
  ],
  'peiwei': [
    { id: 'pw-3', name: 'Kung Pao Chicken (no rice)', carbs: 8, protein: 30, fat: 16, calories: 290, price: 10.49, isOptimal: true, description: 'Spicy chicken with peanuts, no rice' },
    { id: 'pw-4', name: 'Crispy Honey Shrimp Bowl (light sauce, no rice)', carbs: 9, protein: 26, fat: 14, calories: 270, price: 11.99, isOptimal: true, description: 'Shrimp with light glaze, skip rice' }
  ],
  'pandaexpress': [
    { id: 'pe-3', name: 'Mushroom Chicken (no rice)', carbs: 7, protein: 24, fat: 10, calories: 220, price: 9.49, isOptimal: true, description: 'Chicken and mushrooms, no rice' },
    { id: 'pe-4', name: 'Black Pepper Chicken (no rice)', carbs: 9, protein: 32, fat: 16, calories: 300, price: 9.99, isOptimal: true, description: 'Spicy chicken, skip rice and noodles' }
  ],
  'noodles': [
    { id: 'nc-3', name: 'Zucchini Rosa with Shrimp', carbs: 10, protein: 28, fat: 20, calories: 340, price: 10.99, isOptimal: true, description: 'Zoodles with shrimp in rosa sauce' },
    { id: 'nc-4', name: 'Grilled Chicken Breast (a la carte)', carbs: 2, protein: 42, fat: 12, calories: 280, price: 7.99, isOptimal: true, description: 'Plain grilled chicken with side salad' }
  ],
  'jersey': [
    { id: 'jer-3', name: 'Roast Beef & Provolone (sub in a tub)', carbs: 6, protein: 30, fat: 24, calories: 360, price: 10.49, isOptimal: true, description: 'Roast beef, provolone, veggies in bowl' },
    { id: 'jer-4', name: 'Club Sub (sub in a tub)', carbs: 7, protein: 28, fat: 22, calories: 340, price: 10.99, isOptimal: true, description: 'Turkey, ham, bacon, provolone' }
  ],
  'potbelly': [
    { id: 'pot-3', name: 'Mediterranean Salad with Chicken', carbs: 8, protein: 30, fat: 24, calories: 370, price: 9.49, isOptimal: true, description: 'Chicken, feta, olives, cucumbers, greens' },
    { id: 'pot-4', name: 'Protein Power Pack', carbs: 6, protein: 26, fat: 20, calories: 310, price: 8.49, isOptimal: true, description: 'Turkey, cheese, eggs, veggies' }
  ]
};

// Function to find and replace restaurant meals
function addMealsToRestaurant(content, restaurantId, newMeals) {
  // Find the restaurant block
  const restaurantRegex = new RegExp(
    `(\\{\\s*id:\\s*'${restaurantId}',\\s*name:.*?meals:\\s*\\[)(.*?)(\\s*\\]\\s*\\})`,
    'gs'
  );

  const match = restaurantRegex.exec(content);
  if (!match) {
    console.log(`Could not find restaurant: ${restaurantId}`);
    return content;
  }

  const mealsBlock = match[2];
  const mealCount = (mealsBlock.match(/id:/g) || []).length;

  if (mealCount >= 4) {
    console.log(`${restaurantId} already has ${mealCount} meals, skipping`);
    return content;
  }

  // Generate new meal strings
  const newMealStrings = newMeals.map(meal => `      {
        id: '${meal.id}',
        name: '${meal.name}',
        carbs: ${meal.carbs},
        protein: ${meal.protein},
        fat: ${meal.fat},
        calories: ${meal.calories},
        price: ${meal.price},
        isOptimal: ${meal.isOptimal},
        description: '${meal.description}'
      }`).join(',\n');

  // Add new meals
  const updatedBlock = mealsBlock.trim() + ',\n' + newMealStrings;
  const replacement = match[1] + updatedBlock + match[3];

  console.log(`Added ${newMeals.length} meals to ${restaurantId} (had ${mealCount}, now has ${mealCount + newMeals.length})`);

  return content.replace(restaurantRegex, replacement);
}

// Add meals to all restaurants
Object.keys(mealsToAdd).forEach(restId => {
  content = addMealsToRestaurant(content, restId, mealsToAdd[restId]);
});

// Write back
fs.writeFileSync('data/restaurants.ts', content, 'utf8');
console.log('\nDone! File updated.');
