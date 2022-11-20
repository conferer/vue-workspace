import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'homepage',
      path: '/',
      component: () => import('/src/pages/index.vue'),
    },
    {
      name: 'user',
      path: '/user',
      component: () => import('/src/pages/user.vue'),
    },
  ],
})

export default router
