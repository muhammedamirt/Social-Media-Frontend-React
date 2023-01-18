/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'heavy-metal': {
          '50': '#f4f6f3',
          '100': '#e6eae1',
          '200': '#ccd5c5',
          '300': '#a8b79e',
          '400': '#7e9473',
          '500': '#5e7653',
          '600': '#475c3f',
          '700': '#394a32',
          '800': '#303e2b',
          '900': '#273123',
      },
      'snow-drift': {
        '50': '#f2f5f0',
        '100': '#e2eadd',
        '200': '#c4d4bb',
        '300': '#9db692',
        '400': '#77966b',
        '500': '#5c7b51',
        '600': '#48623f',
        '700': '#3c5035',
        '800': '#33422d',
        '900': '#2d3829',
    },    
      }
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}