import Index from '@/views/Address/Index.vue'
import Update from '@/views/Address/Update.vue'

export default [
  {
    path: '/:slug/endereco-loja',
    name: 'address.index',
    component: Index
  },
  {
    path: '/:slug/endereco-loja/editar',
    name: 'address.update',
    component: Update
  }
]
