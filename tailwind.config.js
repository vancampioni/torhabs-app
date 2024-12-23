/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        light: {
          background: '#e8e8e8',
          primary: '#333333',
          secondary: '#38b6ff',
        },
        dark: {
          background: '#333333',
          primary: '#e8e8e8',
          secondary: '#38b6ff',
          highlight: '#4f4e4e',
        }
      }
    }
  },
  plugins: []
}
