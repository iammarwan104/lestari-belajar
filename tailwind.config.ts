import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
          'cuslor-1': '#274C77', // dodge blue
          'cuslor-2': '#8B8C89', // gray
          'cuslor-3': '#E7ECEF', //white bone
          'cuslor-4': '#FFB923', //Orange
      },
    },
  },
  plugins: [],
};
export default config;
