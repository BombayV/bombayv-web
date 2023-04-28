// https://nuxt.com/docs/api/configuration/nuxt-config
import {TitleTemplate} from "@unhead/vue";

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/supabase'],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Bombay | Design & Development',
      titleTemplate: (titleChunk: TitleTemplate | undefined) => {
        return titleChunk ? `${titleChunk} | Bombay` : 'Bombay | Design & Development';
      },
      meta: [
        {
          name: 'description',
          content: 'My personal website created to share my own work and others through a free online platform.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon/logo.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
      ],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
  },
  colorMode: {
    preference: 'system',
    dataValue: 'theme',
    fallback: 'light',
    classSuffix: '',
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  }
})
