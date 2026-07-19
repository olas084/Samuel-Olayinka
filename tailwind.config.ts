import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F212E",       // primary background — Stake-style deep navy
        panel: "#1A2C38",     // card/panel background
        line: "#2F4553",      // hairline borders
        paper: "#F4F7FA",     // primary text (near-white)
        mute: "#B1BAD3",      // secondary text — muted slate-blue
        signal: "#1FFF6C",    // secondary accent green
        alert: "#FF3A5E",     // negative / warning accent
        gold: "#00E701",      // primary brand accent — signature green
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        blink: "blink 1.6s steps(1) infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
