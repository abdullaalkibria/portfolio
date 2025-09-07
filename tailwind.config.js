/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6f6ff', 100: '#cfeefe', 200: '#a7e0fd', 300: '#74ccfb', 400: '#38bdf8',
          500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e',
        }
      },
      boxShadow: { soft: '0 10px 30px rgba(2,132,199,0.15)' },
      fontFamily: { display: ['Inter', 'ui-sans-serif', 'system-ui'], body: ['Inter','ui-sans-serif','system-ui'] }
    },
  },
  plugins: [],
}
