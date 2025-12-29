/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#ffbe01',
        secondary: '#ca1f3f',
        third: '#25172e',
        background: '#f4e8e8'
      }
    },
  },
  plugins: [],
}
