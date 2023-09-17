import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        primary: '#0077B6',
        secondary: '#F5F5F5',
        secondary_dark:"#D9D9D9"
        // gradient: 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)'
      },
    },
  },
  plugins: [],
};
export default config;
