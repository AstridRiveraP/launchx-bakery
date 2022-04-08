import { createRouter, createWebHashHistory } from 'vue-router'
import ClientView from '../views/ClientView.vue'
import AdminView from '../views/AdminView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/clientView',
    name: 'client',
    component: ClientView
  },
  {
    path: '/adminView',
    name: 'admin',
    component: AdminView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
