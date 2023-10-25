// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: 'BombayTech | %s',
      meta: [
        { name: 'description', content: 'BombayTech is a personal blog created by Mauricio Rivera. It is a place where I share my thoughts and experiences about software development, photography, and other topics.' },
        { name: "keywords", content: "BombayTech, Mauricio Rivera, MSRP, Mauricio Sebastian Rivera Perez, Sebastian Rivera, Bombay1023, BombayV, Software Development, Photography, Blog, Personal Blog, Tech Blog, Tech, Software, Photography, Web Development, Web Design, Web, Design, Development, Software Engineer, Software Developer, Developer, Engineer, Photography, Photographer, Photo, Photos" },
        { name: 'author', content: 'Mauricio Rivera' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: "theme-color", content: "#FABC1C" },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Bombay Tech' },
        { property: 'og:description', content: 'BombayTech is a personal blog created by Mauricio Rivera. It is a place where I share my thoughts and experiences about software development, photography, and other topics.' },
        { property: 'og:url', content: 'https://bombaytech.dev' },
        { property: "og:site:name", content: "BombayTech" },
        { property: 'og:image', content: 'https://imgur.com/a/AShDjX8.png' },
        { property: "og:image:width", content: "192" },
        { property: "og:image:height", content: "192" },
        { property: 'og:image:alt', content: 'BombayTech Logo' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'es_MX' },

      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon/logo.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config',
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  },
  googleFonts: {
    display: 'swap',
    families: {
      'DM Sans': [400, 500, 600, 700, 800, 900],
    },
  },
  image: {
    quality: 90,
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1920
    }
  }
});
