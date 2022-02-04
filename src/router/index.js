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
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import (/* webpackChunkName: "download" */ '../views/Download.vue')
  },
  {
    path: '/suporte',
    name: 'Suporte',
    component: () => import (/* webpackChunkName: "suporrte" */ '../views/Suporte.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
