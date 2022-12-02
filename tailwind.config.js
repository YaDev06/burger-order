/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
       screens: {
        'lg': "1000px",
        'md':'760px',
        'sm':'360px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}