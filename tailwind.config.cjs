/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { width: '0',transform: 'translateX(-100%)' },
          '100%': { width: '100%',transform: 'translateX(0)' },
        },
        scaleUpBtm: {
          '0%': {
            transform: 'scale(0.5)',
            transformOrigin: '50% 100%',
          },
          '100%': {
            transform: 'scale(1)',
            transformOrigin: '50% 100%',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 1.2s ease-out forwards',
        scaleUpBtm: 'scaleUpBtm 0.5s ease-in-out 1',
      },
    },
  },
  plugins: [],
}