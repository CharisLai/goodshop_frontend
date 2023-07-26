import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/views/Layout.vue'
import AppNavbar from '@/components/app-navbar.vue'
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/app-navbar', component: AppNavbar }
    ]
  }
]


const router = createRouter({

  history: createWebHashHistory(),

  routes
})

export default router