import Index from '@/views/Waiter/Index.vue'
import Store from '@/views/Waiter/Store.vue'
import Update from '@/views/Waiter/Update.vue'

export default [{
    path: '/:slug/garcons',
    name: 'waiter.index',
    component: Index
  },
  {
    path: '/:slug/garcons/novo',
    name: 'waiter.store',
    component: Store
  },
  {
    path: '/:slug/garcons/:waiter_id',
    name: 'waiter.update',
    component: Update
  }
]
