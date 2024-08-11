// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import cssAsPlugin from './cssAsPlugin.js';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#1F2026",
        secondary: "#1F2026",
        surfaceBase: "#F7F4F9",
        surfaceMenu: "#52197B",
        surfaceCardsmall: "#F7F4F9",
        dark: "#4C4C56",
        icon: {
          primary: "#9997B3",
        }
      },
    },
  },
  plugins: [
    cssAsPlugin,
  ],
}
