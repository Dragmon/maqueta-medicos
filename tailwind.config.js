const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      purple: colors.violet,
      pink: colors.pink,
      black: colors.black,
      white: colors.white,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
