/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'open': ['"Open Sans"'],
    },
    extend: {
      colors: {
        'p-pink': 'hsl(322, 100%, 66%)',
        'p-light-pink': 'hsl(321, 100%, 78%)',
        'p-light-red': 'hsl(0, 100%, 63%)',
        'n-dark-blue': 'hsl(192, 100%, 9%)',
        'n-pale-blue': 'hsl(207, 100%, 98%)',
      }
    },
    screens: {
      'desktop': '1440px',
      'tablet': '760px',
      'mobile': '375px',
    },
  },
  plugins: [],
}

