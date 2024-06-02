import Dashboard from '@/views/Dashboard/Index.vue'
import Store from '@/views/Store/Show.vue'
import Configuration from '@/views/Configuration/Index.vue'

export default [{
    path: '/:slug',
    name: 'dashboard.index',
    component: Dashboard
  },
  {
    path: '/:slug/loja',
    name: 'store.show',
    component: Store
  },
  {
    path: '/:slug/configuracoes',
    name: 'configuration.index',
    component: Configuration
  }
]
