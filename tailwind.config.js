/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode:'class',
  theme: {
    extend: {
      screens:{
        "other":{'min':'340px','max':'1200px'}
      }
    },
  },
  plugins: [],
}

