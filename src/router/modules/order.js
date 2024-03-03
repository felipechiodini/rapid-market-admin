import Index from '@/views/Order/Index.vue'
import Store from '@/views/Order/Store.vue'
import Update from '@/views/Order/Update.vue'
import Manager from '@/views/OrderManager/Index.vue'

export default [{
    path: '/:slug/pedidos',
    name: 'order.index',
    component: Index
  },
  {
    path: '/:slug/pedidos/novo',
    name: 'order.store',
    component: Store
  },
  {
    path: '/:slug/pedidos/:category_id',
    name: 'order.update',
    component: Update
  },
  {
    path: '/:slug/gerenciador-de-pedidos',
    name: 'order.manager',
    component: Manager
  }
]