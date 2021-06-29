import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/note/:id',
    name: 'Note',
    component: () => import(/* webpackChunkName: "Note" */ '../views/Note.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
