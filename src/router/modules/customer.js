import Index from '@/views/Customer/Index.vue'
import Store from '@/views/Customer/Store.vue'
import Update from '@/views/Customer/Update.vue'

export default [{
    path: '/:slug/clientes',
    name: 'customer.index',
    component: Index,
  },
  {
    path: '/:slug/clientes/novo',
    name: 'customer.store',
    component: Store
  },
  {
    path: '/:slug/clientes/:customer_id/editar',
    name: 'customer.update',
    component: Update
  }
]
