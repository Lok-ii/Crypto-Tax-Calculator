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
        
      },
      screens: {
        'mobile-small' : '321px',
        'mobile-medium' : '426px',
        'mobile-large' : '476px',

        'tablet': '769px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1025px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1281px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        footerBlue: `url("./src/assets/Images.Frame.png")`,
      }
    },
  },
  plugins: [],
}