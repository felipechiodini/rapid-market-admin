import Index from '@/views/Menu/Index.vue'
// import Store from '@/views/Menu/Store.vue'
// import Update from '@/views/Menu/Update.vue'

export default [{
    path: '/:slug/cardapio',
    name: 'menu.index',
    component: Index
  },
  // {
  //   path: '/:slug/garcons/novo',
  //   name: 'waiter.store',
  //   component: Store
  // },
  // {
  //   path: '/:slug/garcons/:waiter_id',
  //   name: 'waiter.update',
  //   component: Update
  // }
]
