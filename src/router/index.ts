import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/company/profile',
      component: () => import('@/components/MainMenu.vue'),
      children: [
        {
          path: '/company/profile',
          name: 'company_profile',
          component: () =>
            import('@/views/company/Profile.vue')
        },
        {
          path: '/company/vacancies',
          name: 'company_vacancies',
          component: () => 
            import('@/views/company/Vacancies.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('@/views/NotFoundPage.vue')
    }
  ]
})

export default router
