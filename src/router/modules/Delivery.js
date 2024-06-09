import Index from '@/views/Delivery/Index.vue'
import Update from '@/views/Delivery/Update.vue'

export default [{
    path: '/:slug/entrega',
    name: 'delivery.index',
    component: Index
  },
  {
    path: '/:slug/entrega/:type/editar',
    name: 'delivery.update',
    component: Update
  }
]
