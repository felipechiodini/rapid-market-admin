import Index from '@/views/Neighborhood/Index.vue'
import Store from '@/views/Neighborhood/Store.vue'
import Update from '@/views/Neighborhood/Update.vue'

export default [{
    path: '/:slug/bairros',
    name: 'neighborhood.index',
    component: Index
  },
  {
    path: '/:slug/bairros/novo',
    name: 'neighborhood.store',
    component: Store
  },
  {
    path: '/:slug/bairros/:neighborhood_id',
    name: 'neighborhood.update',
    component: Update
  }
]
