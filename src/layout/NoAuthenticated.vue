<template>
  <div class="fpokwafpa">
    <button class="text-white ml-auto" @click="dropdownOpened = !dropdownOpened">
      <img style="border-radius: 50%; border: none; height: 30px; margin-right: 10px;"
        src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png" alt="">
      <span>{{ user.name }}</span>
    </button>
    <button class="text-white">
      <i class="fa-solid fa-gear"></i>
    </button>
    <button class="text-white">
      <i class="fa-regular fa-bell"></i>
    </button>
    <drop-down-profile v-model="dropdownOpened"></drop-down-profile>
  </div>
  <router-view style="flex-grow: 1; padding-top: 90px; margin-left: 50px; margin-bottom: 3rem; " />
</template>

<script>
import DropDownProfile from '../components/DropDownProfile.vue';
import { mapState } from 'pinia';
import { useUserStore } from '@/stores/user'

export default {
  components: {
    DropDownProfile
  },
  data: () => {
    return {
      dropdownOpened: false
    }
  },
  computed: {
    ...mapState(useUserStore, ['user'])
  }
}
</script>

<style scoped>
  .fpokwafpa {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background-color: #3d372e;
    z-index: 3;
  }

  .fpokwafpa button {
    background-color: transparent;
    border: none;
  }
</style>