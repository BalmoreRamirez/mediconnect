/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue-custom': '#3B72FF',
        'green-custom': '#50DE89',
        'yellow-custom': '#FFDA7A',
        'purple-custom': '#AIECBF',
        'light-white':'#FBFBFB'
      },
    },
  },
  plugins: [],
}

