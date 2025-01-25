import daisyui from 'daisyui';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path to your project structure
    './public/index.html',        // Include HTML if you're using it
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
};
