<script setup>
import SideBar from '@/components/SideBar/SideBar.vue'
</script>

<template>
  <div class="d-flex">
    <SideBar />
    <RouterView class="flex-grow-1 pt-3 overflow-auto" />
  </div>
</template>
