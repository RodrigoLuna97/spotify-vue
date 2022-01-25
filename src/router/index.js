import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    
      path: '/premium',
      name: 'Premium',
      component: () => import(/* webpackChunkName: "premium" */ '../views/Premium.vue')
    
  },
  {
    path: '/login',
    name: 'FormLogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
