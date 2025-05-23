/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
    extend: {},
  },
  daisyui: {
    themes: ["forest", "luxury", "night", "synthwave"],
  },
  plugins: [require("daisyui")],
}