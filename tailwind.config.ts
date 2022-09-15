import { Config } from 'tailwindcss'
// @ts-ignore
export default <Config> {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        play: ['Playfair Display', 'serif'],
        mont: ['Montserrat', 'sans-serif'],
        alex: ['Alex', 'sans-serif'],
      },
      backgroundImage: {
        'small-pt': "url('../images/small.svg')",
        'big-pt': "url('../images/big.svg')",
      }
    }
  },
}