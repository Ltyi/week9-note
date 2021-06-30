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
        },
        secondary: {
          dark: '#424255',
          light: '#eeeeee'
        }
      },

      boxShadow: {
        card: '0 2px 4px 0 rgba(0,0,0,0.50)',
        tile: '0 2px 4px 0 rgba(0,0,0,0.16)'
      },

      backgroundImage: () => ({
        cover1: "url('~@/assets/cover/1.jpg')",
        cover2: "url('~@/assets/cover/2.jpg')",
        cover3: "url('~@/assets/cover/3.jpg')",
        cover4: "url('~@/assets/cover/4.jpg')",
        cover5: "url('~@/assets/cover/5.jpg')",
        parallel: 'linear-gradient(180deg, #F1F0F0 0%, #F5F5F5 100%)'
      })
    }
  },

  variants: {},

  plugins: []
}
