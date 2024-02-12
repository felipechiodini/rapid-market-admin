<script setup>
import SideBar from '@/components/SideBar.vue';

</script>

<template>
  <div class="teste">
    <side-bar />
    <router-view style="flex-grow: 1; margin-top: 1rem;" />
  </div>
</template>

<style scoped>

  .teste {
    display: flex;
    height: 92vh;
    overflow: auto;
  }

</style>
