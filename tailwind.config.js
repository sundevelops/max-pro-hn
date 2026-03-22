/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#111212', // Woodsmoke
        primary: '#E8E8E8', // Light text
        accent: '#443C3E', // Tundora
        accent2: '#44443C', // Armadillo
        grayDark: '#1A1A1A',
        grayLight: '#8B8B8B',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
