<template>
  <div class="d-flex flex-column vh-100">
    <BaseHeader />
    <RouterView class="flex-grow-1 overflow-auto" />
  </div>
  <NotificationsBar />
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import NotificationsBar from '@/components/NotificationsBar.vue'
import { useUserStore } from '@/stores/user'
import { mapState } from 'pinia'

export default {
  components: {
    BaseHeader,
    NotificationsBar
  },
  computed: {
    ...mapState(useUserStore, ['user'])
  },
  mounted() {
    window.Echo.private(`notifications.${this.user.id}`)
      .listen('.notification', (e) => {
        alert(e.message)
      })
  }
}
</script>