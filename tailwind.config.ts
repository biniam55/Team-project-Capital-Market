import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "capital-purple": "#8138DF",
        "capital-white": "rgba(245, 245, 246, 1)",
        mycolor: "rgba(129, 56, 223, 1)",
        mycolor1: "rgba(245, 245, 246, 1)",
        "capital-deep-blue": "rgba(20, 27, 43, 1)",
        "capital-green": "rgba(20, 157, 82, 1)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        playfair: ["var(--font-playfair)"],
        bebas: ["var(--font-bebas)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
