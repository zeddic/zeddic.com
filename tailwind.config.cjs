/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        // xl: '1280px',
        // no 2xl
      }
    },
    extend: {},
  },
  plugins: [],
}
