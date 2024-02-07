<template>
  <div class="wraper">
    <div class="text-center mb-2">
      <i class="fas fa-store"></i>
      <h6>{{ store.name ?? 'dwa' }}</h6>
    </div>
    <ul>
      <li v-for="(menu, key) in menus" :key="key">
        <router-link class="rounded mb-3" :class="{ 'selected': menu.name === $route.name }" :to="{ name: menu.name }" v-if="!menu.childrens">
          <i :class="menu.icon" />
          <span>{{ menu.label }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useStore } from '@/stores/store';

export default {
  props: {
    menus: {
      type: Array
    }
  },
  computed: {
    ...mapState(useStore, ['store'])
  },
  data: () => {
    return {
      open: false
    }
  }
}
</script>

<style scoped>

  .wraper {
    position: fixed;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    z-index: 2;
    width: 250px;
  }

  .wraper ul {
    overflow: auto;
    padding: 0;
    height: 100vh;
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