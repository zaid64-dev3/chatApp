/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path to your project structure
    './public/index.html',        // Include HTML if you're using it
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
