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
          content: 'My personal website created to share my own work and others through a free online platform ',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
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
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  }
})
