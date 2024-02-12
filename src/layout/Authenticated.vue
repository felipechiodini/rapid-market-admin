<template>
  <div>
    <notifications />
    <base-header />
    <notifications-bar />
    <RouterView />
  </div>
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