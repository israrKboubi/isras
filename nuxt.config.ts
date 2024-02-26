
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  target: 'static',
  routeRules: {
    // Homepage pre-rendered at build time
    '/articles/**': { isr: true },
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      nitroConfig.prerender = nitroConfig.prerender || {};
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || [];

      if (nitroConfig.dev) {
        return;
      }

      try {
        const response = await fetch('https://dockerhub-israr-blog.onrender.com/articles/');
          if (response.ok) {
            const news: News[] = await response.json();
            const routes2 = news.map((news) => `/articles/${news.id}`);
            nitroConfig.prerender.routes.push(...routes2);
          } else {
            console.error('Error fetching data:', response.statusText);
          }
         
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
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
}
})
