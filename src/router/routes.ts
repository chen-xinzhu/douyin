import type { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/home/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }
]

export default routes
