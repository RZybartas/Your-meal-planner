module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: ['checked'],
    },
    colors: {
      white: '#fafcfa',
      green: '#4fd62d',
      purple: '#cc0077',
      dark: '#227000',
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
