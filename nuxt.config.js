// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {
        config: './tailwind.config.js'
      },
      autoprefixer: {}
    },
  },
  layouts: {
    _default: {
      layout: '~/layouts/default.vue'
    },
  },
  image: {
    dir: 'assets/images',
  },
})
