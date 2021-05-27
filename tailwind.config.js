module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'logo': 'url("../images/desktop/image-hero.jpg")',
        'mobile': 'url("../images/mobile/image-hero.jpg")',
      },
      spacing: {
        105: '5%',
        100: '10%',
        200: '20%',
        300: '30%',
        400: '40%',
        450: '45%',
        500: '50%',
        600: '60%',
        700: '70%',
        800: '80%',
        900: '90%',
      },
      screens: {
        'mobile': {'max': '639px'},
        // =>@media (max-width: 639px)
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
