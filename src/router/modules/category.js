import Index from '@/views/Category/Index.vue'
import Store from '@/views/Category/Store.vue'
import Update from '@/views/Category/Update.vue'

export default [{
    path: '/categorias',
    name: 'category.index',
    component: Index
  },
  {
    path: '/categorias/novo',
    name: 'category.store',
    component: Store
  },
  {
    path: '/categorias/:category_id',
    name: 'category.update',
    component: Update
  }
]
