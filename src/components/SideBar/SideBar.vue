<template>
  <div class="sidebar d-none d-md-flex" :class="{ 'collapsed': collapsed }">
    <template v-if="loading === false && store">
      <StoreCard v-if="collapsed === false" />
      <ul class="m-0">
        <li v-for="(menu, key) in sidebar" :key="key">
          <RouterLink class="rounded p-1" :class="{ 'selected': menu.name === $route.name }" :to="{ name: menu.name }" v-if="!menu.childrens">
            <span class="icon" :class="menu.icon" />
            <span>{{ menu.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </template>
    <div class="d-flex justify-content-center align-items-center h-100" v-else>
      <loading />
    </div>
  </div>
</template>

<script>
import { requesFromStore } from '@/js/api.js'
import Loading from '@/components/Loading.vue' 
import StoreCard from './StoreCard.vue'
import { Popover } from 'bootstrap'
import { mapState } from 'pinia'
import { useStore } from '@/stores/store'

export default {
  components: {
    Loading,
    StoreCard
  },
  data: () => {
    return {
      collapsed: false,
      sidebar: null,
      loading: true
    }
  },
  computed: {
    ...mapState(useStore, ['store'])
  },
  mounted() {
    this.collapsed = localStorage.getItem('menu_collapse') === 'true' ?? false
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      requesFromStore()
        .get('sidebar')
        .then(({ data }) => this.sidebar = data.sidebar)
        .finally(() => this.loading = false)
      
      this.$nextTick(() => {
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        popoverTriggerList.map(popoverTriggerEl => new Popover(popoverTriggerEl, {
          title: 'Horários',
          content: '<strong>Teste</strong>',
          trigger: 'hover',
          delay: 200,
          html: true
        }))
      })
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed
      localStorage.setItem('menu_collapse', this.collapsed)
    }
  }
}
</script>

<style scoped>

  .sidebar {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: 250px;
    padding: 1rem;
  }

  .sidebar.collapsed {
    width: 100px;
  }

  .sidebar ul {
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0;
  }

  .sidebar ul::-webkit-scrollbar {
    display: none;
  }

  .sidebar .icon {
    font-size: 1rem;
    width: 35px;
    margin: 5px;
  }

  .sidebar li {
    position: relative;
    list-style: none;
  }

  .sidebar li a {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    text-decoration: none;
    color: #434343;
  }

  .sidebar li a.selected {
    color: var(--primary);
    background-color: rgb(225, 225, 225);
  }

  .sidebar li a:hover {
    background: #efefef;
  }

  .sidebar li i {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
  
</style>