// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js" // make sure Flowbite content is included
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // this line needs flowbite installed
  ],
}
