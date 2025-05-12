/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50',
          dark: '#388E3C',
          light: '#C8E6C9',
        },
        accent: '#FF9800',
        text: {
          primary: '#212121',
          secondary: '#757575',
          hint: '#9E9E9E',
        },
        background: '#F5F5F5',
      },
      boxShadow: {
        'default': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'default': '8px',
        'lg': '12px',
      },
    },
  },
  plugins: [],
}