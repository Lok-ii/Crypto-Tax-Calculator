/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBlue: "#0052FE",
        bgColor: "#e9ebee",
        lightPrimaryBlue: "#EFF2F5",
        blueTransparent:"#EDF2FF",
        greenTransparent: "#EBF8F5",
        textGreen: "#0FBB82",
        
      }
    },
  },
  plugins: [],
}