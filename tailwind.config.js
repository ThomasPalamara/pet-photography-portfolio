module.exports = {
  mode: 'jit',
  purge: {
    preserveHtmlElements: false,
    content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#A9825A',
        'primary-dark': '#8B6B47',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
