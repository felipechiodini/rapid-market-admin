import Index from '@/views/Payment/Index.vue'
import Update from '@/views/Payment/Update.vue'

export default [{
    path: '/:slug/pagamento',
    name: 'payment.index',
    component: Index
  },
  {
    path: '/:slug/pagamento/:type/editar',
    name: 'payment.update',
    component: Update
  }
]
