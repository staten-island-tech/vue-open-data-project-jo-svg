import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GetData from '@/components/GetData.vue'
import GameGuesser from '@/views/GameGuesser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/GameGuesser',
      name: 'game guesser',
      component: GameGuesser,
    },
    {
      path: '/pieChart',
      name: 'piechart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChartData.vue'),
    },
  ],
})

export default router
