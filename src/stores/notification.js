import { defineStore } from 'pinia'
import { request } from '@/js/api.js'

export const useNotificationStore = defineStore('notification', {
  state: () => {
    return {
      page: null
    }
  },
  actions: {
    load(page = 1) {
      request()
        .get('notification', { params: { page }})
        .then(({ data }) => {
          this.page = data.page
        })
    }
  }
})
