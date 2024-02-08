import Index from '@/views/Schedule/Index.vue'
import Store from '@/views/Schedule/Store.vue'
import Update from '@/views/Schedule/Update.vue'

export default [{
    path: '/:slug/horarios',
    name: 'schedule.index',
    component: Index
  },
  {
    path: '/:slug/horarios/novo',
    name: 'schedule.store',
    component: Store
  },
  {
    path: '/:slug/horarios/:schedule_id',
    name: 'schedule.update',
    component: Update
  }
]
