import Dashboard from '@/views/Dashboard/Index.vue'
import Configuration from '@/views/Configuration/Index.vue'

export default [{
    path: '/:slug',
    name: 'dashboard.index',
    component: Dashboard
  },
  {
    path: '/:slug/configuracoes',
    name: 'configuration.index',
    component: Configuration
  }
]
