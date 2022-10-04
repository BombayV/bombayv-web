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
        'small-wt': "url('../images/small_white.svg')",
        'big-wt': "url('../images/big_white.svg')",
        'back-wt': "url('../images/projects.svg')",
        'back-404': "url('../images/404.svg')",
      }
    }
  },
}