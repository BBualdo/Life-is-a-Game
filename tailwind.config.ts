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
        rog: "url('/assets/images/rog.gif')",
      },
      colors: {
        "cp-cyan": "#00f0ff",
        "cp-red": "#cd0001",
      },
    },
  },
  plugins: [],
};
export default config;
