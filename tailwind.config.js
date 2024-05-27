const tailwindTheme = require("tailwindcss/defaultTheme");
const flowbite = require("flowbite-react/tailwind");

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#202020",
        "primary-blue": "#02B5E2",
        "primary-orange": "#ED6B00",
        "blue-1": "#002554",
      },
    },
    fontFamily: tailwindTheme.fontFamily, // Access the property
    // ... other theme properties
  },
  plugins: [
    flowbite.plugin(),
  ],
};

export default config;
