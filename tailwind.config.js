/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48', // High-end Red
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        dark: {
          DEFAULT: '#000000',
          50: '#1a1a1a',
          100: '#141414',
          200: '#0f0f0f',
          300: '#0a0a0a',
          400: '#050505',
          500: '#000000',
        }
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
