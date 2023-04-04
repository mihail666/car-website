import { createRouter, createWebHistory } from 'vue-router'
import mainView from '../views/mainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
