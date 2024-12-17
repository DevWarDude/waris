/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "780px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        sans: ['"Public Sans"', "ui-sans-serif", "system-ui"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      // backgroundImage: {
      //   "custom-gradient": "linear-gradient(135deg, zinc-900, zinc-500",
      // },
    },
  },
  plugins: [],
};
