/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eco-blue': '#97D4E7',
        'eco-green': '#A4E48D',
        'eco-green-dark': '#87C96F',
      },
    },
  },
  plugins: [],
};
