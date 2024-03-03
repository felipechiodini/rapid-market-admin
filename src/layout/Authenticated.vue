<template>
  <BaseHeader />
  <NotificationsBar />
  <RouterView />
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