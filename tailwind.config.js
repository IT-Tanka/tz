module.exports = {
  content: [
    './app.vue',
    './index.html',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './views/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF0D7',
        button: '#FE4E4E',
        textBlue: '#435FDD',
        textBlack: '#484848',
        textGray: '#6B7280',
        textWhite: '#FFF',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

