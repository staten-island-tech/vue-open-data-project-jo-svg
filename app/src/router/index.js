import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ChartView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chart',
      component: HomeView,
    },
    {
      path: '/AllStats',
      name: 'allstats',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AllStats.vue'),
    }, 
  ],
})

export default router
