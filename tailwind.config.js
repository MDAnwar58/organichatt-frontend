/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "2lg": "1175px",
        "5md": "925px",
        "4md": "900px",
        "3md": "875px",
        "2md": "865px",
        "5sm": "735px",
        "4sm": "725px",
        "3sm": "675px",
        xs: "575px",
        "2xs": "500px",
        "3xs": "425px",
        "3/4xs": "400px",
        "4xs": "375px",
        "5xs": "350px",
        "6xs": "335px",
        "7xs": "320px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
