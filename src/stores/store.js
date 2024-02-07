import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('counter', () => {

  const store = ref({})

  function setStore(store) {
    store.value = store
  }

  return { store, setStore }
})
