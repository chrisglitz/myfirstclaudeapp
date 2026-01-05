const fs = require('fs');
const path = require('path');

// Read the restaurants file
const content = fs.readFileSync(path.join(__dirname, 'data/restaurants.ts'), 'utf8');

// Extract restaurant objects
const restaurantMatches = content.matchAll(/{\s*id:\s*'([^']+)',\s*name:\s*"([^"]+)"|'([^']+)',\s*category:\s*'([^']+)',\s*meals:\s*\[([\s\S]*?)\s*\]\s*}/g);

const results = [];

for (const match of restaurantMatches) {
  const id = match[1];
  const name = match[2] || match[3];
  const mealsSection = match[5];

  // Count meals by counting meal id occurrences
  const mealCount = (mealsSection.match(/id:\s*'/g) || []).length;

  if (mealCount < 4) {
    results.push({
      id,
      name,
      currentMealCount: mealCount,
      needsToAdd: 4 - mealCount
    });
  }
}

console.log(`\nRestaurants needing more meals: ${results.length}\n`);
console.log('ID | Name | Current Meals | Need to Add');
console.log('---|------|---------------|------------');
results.forEach(r => {
  console.log(`${r.id} | ${r.name} | ${r.currentMealCount} | ${r.needsToAdd}`);
});
console.log(`\nTotal meals to add: ${results.reduce((sum, r) => sum + r.needsToAdd, 0)}`);
