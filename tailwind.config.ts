/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'textDark': 'var(--textD)',
        'backgroundDark': 'var(--backgroundD)',
        'primaryDark': 'var(--primaryD)',
        'secondaryDark': 'var(--secondaryD)',
        'accentDark': 'var(--accentD)',
      },
    },
  },
  plugins: [],
}

