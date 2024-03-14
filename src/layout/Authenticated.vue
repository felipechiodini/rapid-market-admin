<template>
  <div class="d-flex flex-column vh-100">
    <BaseHeader />
    <RouterView class="flex-grow-1 overflow-auto" />
  </div>
  <NotificationsBar />
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue';
import NotificationsBar from '@/components/NotificationsBar.vue';

export default {
  components: {
    BaseHeader,
    NotificationsBar
  }
}
</script>