import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import JsParallax from '@/views/JsParallax.vue'
import cssParallax from '@/views/cssParallax.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jsParallax',
      name: 'js parallax',
      component: JsParallax
    },
    {
      path: '/cssParrallax',
      name: 'css Parallax',
      component: cssParallax
    },
  ]
})

export default router
