/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryDark: "#131313",
        primaryDarkShade: {
          100: "#151515",
          200: "#1e1e1e",
          300: "#2a2a2a",
          400: "#393939",
          500: "#4e4e4e",
        },
        primaryLight: "#eee",
      },
    },
  },
  plugins: [],
};
