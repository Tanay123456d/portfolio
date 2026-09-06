import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        border: "var(--border)",
        "muted-foreground": "var(--muted-foreground)",
      },
      fontSize: {
        "display-xl": "clamp(3rem, 11vw, 11rem)",
        "display-lg": "clamp(2.5rem, 7vw, 7rem)",
        "display-md": "clamp(2rem, 5vw, 5rem)",
        "display-sm": "clamp(1.5rem, 3vw, 3rem)",
        "body-lg": "clamp(1.125rem, 1.25vw, 1.25rem)",
        "body-md": "1rem",
        "body-sm": "clamp(0.75rem, 0.9vw, 0.875rem)",
        "meta": "clamp(0.6875rem, 0.75vw, 0.8125rem)",
      },
      letterSpacing: {
        "tighter": "-0.04em",
        "tight": "-0.02em",
        "normal": "0",
        "wide": "0.05em",
        "wider": "0.1em",
        "widest": "0.15em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
