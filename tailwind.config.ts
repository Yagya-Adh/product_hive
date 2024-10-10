import type { Config } from "tailwindcss";

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
          feautrePill: "#90f0c0",
        },
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://cdn.prod.website-files.com/661e1bd626e15bec7b70a970/661e2e6d3fc9207de83f3144_heading-background-element.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
