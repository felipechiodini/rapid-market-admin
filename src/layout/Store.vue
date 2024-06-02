<template>
  <div class="d-flex" v-if="isntLoading && store">
    <SideBar />
    <RouterView class="flex-grow-1 pt-3 overflow-auto" />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar/SideBar.vue'
import { requesFromStore } from '@/js/api'
import { useStore } from '@/stores/store'
import { mapState } from 'pinia'
import Loading from '@/js/Mixins/Loading'

export default {
  components: {
    SideBar
  },
  mixins: [Loading],
  computed: {
    ...mapState(useStore, ['store', 'isCompleted'])
  },
  mounted() {
    this.setLoading(true)
    const store = useStore()
    store.setStore(null)

    requesFromStore()
      .get('store')
      .then(({ data }) => store.setStore(data.store))
      .finally(() => this.setLoading(false))
  }
}
</script>
