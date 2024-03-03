import { requesFromStore } from '@/js/Api.js'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      name: null,
      slug: null,
      isOpen: null,
    }
  },
  actions: {
    getStore(slug) {
      requesFromStore(slug)
        .then(({ data }) => {
          this.name = data.name
          this.slug = data.slug
          this.isOpen = data.isOpen
        }).catch((err) => {
          
        });
    }
  }
})
