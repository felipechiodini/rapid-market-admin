import { createRouter, createWebHistory } from 'vue-router'
import Authenticated from '@/layout/Authenticated.vue'
import UserRouters from '@/router/modules/User.js'
import CategoryRouters from '@/router/modules/Category.js'
import CardRouters from '@/router/modules/Card.js'
import WaiterRouters from '@/router/modules/Waiter.js'
import BannerRouters from '@/router/modules/Banner.js'
import ComboRouters from '@/router/modules/Combo.js'
import ProductRouters from '@/router/modules/product.js'
import GeneralRouters from '@/router/modules/General.js'
import CustomerRouters from '@/router/modules/Customer.js'
import ScheduleRouters from '@/router/modules/Schedule.js'
import OrderRouters from '@/router/modules/Order.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/Base.vue'),
      name: 'index',
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'stores.choose',
          component: () => import('@/views/Store/Index.vue'),
        },
        {
          path: '/perfil',
          name: 'profile.index',
          component: () => import('@/views/Profile/Index.vue')
        }
      ]
    },
    {
      path: '/:slug',
      name: 'store.index',
      component: Authenticated,
      children: [
        ...GeneralRouters,
        ...CustomerRouters,
        ...CategoryRouters,
        ...UserRouters,
        ...CardRouters,
        ...WaiterRouters,
        ...BannerRouters,
        // ...PhotoRouters,
        ...ProductRouters,
        ...ComboRouters,
        ...ScheduleRouters,
        ...OrderRouters
      ]
    },
    {
      path: '/login',
      name: 'auth.login',
      component: () => import('@/views/Auth/Login.vue')
    },
    {
      path: '/redefinir/:token',
      name: 'auth.password-reset',
      component: () => import('@/views/Auth/RedefinirSenha.vue')
    },
    {
      path: '/esqueci-minha-senha',
      name: 'auth.forget-password',
      component: () => import('@/views/Auth/ForgetPassword.vue')
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
