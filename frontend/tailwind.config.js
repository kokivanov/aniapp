/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}

