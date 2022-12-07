/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    fontSize:{
      'logBtn' : ['12px', '18px'],
      'web-logBtn' : ['16px', '24px'],
      'headerInfo1' : ['34px', '40.8px'],
      'headerInfo2' : ['18px', '27px'],
      'headerInfo3' : ['14px', '21px'],
      'headerInfo4' : ['12px', '18px'],
      'web-headerInfo1' : ['60px', '72px'],
      'web-headerInfo2' : ['20px', '30px'],
      'web-headerInfo3' : ['16px', '24px'],
      'web-headerInfo4' : ['22px', '26.4px'],
      'footerInfo1' : ['20px', '30px'],
      'footerInfo2' : ['14px', '21px'],
      'footerInfo3' : ['16px', '19.2px'],
    },
    colors: {
      'black': '#010101',
      'gray': '#757575',
      'white': '#fff',
      'red': '#e50914',
      'blue': '#0071eb',
      'green': '#2ede75'
    },
    fontSize: {
      'logBtn': ['12px', '18px']
    },
    fontFamily: {
      'spoqahansans': ['Spoqa Han Sans Neo', 'sans-serif'],
    },
    borderRadius:{
      
    },
    extend: {},
  },
  plugins: [],
}
