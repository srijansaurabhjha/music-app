/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'mdd':{max:'900px'},
      'mddd':{max:'600px'},
      'mddds':{min:'600px'},
      'xss':{max:'400px'},
      'xsss':{max:'450px'},
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}

