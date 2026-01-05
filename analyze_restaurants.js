const fs = require('fs');

const content = fs.readFileSync('/home/user/myfirstclaudeapp/data/restaurants.ts', 'utf8');

// Parse restaurants
const restaurants = [];
let currentRestaurant = null;
let inMeals = false;
let mealCount = 0;

const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Match restaurant name
  const nameMatch = line.match(/^\s{4}name:\s*['"](.+)['"]/);
  if (nameMatch && !inMeals) {
    if (currentRestaurant) {
      currentRestaurant.mealCount = mealCount;
      restaurants.push(currentRestaurant);
    }
    currentRestaurant = { name: nameMatch[1], mealCount: 0 };
    mealCount = 0;
    continue;
  }

  // Check if entering meals array
  if (line.includes('meals: [')) {
    inMeals = true;
    continue;
  }

  // Count meals by looking for meal names (more indented)
  if (inMeals) {
    const mealMatch = line.match(/^\s{8}name:\s*['"](.+)['"]/);
    if (mealMatch) {
      mealCount++;
    }

    // Check if exiting meals array
    if (line.match(/^\s{4}\]/)) {
      inMeals = false;
    }
  }
}

// Add last restaurant
if (currentRestaurant) {
  currentRestaurant.mealCount = mealCount;
  restaurants.push(currentRestaurant);
}

// Filter restaurants with < 4 meals
const needsUpdate = restaurants.filter(r => r.mealCount < 4);

console.log('Restaurants needing updates (< 4 meals):');
console.log('========================================');
needsUpdate.forEach(r => {
  console.log(`${r.name}: ${r.mealCount} meals`);
});
console.log('\nTotal restaurants needing updates:', needsUpdate.length);
console.log('Total restaurants:', restaurants.length);
