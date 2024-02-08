import Index from '@/views/Card/Index.vue'
import Store from '@/views/Card/Store.vue'
import Update from '@/views/Card/Update.vue'

export default [{
    path: '/:slug/comandas',
    name: 'card.index',
    component: Index
  },
  {
    path: '/:slug/comandas/novo',
    name: 'card.store',
    component: Store
  },
  {
    path: '/:slug/comandas/:card_id',
    name: 'card.update',
    component: Update
  }
]
