<template>
  <div class="wraper" :class="{ 'collapsed': collapsed }">
    <template v-if="loading === false">
      <button class="btn" @click="toggleCollapsed()">
        <span :class="{ 'fas fa-chevron-left float-end': collapsed === false, 'fas fa-chevron-right': collapsed === true }"></span>
      </button>
      <div class="text-center mb-2" v-if="collapsed === false">
        <i class="fas fa-store"></i>
        <h6>{{ store.name }}</h6>
      </div>
      <ul class="m-0">
        <li v-for="(menu, key) in menus" :key="key">
          <router-link class="rounded mb-3" :class="{ 'selected': menu.name === $route.name }" :to="{ name: menu.name }" v-if="!menu.childrens">
            <i :class="menu.icon" />
            <span>{{ menu.label }}</span>
          </router-link>
        </li>
      </ul>
    </template>
    <loading v-else></loading>
  </div>
</template>

<script>
import { request } from '@/js/apiStore'
import Loading from './Loading.vue'

export default {
  components: {
    Loading
  },
  data: () => {
    return {
      collapsed: false,
      store: null,
      menus: null,
      loading: true,
      open: false
    }
  },
  mounted() {
    this.collapsed = localStorage.getItem('menu_collapse') === 'true' ?? false
    this.load()
  },
  methods: {
    async load() {
      this.loading = true
      const { data } = await request(this.$route.params.slug).get('store')
      this.menus = data.sidebar
      this.store = data.store
      this.loading = false
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed
      localStorage.setItem('menu_collapse', this.collapsed)
    }
  }
}
</script>

<style scoped>

  .wraper {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: 250px;
    padding: 1rem;
  }

  .wraper.collapsed {
    width: 100px;
  }

  .wraper ul {
    overflow: auto;
    padding: 0;
    /* height: 100vh; */
  }

  .wraper ul::-webkit-scrollbar {
    display: none;
  }

  .wraper i {
    height: 60px;
    min-width: 70px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
  }

  .wraper li {
    position: relative;
    list-style: none;
  }

  .wraper li a {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    text-decoration: none;
    color: #434343;
  }

  .wraper li a.selected {
    color: var(--primary);
    background-color: rgb(225, 225, 225);
  }

  .wraper li a:hover {
    background: #efefef;
  }

  .wraper li i {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
  
</style>