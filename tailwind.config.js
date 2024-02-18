/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    screens: {
      'mobile': '375px',
      'desktop': '768px',
    },
    fontFamily: {
      'title': ['Poppins', 'sans-serif'],
      'body': ['Open Sans', 'sans-serif'],

    },
    extend: {
      colors: {
        'pink': 'hsl(322, 100%, 66%)',
        'light-pink': 'hsl(321, 100%, 78%)',
        'light-red': 'hsl(0, 100%, 63%)',
        'dark-cyan': 'hsl(192, 100%, 9%)',
        'pale-blue': 'hsl(207, 100%, 98%)',
      }
    },
  },
  plugins: [],
}

