/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner-1': "url('./src/assets/Images/banner-1.jpg')",
        'banner-2': "url('./src/assets/Images/banner-2.jpg')",
        'banner-3': "url('./src/assets/Images/banner-3.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

