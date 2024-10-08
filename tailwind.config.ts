import type { Config } from "tailwindcss";
import ProductOwner from "./app/components/banner/ProductOwner";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        productHives: {
          mainBackground: "#102c24",
          buttonColor: "#46e696",
          colorGrey: "#f9f8f3",
          lightYellow: "#efebe0",
          ProductOwner: "#f9f8f3",
        },
      },
    },
  },
  plugins: [],
};
export default config;
