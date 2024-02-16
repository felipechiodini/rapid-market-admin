import { createRouter, createWebHistory } from 'vue-router'
import UserRouters from '@/router/modules/User.js'
import CategoryRouters from '@/router/modules/Category.js'
import CardRouters from '@/router/modules/Card.js'
import WaiterRouters from '@/router/modules/Waiter.js'
import BannerRouters from '@/router/modules/Banner.js'
import ComboRouters from '@/router/modules/Combo.js'
import ProductRouters from '@/router/modules/Product.js'
import GeneralRouters from '@/router/modules/General.js'
import CustomerRouters from '@/router/modules/Customer.js'
import ScheduleRouters from '@/router/modules/Schedule.js'
import OrderRouters from '@/router/modules/Order.js'
import AddressRouters from '@/router/modules/Address.js'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/Authenticated.vue'),
      name: 'index',
      redirect: '/',
      meta: {
        requiresAuth: true
      },
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
        },
        {
          path: '/:slug',
          name: 'store.index',
          component: () => import('@/layout/Store.vue'),
          children: [
            ...GeneralRouters,
            ...CustomerRouters,
            ...CategoryRouters,
            ...UserRouters,
            ...CardRouters,
            ...WaiterRouters,
            ...BannerRouters,
            ...ProductRouters,
            ...ComboRouters,
            ...ScheduleRouters,
            ...OrderRouters,
            ...AddressRouters,
          ]
        }
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

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const user = useUserStore()
    
    if (user.token !== null) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
