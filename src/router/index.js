import { createRouter, createWebHistory } from 'vue-router'
import Authenticated from '@/layout/Authenticated.vue'
import UserRouters from '@/router/modules/user.js'
import PhotoRouters from '@/router/modules/photo.js'
import CategoryRouters from '@/router/modules/category.js'
import CardRouters from '@/router/modules/card.js'
import WaiterRouters from '@/router/modules/waiter.js'
import BannerRouters from '@/router/modules/banner.js'
import ComboRouters from '@/router/modules/combo.js'
import ProductRouters from '@/router/modules/product.js'
import GeneralRouters from '@/router/modules/general.js'
import CustomerRouters from '@/router/modules/customer.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Store.vue'),
      name: 'stores.choose'
    },
    {
      path: '/:slug',
      name: 'store.index',
      component: Authenticated,
      children: [
        ...GeneralRouters,
        ...CustomerRouters,
        ...UserRouters,
        ...CategoryRouters,
        ...CardRouters,
        ...WaiterRouters,
        ...BannerRouters,
        ...PhotoRouters,
        ...ProductRouters,
        ...ComboRouters,
        // ...OrderRouters,
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
