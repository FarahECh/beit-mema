import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)", 
        main: "#808E79",
        "brand-gray": "#4D4D4D",
        dark: "#1D1D1B",
      },
      fontFamily: {
        "geist-sans": ["var(--font-geist-sans)"],
        "geist-mono": ["var(--font-geist-mono)"],
        aesthetic: ["var(--font-aesthetic)"],
        "din-next-lt-pro": ["var(--font-din-next-lt-pro)"],
        "made-mirage-bold": ["var(--font-made-mirage-bold)"],
        "made-mirage-medium": ["var(--font-made-mirage-medium)"],
        "made-mirage-regular": ["var(--font-made-mirage-regular)"],
        "metropolis-medium": ["var(--font-metropolis-medium)"],
        "metropolis-regular": ["var(--font-metropolis-regular)"],
      },
    },
  },
  plugins: [],
};

export default config;
