/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        // This adds the Playfair Display font for the redesign
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}