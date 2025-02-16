/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333333',       // Dark Gray
        secondary: '#E4D6B3',     // Warm Beige
        accent: '#A68DAD',        // Muted Purple
        background: '#FFFFFF',    // White
        'text-primary': '#333333',// Dark Gray
        'text-secondary': '#777777'// Medium Gray
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        accent: ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

