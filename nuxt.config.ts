import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  mode: 'universal',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  head: {
    title: "Bombay's Blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My personal website/blog including portfolio, projects, and photography.' },
      { hid: 'og:title', property: 'og:title', content: 'Bombay Blog' },
      { hid: 'og:og:description', property: 'og:description', content: 'My personal website/blog including portfolio, projects, and photography.' },
      { name: "theme-color", hid: "theme-color", property: 'theme-color', content: '#6366f1' },
      { hid: 'og:url', property: 'og:url', content: 'https://imbombay.tech' },
      { hid: 'og:image', property: 'og:image', content: 'https://i.imgur.com/cjlvzoP.png' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '128' },
      { hid: 'og:image:height', property: 'og:image:height', content: '128' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ]
  },
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  typeScript: {
    typeCheck: true,
    strict: true,
  },
  css: [
    '@/assets/css/global.css',
    '@/assets/css/tailwind.css',
  ]
})
