module.exports = {
  mode: 'jit',

  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans TC', 'sans-serif']
      },

      colors: {
        primary: {
          dark: '#22222D',
          light: '#ffffff'
        }
      }
    }
  },

  variants: {},

  plugins: []
}
