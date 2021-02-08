module.exports = {
 // purge: [],
 purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-pattern': "url('../../src/assets/nav_bar.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
