
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  target: 'static',
  routeRules: {
    '/articles/**': { isr: true },
  },
  css: [
    '~/assets/css/vendor.css',
  '~/assets/css/bootstrap.min.css',
  '~/assets/css/global.css',
  '~/assets/css/animate.min.css',
  '~/assets/css/normalize.min.css',
],
app: {
  head: {
    title: "Israr Kboubi's Portfolio",
    bodyAttrs: {
      'class': 'bg-body homepage post-template',
      'data-bs-spy':'scroll',
      'tabindex':'0',
      'data-bs-target':'#header-nav'
    },
  },
},  
modules: ['@nuxt/ui']
})
