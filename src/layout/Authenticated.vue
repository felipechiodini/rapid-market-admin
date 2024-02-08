<script setup>
import SideBar from '@/components/SideBar.vue';
import BaseHeader from '@/components/BaseHeader.vue';
import NotificationsBar from '@/components/NotificationsBar.vue';

</script>

<template>
  <base-header />
  <notifications-bar />
  <div class="teste">
    <side-bar />
    <router-view style="flex-grow: 1; margin-top: 1rem;" />
  </div>
</template>

<style scoped>

  .teste {
    display: flex;
    max-height: 92vh;
    overflow: auto;
  }

</style>
