/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FDFBF7',
        secondary: '#5F6F52',
        accent: '#B99855',
        text: '#3A3A3A',
      },
      fontFamily: {
        script: ['Great Vibes', 'cursive'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

