<template>
  <header>
    <button v-if="showButton" class="btn btn-sm text-primary ms-2" @click="$router.push({ name: 'stores.choose' })">
      <i class="fas fa-chevron-left"></i>
    </button>
    <div class="d-flex ms-auto">
      <button class="icon-bell text-muted me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
        <i class="fa-regular fa-bell"></i>
      </button>
      <button class="falçwojfawjifw" @click="$router.push({ name: 'profile.index' })">
        <span>{{ initialLetters }}</span>
      </button>
    </div>
  </header>
</template>

<script>
import { mapState } from 'pinia';
import { useUserStore } from '@/stores/user'

export default {
  computed: {
    ...mapState(useUserStore, ['user']),
    initialLetters() {
      const firstLetters = this.user.name.split(' ').map(i => i.charAt(0))
      return firstLetters[0] + firstLetters.pop()
    },
    showButton() {
      return this.$route.name !== 'stores.choose'
    }
  }
}
</script>

<style scoped>

  header {
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 3px #e3e3e3;
    border-bottom: 1px solid #eaeaea;
    top: 0;
    left: 0;
    height: 8vh;
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