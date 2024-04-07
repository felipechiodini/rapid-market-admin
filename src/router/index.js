import { createRouter, createWebHistory } from 'vue-router'
import UserRouters from './modules/user.js'
import CategoryRouters from './modules/category.js'
import CardRouters from './modules/card.js'
import WaiterRouters from './modules/waiter.js'
import BannerRouters from './modules/banner.js'
import ComboRouters from './modules/combo.js'
import ProductRouters from './modules/product.js'
import GeneralRouters from './modules/general.js'
import CustomerRouters from './modules/customer.js'
import ScheduleRouters from './modules/Schedule.js'
import OrderRouters from './modules/order.js'
import AddressRouters from './modules/Address.js'
import PaymentRouters from './modules/Payment.js'
import DeliveryRouters from './modules/Delivery.js'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/Authenticated.vue'),
      name: 'index',
      redirect: to => {
        return {
          name: 'stores.choose'
        }
      },
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
          path: '/nova-loja',
          name: 'stores.create',
          component: () => import('@/views/Store/Create.vue'),
        },
        {
          path: '/minha-conta',
          name: 'profile.index',
          redirect: to => {
            return {
              name: 'profile.myaccount'
            }
          },
          component: () => import('@/views/Profile/Index.vue'),
          children: [
            {
              path: '/minha-conta',
              name: 'profile.myaccount',
              component: () => import('@/views/Profile/MyAccount.vue'),
            },
            {
              path: '/minha-conta/assinatura',
              name: 'profile.subscription',
              component: () => import('@/views/Profile/Subscription.vue')
            },
            {
              path: '/minha-conta/usuarios',
              name: 'profile.users',
              component: () => import('@/views/Profile/Users.vue')
            },
            {
              path: '/minha-conta/permissoes',
              name: 'profile.permissions',
              component: () => import('@/views/Profile/Subscription.vue')
            },
            {
              path: '/minha-conta/compras-historico',
              name: 'profile.purchases',
              component: () => import('@/views/Profile/Subscription.vue')
            },
          ]
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
            ...PaymentRouters,
            ...DeliveryRouters
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

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     const user = useUserStore()
    
//     if (user.token !== null) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

export default router
