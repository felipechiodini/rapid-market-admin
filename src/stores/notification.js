import { defineStore } from 'pinia'
import { request } from '@/js/api.js'
import { toRaw } from 'vue'

export const useNotificationStore = defineStore('notification', {
  state: () => {
    return {
      page: null,
      loading: false,
      notifications: [],
      currentPage: 0
    }
  },
  getters: {
    notificationsNotReadCount() {
      return this.notifications
        .filter(notification => notification.read === false)
        .length
    },
    hasMoreNotifications() {
      return this.page?.total > this.notifications.length
    }
  },
  actions: {
    load() {
      this.currentPage++
      this.loading = true
      request()
        .get('notification', { params: { page: this.currentPage }})
        .then(({ data }) => {
          this.page = data.page
          this.notifications = toRaw(this.notifications).concat(data.page.data)
        })
        .finally(() => this.loading = false)
    },
    push(notification) {
      console.log(notification)
      this.notifications.unshift(notification)
    }
  }
})
