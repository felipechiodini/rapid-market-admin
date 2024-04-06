import { createRouter, createWebHistory } from 'vue-router'
import UserRouters from '/src/router/modules/User.js'
import CategoryRouters from '/src/router/modules/Category.js'
import CardRouters from '/src/router/modules/Card.js'
import WaiterRouters from '/src/router/modules/Waiter.js'
import BannerRouters from '/src/router/modules/Banner.js'
import ComboRouters from '/src/router/modules/Combo.js'
import ProductRouters from '/src/router/modules/Product.js'
import GeneralRouters from '/src/router/modules/General.js'
import CustomerRouters from '/src/router/modules/Customer.js'
import ScheduleRouters from '/src/router/modules/Schedule.js'
import OrderRouters from '/src/router/modules/Order.js'
import AddressRouters from '/src/router/modules/Address.js'
import PaymentRouters from '/src/router/modules/Payment.js'
import DeliveryRouters from '/src/router/modules/Delivery.js'
import { useUserStore } from '/src/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
