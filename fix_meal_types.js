const fs = require('fs');

let content = fs.readFileSync('data/restaurants.ts', 'utf8');

// More specific keywords for accurate categorization
function getMealType(name, description) {
  const text = (name + ' ' + (description || '')).toLowerCase();

  // BREAKFAST - Must have clear breakfast indicators
  if (
    text.includes('breakfast') ||
    text.includes('egg mcmuffin') ||
    text.includes('omelette') ||
    text.includes('omelet') ||
    (text.includes('egg') && (text.includes('breakfast') || text.includes('morning') || text.includes('scrambled') || text.includes('bowl - eggs'))) ||
    (text.includes('sausage') && (text.includes('egg') || text.includes('breakfast'))) ||
    (text.includes('bacon') && (text.includes('egg') || text.includes('breakfast'))) ||
    text.includes('egg bites') ||
    text.includes('mcmuffin') ||
    text.includes('wake-up wrap')
  ) {
    return 'breakfast';
  }

  // SNACK - Wings, tenders, sides, bites
  if (
    text.includes('wing') ||
    text.includes('tender') && !text.includes('tender filet') ||
    text.includes('nugget') ||
    text.includes('popper') ||
    text.includes('green beans') ||
    text.includes('side salad') ||
    text.includes('livers')
  ) {
    return 'snack';
  }

  // DINNER - Premium proteins and entrees
  if (
    text.includes('steak') ||
    text.includes('filet mignon') ||
    text.includes('ribeye') ||
    text.includes('sirloin') ||
    text.includes('prime rib') ||
    text.includes('salmon') ||
    text.includes('lobster') ||
    text.includes('shrimp alexander') ||
    text.includes('sea bass') ||
    text.includes('mahi') ||
    text.includes('tuna steak') ||
    text.includes('pork chops') ||
    text.includes('rotisserie chicken') && text.includes('half') ||
    text.includes('rotisserie turkey')
  ) {
    return 'dinner';
  }

  // LUNCH - Salads, bowls, subs, wraps (but not breakfast)
  if (
    text.includes('salad') && !text.includes('egg') ||
    text.includes('sub in a tub') ||
    text.includes('lettuce wrap') ||
    text.includes('unwich') ||
    text.includes('protein bowl') && !text.includes('breakfast') ||
    text.includes('bowl') && (text.includes('chicken') || text.includes('steak') || text.includes('carnitas')) && !text.includes('breakfast') ||
    text.includes('power bowl') && !text.includes('breakfast')
  ) {
    return 'lunch';
  }

  // ANYTIME - Burgers, burritos, tacos, general items
  if (
    text.includes('burger') ||
    text.includes('burrito') && !text.includes('breakfast') ||
    text.includes('taco') ||
    text.includes('quesadilla') ||
    text.includes('meatball') ||
    text.includes('cheese steak')
  ) {
    return 'anytime';
  }

  // Default: if it has grilled chicken or protein, it's lunch
  if (text.includes('grilled chicken') || text.includes('grilled shrimp')) {
    return 'lunch';
  }

  // Final default
  return 'anytime';
}

// Updated regex to match meal objects with mealType field
const mealRegex = /{\s*id:\s*'([^']+)',\s*name:\s*'([^']*(?:\\'[^']*)*)',\s*carbs:\s*(\d+),\s*protein:\s*(\d+),\s*fat:\s*(\d+),\s*calories:\s*(\d+),\s*price:\s*([\d.]+),\s*isOptimal:\s*(true|false),\s*description:\s*'([^']*(?:\\'[^']*)*)'(?:,\s*mealType:\s*'([^']*)')?\s*}/g;

let updatedContent = content;
let updateCount = 0;
const changes = [];

const matches = [...content.matchAll(mealRegex)];

matches.forEach(match => {
  const [fullMatch, id, name, carbs, protein, fat, calories, price, isOptimal, description, oldMealType] = match;
  const newMealType = getMealType(name, description);

  // Create updated meal with corrected mealType
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
        mealType: '${newMealType}'
      }`;

  updatedContent = updatedContent.replace(fullMatch, updatedMeal);
  updateCount++;

  if (oldMealType !== newMealType) {
    changes.push({ id, name: name.substring(0, 50), old: oldMealType, new: newMealType });
  }
});

fs.writeFileSync('data/restaurants.ts', updatedContent, 'utf8');

console.log(`✓ Re-categorized ${updateCount} meals!\n`);
console.log(`Changed ${changes.length} meal types:\n`);
changes.slice(0, 20).forEach(c => {
  console.log(`  ${c.id}: ${c.old || 'none'} → ${c.new} | ${c.name}`);
});

console.log('\nNew meal type distribution:');
const types = ['breakfast', 'lunch', 'dinner', 'snack', 'anytime'];
types.forEach(type => {
  const count = (updatedContent.match(new RegExp(`mealType: '${type}'`, 'g')) || []).length;
  console.log(`  ${type}: ${count} meals`);
});
