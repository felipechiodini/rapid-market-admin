import Index from '@/views/Category/Index.vue'
import Store from '@/views/Category/Store.vue'
import Update from '@/views/Category/Update.vue'

export default [{
    path: '/:slug/categorias',
    name: 'category.index',
    component: Index
  },
  {
    path: '/:slug/categorias/novo',
    name: 'category.store',
    component: Store
  },
  {
    path: '/:slug/categorias/:category_id',
    name: 'category.update',
    component: Update
  }
]
