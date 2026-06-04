import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home').then(({ HomePage }) => HomePage),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/about').then(({ AboutPage }) => AboutPage),
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/pages/catalog').then(({ CatalogPage }) => CatalogPage),
    },
    {
      path: '/catalog/:slug',
      name: 'product',
      component: () => import('@/pages/product').then(({ ProductPage }) => ProductPage),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/pages/news').then(({ NewsPage }) => NewsPage),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
