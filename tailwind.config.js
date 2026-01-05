/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        keto: {
          primary: '#059669',     // Darker, higher contrast green
          secondary: '#047857',   // Even darker for better visibility
          dark: '#065f46',        // Much darker for text
          light: '#10b981',       // Lighter accent
          bg: '#f0fdf4',          // Light green background
        },
      },
    },
  },
  plugins: [],
}
