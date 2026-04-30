/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#060916',
        card: 'rgba(21, 28, 53, 0.6)',
        accent: '#7c8cff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 30px 80px rgba(124, 140, 255, 0.35)',
        soft: '0 16px 40px rgba(6, 9, 22, 0.35)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at 20% 20%, rgba(124, 140, 255, 0.2), transparent 45%), radial-gradient(circle at 80% 15%, rgba(0, 214, 255, 0.15), transparent 40%), linear-gradient(160deg, #05070f 0%, #0a1022 45%, #05070f 100%)',
      },
    },
  },
  plugins: [],
}

