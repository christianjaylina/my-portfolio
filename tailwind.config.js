/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f4f4',
          100: '#e8e6e7',
          200: '#d4d1d2',
          300: '#b5b0b1',
          400: '#8a8485',
          500: '#6b6566',
          600: '#484344',  // graphite-2
          700: '#454041',  // graphite
          800: '#171314',  // onyx-2
          900: '#090909',  // black
        },
        graphite: '#454041',
        onyx: '#161516',
        dark: '#090909',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

