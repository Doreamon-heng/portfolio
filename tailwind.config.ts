import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712", // slate-950
        surface: "#0f172a",    // slate-900
        card: "rgba(30, 41, 59, 0.5)", // glass background
      },
    },
  },
  plugins: [],
};
export default config;