import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import haveRoleGuard from "./role-guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    beforeEnter: [haveRoleGuard],
    component: () => import('../views/ProductListView.vue')
  },
  {
    path: '/product-detail',
    name: 'product-detail',
    beforeEnter: [haveRoleGuard],
    component: () => import('../views/ProductDetailView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    beforeEnter: [haveRoleGuard],
    component: () => import('../views/ProfileView.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
