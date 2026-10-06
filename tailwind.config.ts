import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FFFFFF",
        surface: "#F8FAFC",
        panel: "#F1F5F9",
        border: "#E2E8F0",
        hazard: "#DC2626",
        warning: "#D97706",
        telemetry: "#0284C7",
        stable: "#16A34A"
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
