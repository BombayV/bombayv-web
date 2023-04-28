import type { Config } from 'tailwindcss';
import tailwindTypography from '@tailwindcss/typography'
import daisyui from "daisyui";

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {

    },
  },
  plugins: [
    tailwindTypography,
    daisyui,
  ],
};