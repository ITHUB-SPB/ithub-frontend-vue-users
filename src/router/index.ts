import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './HomePage.vue'
import UsersPage from './UsersPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/users', component: UsersPage }
  ],
})

export default router
