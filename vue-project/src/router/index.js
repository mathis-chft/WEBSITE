import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Transformationdigitale from '../views/Transformationdigitale.vue'
import UXUI from '../views/UX-UI.vue'
import Dev from '../views/Dev.vue'
import Business from '../views/Business.vue'
import Digital from '../views/Digital.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
        {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/transformationdigitale',
      name: 'Transformationdigitale',
      component: Transformationdigitale
    },
    {
      path: '/UXUI',
      name: 'UXUI',
      component: UXUI
    },
    {
      path: '/dev',
      name: 'Dev',
      component: Dev
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/digital',
      name: 'Digital',
      component: Digital
    },
  ]
})
export default router
