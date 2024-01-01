/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter'],
       // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },


  plugins: [({addUtilities})=>{
     
  const newUtilities ={
        ".no-scrollbar::-webkit-scrollbar":{
          display: "none",
      },
      ".no-scrollbar": {
          "-ms-overflow-style":"none", 
          "scrollbar-width": "none"
      },
  };


      addUtilities(newUtilities)

    }
  ],




}
