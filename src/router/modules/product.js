import Index from '@/views/Product/Index.vue'
import Store from '@/views/Product/Store.vue'
import Update from '@/views/Product/Update.vue'

export default [{
    path: '/:slug/produtos',
    name: 'product.index',
    component: Index
  },
  {
    path: '/:slug/produtos/novo',
    name: 'product.store',
    component: Store
  },
  {
    path: '/:slug/produto/:product_id/editar',
    name: 'product.update',
    component: Update
  }
]
