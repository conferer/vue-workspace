import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  //TODO auth
  next()
})

export default router
