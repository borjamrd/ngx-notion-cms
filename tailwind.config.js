/** @type {import('tailwindcss').Config} */

// All projects by default

module.exports = {
  darkMode: 'class',
  content: [
    "./projects/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {

        // Tema claro
        light: {
          primary: '#1d4ed8',   // Blue 700
          secondary: '#9333ea', // Purple 600
          background: '#ffffff', // White
          foreground: '#000000', // Black
          accent: '#f59e0b',     // Amber 500
          muted: '#f3f4f6',      // Gray 200
        },
        // Tema oscuro
        dark: {
          primary: '#3b82f6',   // Blue 500
          secondary: '#6b21a8', // Purple 700
          background: '#0F0F11', // Gray 800
          foreground: '#ffffff', // White
          accent: '#d97706',     // Amber 600
          muted: '#374151',      // Gray 700
        },
      },
    },
  },
  plugins: [],
}

