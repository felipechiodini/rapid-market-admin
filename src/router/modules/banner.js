import Index from '@/views/Banner/Index.vue'
import Store from '@/views/Banner/Store.vue'
import Update from '@/views/Banner/Update.vue'

export default [{
    path: '/:slug/banners',
    name: 'banner.index',
    component: Index
  },
  {
    path: '/:slug/banners/novo',
    name: 'banner.store',
    component: Store
  },
  {
    path: '/:slug/banners/banner_id',
    name: 'banner.update',
    component: Update
  }
]
