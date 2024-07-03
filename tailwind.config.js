const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
    colors: {
      color1: "#020043",
      color2: "#343268",
      color3: "#FFC637",
      color4: "#4D4C7B",
      color5: "#FFFFF5",
    },
  },
  plugins: [flowbite.plugin()],
};
