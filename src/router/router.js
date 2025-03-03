import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/landing/Home.vue'
import Login from '../pages/auth/Login.vue'
import Register from '../pages/auth/Register.vue'
import Admin from '../pages/landing/Admin.vue'
import TV from '../pages/landing/TV.vue'



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/admin', name: 'Admin', component: Admin },
  { path: '/tv', name: 'TV', component: TV },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router