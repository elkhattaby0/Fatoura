import type { Config } from "tailwindcss";

export default {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "var(--darkBlue)",        
        skyBlue: "var(--skyBlue)",
        black: "var(--black)",
        green: "var(--green)",
        gold: "var(--gold)",
        white: "var(--white)",
        lightGray: "var(--lightGray)",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
