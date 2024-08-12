/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          '50': '#f1fcf3',
          '100': '#defae5',
          '200': '#bef4cd',
          '300': '#8beaa5',
          '400': '#51d777',
          '500': '#2abd54',
          '600': '#20ac48',
          '700': '#1a7b36',
          '800': '#1a612f',
          '900': '#175029',
          '950': '#072c13',
        },
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}

