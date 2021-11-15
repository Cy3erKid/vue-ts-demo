module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    
  },
  daisyui: {
    styled: true,
    themes: [
      'emerald', // first one will be the default theme
      'dark',
      'forest',
      'synthwave',
      'bumblebee'
    ],
    rtl: false,
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}
