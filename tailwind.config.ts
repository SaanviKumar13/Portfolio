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
        portfolio:{
          "white":"#f2f2f2",
          "sea-blue":"#527794",
          "navy-blue":"#000212",
          "light-blue":"#9dc1d4",
          "sky-blue":"#BCD3E7",
        }
      },
      backgroundImage: {
        'page-gradient':
        'linear-gradient(to top, #09203f 0%, #537895 100%);',
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
