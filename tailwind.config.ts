import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#f2f2f2"
      },
      backgroundImage: {
        'page-gradient':
        'linear-gradient(to top, #09203f 0%, #537895 100%);',
      },
      boxShadow: {
        primary: 'rgb(80 63 205 / 50%) 0px 1px 40px',
      },
      fontFamily:{
        main:['Inter', 'sans-serif'],
        title:["Euphoria Script", "cursive"]
      }
  }
  },
  plugins: [],
};
export default config;
