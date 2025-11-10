/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#ffffff',
        secondary: '#f3f3f3',
      },
    },
  },
  plugins: [],
}

