import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
        },
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        content: "hsl(var(--color-content) / <alpha-value>)",
        bcol : "var(--colot-bcol) / <alpha-value>"
      },
      animation: {
        "spin-slower": "spin 35s ease infinite",
        "spin-faster": "spin 25s ease infinite reverse",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
