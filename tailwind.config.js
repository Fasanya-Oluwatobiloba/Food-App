/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      'Raleway': ['Raleway'],
    },
    extend: {
      colors:{
        'yellowish': '#FF912C',
        'grayish': '#6D7671',
        'blackish': '#000000B2',
        'home-gray': '#000000A6',
        'home-color': '#FF912C',
        'icon-gray': '#C5C5C5',
        'love-color': '#ED4545',
        'moneyplus': '#3BC575'
      }
    },
  },
  plugins: [],
}

