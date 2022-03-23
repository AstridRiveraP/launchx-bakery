import { createRouter, createWebHashHistory } from 'vue-router'
import ClientView from '../views/ClientView.vue'

const routes = [
  {
    path: '/',
    name: 'client',
    component: ClientView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
