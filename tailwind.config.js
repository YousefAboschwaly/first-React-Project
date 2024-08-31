/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
      
        screens: {
          None:'100%',
          sm: '640px',  
          md: '768px',   
          lg: '1024px', 
          xl: '1280px', 
          '2xl': '1280px',        
         },
         center:{
          'auto': '50%',
         }
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}