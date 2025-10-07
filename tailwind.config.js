/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            zentry: ['zentry', 'sans-serif'],
            general: ['general', 'sans-serif'],
            'circular-web': ['circular-web', 'sans-serif'],
            'robert-medium': ['robert-medium', 'sans-serif'],
            'robert-regular': ['robert-regular', 'sans-serif'],
        },
    },
  },
  plugins: [],
}
