import Index from '@/views/User/Index.vue'
import Store from '@/views/User/Store.vue'
import Update from '@/views/User/Update.vue'

export default [{
    path: '/:slug/usuarios',
    name: 'user.index',
    component: Index
  },
  {
    path: '/:slug/usuarios/novo',
    name: 'user.store',
    component: Store
  },
  {
    path: '/:slug/usuarios/:product_id',
    name: 'user.update',
    component: Update
  }
]
