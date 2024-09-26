/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sofadi:['Sofadi One' , 'system-ui']
      },
      animation: {
        'color-change': 'colorChange 10s ease-in-out infinite alternate', // Custom animation name, duration, and infinite loop
      },
      keyframes: {
        colorChange: {
          '0%': { backgroundColor: '#9b5de5' },
          '25%':{backgroundColor : '#f15bb5'},
          '50%': { backgroundColor: '#fee440' },
          '75%':{backgroundColor:'#00bbf9'},
          '100%':{backgroundColor:'#00f5d4'}
        },
      },
    },
  },
  plugins: [],
}

