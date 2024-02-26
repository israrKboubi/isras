import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/index.vue').then(r => r.default || r)
    },
    {
      name: 'blog',
      path: '/blog',
      component: () => import('~/pages/blog.vue').then(r => r.default || r)
    },
    {
      name: 'articles',
      path: '/articles/:id',
      component: () => import('~/pages/articles/[id].vue').then(r => r.default || r)
    }
  ],
}
