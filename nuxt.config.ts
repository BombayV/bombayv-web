import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  mode: 'universal',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  head: {
    title: 'Cool Website',
    titleTemplate: '%s - Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My personal website including portfolio, FiveM projects, and photography.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-16x16.png' }
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
