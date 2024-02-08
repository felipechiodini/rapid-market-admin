import Index from '@/views/Combo/Index.vue'
import Store from '@/views/Combo/Store.vue'
import Update from '@/views/Combo/Update.vue'

export default [{
    path: '/:slug/combos',
    name: 'combo.index',
    component: Index
  },
  {
    path: '/:slug/combos/novo',
    name: 'combo.store',
    component: Store
  },
  {
    path: '/:slug/combos/:combo_id',
    name: 'combo.update',
    component: Update
  }
]
