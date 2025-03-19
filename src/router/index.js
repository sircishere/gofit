import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogoutSuccess from '@/views/LogoutSuccess.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue'),
    },
    {
      path: '/questionaire',
      name: 'questionaire',
      component: () => import('../views/QuestionaireView.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignInView.vue')
    },

    { 
      path: '/auth-success',
      component: HomeView,
    },

    { path: '/logout-success',
      component: LogoutSuccess 
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/muscles/:muscle',
      name: 'muscle',
      component : () => import('../views/MuscleView.vue')
    }
  ],
})

export default router
