import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout')
const GoodShop = () => import('@/views/goodshop/index')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: GoodShop }
    ]
  }
]


const router = createRouter({

  history: createWebHashHistory(),

  routes
})

export default router