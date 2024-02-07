<script setup>
import Api from "@/js/api"
import { onMounted, ref } from "vue"
import SideBar from '@/components/SideBar.vue';
import BaseHeader from '@/components/BaseHeader.vue';
import { useRoute } from 'vue-router'
import { useStore } from "@/stores/store";

const menus = ref(null)

onMounted(async () => {
  const route = useRoute()
  const { data } = await Api.get(`${route.params.slug}/store`)
  menus.value = data.sidebar
  
  const store = useStore()
  store.setStore(data.store)
})

</script>

<template>
  <base-header />
  <side-bar :menus="menus" />
  <router-view style="flex-grow: 1; padding-top: 90px; margin-left: 250px; margin-bottom: 3rem; " />
</template>
