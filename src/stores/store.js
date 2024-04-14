import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      store: null
    }
  },
  getters: {
    isCompleted() {
      return Object.values(this.store.completed_configured).every(i => i.done === true)
    }
  },
  actions: {
    setStore(store) {
      this.store = store
    }
  }
})
