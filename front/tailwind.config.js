export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.3)',
        md: '2px 2px 4px rgba(0,0,0,0.5)',
        lg: '3px 3px 6px rgba(0,0,0,0.8)',
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textShadows = theme('textShadow')
      const utilities = Object.entries(textShadows).map(([key, value]) => ({
        [`.text-shadow-${key}`]: {
          textShadow: value,
        },
      }))
      addUtilities(utilities)
    }
  ],
}