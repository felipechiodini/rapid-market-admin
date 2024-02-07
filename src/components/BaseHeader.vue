<template>
  <header>
    <div class="d-flex ms-auto">
      <button class="icon-bell text-muted me-2">
        <i class="fa-regular fa-bell"></i>
      </button>
      <button class="falçwojfawjifw" @click="dropdownOpened = !dropdownOpened">
        <span>{{ initialLetters }}</span>
      </button>
      <drop-down-profile v-model="dropdownOpened" />
    </div>
  </header>
</template>

<script>
import { mapState } from 'pinia';
import { useUserStore } from '@/stores/user'
import DropDownProfile from './DropDownProfile.vue';

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
    ...mapState(useUserStore, ['user']),
    initialLetters() {
      const firstLetters = this.user.name.split(' ').map(i => i.charAt(0))
      return firstLetters[0] + firstLetters.pop()
    }
  }
}
</script>

<style scoped>

  header {
    position: fixed;
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 3px #e3e3e3;
    border-bottom: 1px solid #eaeaea;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    z-index: 3;
  }

  header button {
    background-color: transparent;
    border: none;
  }

  .falçwojfawjifw {
    margin-right: 1rem;
    border: none;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    background-color: #000;
    color: #fff;
  }

  .icon-bell {
    font-size: 1.2rem;
  }

</style>