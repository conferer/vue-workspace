import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('/src/pages/index.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('/src/pages/user.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('/src/pages/login.vue'),
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('/src/pages/logout.vue'),
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('/src/pages/message.vue'),
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
