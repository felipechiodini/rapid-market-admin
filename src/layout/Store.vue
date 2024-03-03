<script setup>
import SideBar from '@/components/SideBar/SideBar.vue'

</script>

<template>
  <div class="faopwjfoawjfawjfjawop">
    <SideBar />
    <RouterView style="flex-grow: 1; margin-top: 1rem;" />
  </div>
</template>

<style scoped>

  .faopwjfoawjfawjfjawop {
    display: flex;
    flex-grow: 1;
    overflow: auto;
  }

</style>
