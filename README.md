# KetoKompanion 🥑

Your complete on-the-go keto meal tracking companion! KetoKompanion helps you make optimal keto food choices, track your daily macros, monitor weight progress, and plan grocery shopping on a budget.

## Features

### 🍔 Restaurant Finder
- **Directory of keto-friendly restaurants** including:
  - McDonald's
  - Wawa
  - Wegmans
  - Seasons Pizza
  - Chipotle
  - Subway
- **Precise nutritional data** for each meal option
- **Optimal meal suggestions** marked with stars
- **Sorting options**: Lowest carbs, highest protein, or best price
- Complete macro breakdown: net carbs, protein, fat, and calories

### 📊 Daily Food Tracker
- **Log all meals** throughout your day
- **Real-time carb counting** with visual progress bar
- **Daily macro totals**: carbs, protein, fat, and calories
- **20g net carb daily target** (adjustable in code)
- Track which restaurant each meal came from
- Delete entries if needed
- **Visual warnings** when approaching or exceeding carb limit

### ⚖️ Weight & Progress Tracker
- **Log weight entries** with dates and optional notes
- **Interactive progress chart** showing weight trends over time
- **Statistics dashboard**:
  - Current weight
  - Starting weight
  - Total weight change
  - Lowest weight achieved
- **Complete history** of all weight entries
- Easy entry management (add/delete)

### 🛒 Grocery Budget Optimizer
- **Enter your budget** and get optimal shopping recommendations
- **Smart algorithm** balances proteins, dairy, and vegetables
- **20+ keto-friendly grocery items** with complete nutritional data
- **Adjust quantities** for each recommended item
- **Real-time totals** for cost and macros
- **Complete item reference** with all available options
- Optimized for maximum protein and minimum carbs per dollar

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Data Storage**: Local Storage (browser-based, no backend required)
- **Deployment**: Vercel

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial KetoKompanion app"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

Your app will be live in minutes!

## Usage Guide

### Finding Restaurant Meals

1. Click the **"Restaurants"** tab
2. Select a restaurant from the grid
3. Browse keto-friendly meal options
4. Use sorting to find:
   - Lowest carb options
   - Highest protein meals
   - Best value for money
5. Look for ⭐ **Optimal Keto Choice** badges

### Tracking Daily Meals

1. Click the **"Daily Tracker"** tab
2. Click **"+ Add Meal"**
3. Enter meal details:
   - Name (required)
   - Net carbs (required)
   - Protein, fat, calories (optional but recommended)
   - Restaurant name (optional)
4. Watch your daily totals update in real-time
5. Stay under 20g net carbs per day

### Monitoring Weight

1. Click the **"Weight"** tab
2. Click **"+ Log Weight"**
3. Enter:
   - Date
   - Weight (lbs)
   - Optional notes
4. View your progress chart and statistics

### Optimizing Grocery Shopping

1. Click the **"Grocery"** tab
2. Enter your budget (e.g., $50)
3. Click **"Optimize"**
4. Review recommended items
5. Adjust quantities using +/- buttons
6. See real-time totals for cost and macros

## Customization

### Adding More Restaurants

Edit `data/restaurants.ts`:

```typescript
{
  id: 'new-restaurant',
  name: 'Restaurant Name',
  meals: [
    {
      id: 'meal-1',
      name: 'Meal Name',
      carbs: 5,
      protein: 30,
      fat: 20,
      calories: 350,
      price: 8.99,
      isOptimal: true,
      description: 'Order notes'
    }
  ]
}
```

### Adding Grocery Items

Edit `data/groceryItems.ts`:

```typescript
{
  id: 'g-new',
  name: 'Item Name',
  price: 4.99,
  carbs: 10,
  protein: 20,
  fat: 15,
  servings: 4,
  carbsPerDollar: 2.0
}
```

### Changing Daily Carb Limit

Edit `components/DailyTracker.tsx` line 83:

```typescript
const carbsRemaining = Math.max(0, 20 - todayEntry.totalCarbs); // Change 20 to your limit
```

## Data Storage

All data is stored **locally in your browser** using localStorage:
- No account required
- No server/database needed
- Data persists between sessions
- Privacy-focused (data never leaves your device)

**Note**: Data is browser-specific. Clearing browser data will erase your entries.

## Mobile-Friendly

KetoKompanion is fully responsive and works great on:
- 📱 Mobile phones
- 📲 Tablets
- 💻 Desktop computers

Perfect for on-the-go meal tracking!

## Contributing

Want to add more restaurants or features? Pull requests welcome!

## License

MIT License - feel free to use and modify for your own keto journey!

## Support

For issues or questions, please open a GitHub issue.

---

**Stay keto, stay healthy!** 🥑💪
