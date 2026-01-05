const fs = require('fs');

let content = fs.readFileSync('data/restaurants.ts', 'utf8');

// Define keywords for each meal type
const breakfastKeywords = ['breakfast', 'egg', 'bacon', 'sausage', 'omelette', 'morning', 'mcmuffin', 'bites', 'wrap (no wrap)', 'scrambled'];
const snackKeywords = ['wings', 'bites', 'snack', 'side', 'tenders', 'poppers', 'protein box', 'egg bites'];
const lunchKeywords = ['salad', 'bowl', 'sub in a tub', 'lettuce wrap', 'unwich', 'protein bowl', 'sandwich (no'];
const dinnerKeywords = ['steak', 'salmon', 'filet', 'ribeye', 'sirloin', 'chops', 'shrimp', 'lobster', 'prime rib', 'chicken breast', 'mahi', 'tuna', 'crab'];

function getMealType(name, description) {
  const text = (name + ' ' + (description || '')).toLowerCase();

  // Check breakfast first (highest priority for breakfast items)
  if (breakfastKeywords.some(keyword => text.includes(keyword))) {
    // But if it's also clearly a snack item, mark as snack
    if (text.includes('egg bites') || text.includes('protein box')) {
      return 'breakfast';
    }
    // Breakfast wraps and sandwiches without bun
    if (text.includes('breakfast') || text.includes('egg') || text.includes('omelette')) {
      return 'breakfast';
    }
  }

  // Check for wings and tenders (snacks)
  if (text.includes('wing') || text.includes('tender') || text.includes('nugget') || text.includes('popper')) {
    return 'snack';
  }

  // Check dinner items (steaks, seafood, premium entrees)
  if (dinnerKeywords.some(keyword => text.includes(keyword))) {
    return 'dinner';
  }

  // Check lunch items (salads, bowls, sandwiches)
  if (lunchKeywords.some(keyword => text.includes(keyword))) {
    return 'lunch';
  }

  // Green beans and sides are snacks
  if (text.includes('green beans') || text.includes('side') || text.includes('fries (no fries')) {
    return 'snack';
  }

  // Default: anything with burger, burrito, taco, quesadilla
  if (text.includes('burger') || text.includes('burrito') || text.includes('taco') || text.includes('quesadilla')) {
    return 'anytime';
  }

  // Default to anytime for everything else
  return 'anytime';
}

// Updated regex to handle meal objects
const mealRegex = /{\s*id:\s*'([^']+)',\s*name:\s*'([^']*(?:\\'[^']*)*)',\s*carbs:\s*(\d+),\s*protein:\s*(\d+),\s*fat:\s*(\d+),\s*calories:\s*(\d+),\s*price:\s*([\d.]+),\s*isOptimal:\s*(true|false),\s*description:\s*'([^']*(?:\\'[^']*)*)'\s*}/g;

let match;
let updatedContent = content;
let updateCount = 0;

// Find all meals and add mealType
const matches = [...content.matchAll(mealRegex)];

matches.forEach(match => {
  const [fullMatch, id, name, carbs, protein, fat, calories, price, isOptimal, description] = match;
  const mealType = getMealType(name, description);

  // Create updated meal with mealType
  const updatedMeal = `{
        id: '${id}',
        name: '${name}',
        carbs: ${carbs},
        protein: ${protein},
        fat: ${fat},
        calories: ${calories},
        price: ${price},
        isOptimal: ${isOptimal},
        description: '${description}',
        mealType: '${mealType}'
      }`;

  updatedContent = updatedContent.replace(fullMatch, updatedMeal);
  updateCount++;

  if (updateCount <= 10) {
    console.log(`${id}: ${name.substring(0, 40)}... -> ${mealType}`);
  }
});

fs.writeFileSync('data/restaurants.ts', updatedContent, 'utf8');
console.log(`\n✓ Added mealType to ${updateCount} meals!`);
console.log('\nMeal type distribution:');
const types = ['breakfast', 'lunch', 'dinner', 'snack', 'anytime'];
types.forEach(type => {
  const count = (updatedContent.match(new RegExp(`mealType: '${type}'`, 'g')) || []).length;
  console.log(`  ${type}: ${count} meals`);
});
