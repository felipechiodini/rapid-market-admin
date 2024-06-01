<template>
  <header>
    <button v-if="showButton" class="btn btn-sm text-primary ms-2" @click="$router.push({ name: 'stores.choose' })">
      <i class="fas fa-chevron-left"></i>
    </button>
    <div class="d-flex gap-2 ms-auto">
      <button class="icon-bell text-muted me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
        <i class="fa-regular fa-bell"></i>
        <span class="badge-counter">{{ notificationsNotReadCount }}</span>
      </button>
      <button class="falçwojfawjifw" @click="$router.push({ name: 'profile.index' })">
        <span>{{ initialLetters }}</span>
      </button>
    </div>
  </header>
</template>

<script>
import { mapState } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useNotificationStore } from '@/stores/notification';

export default {
  computed: {
    ...mapState(useUserStore, ['user']),
    ...mapState(useNotificationStore, ['notificationsNotReadCount']),
    initialLetters() {
      try {
        const firstLetters = this.user?.name.split(' ').map(i => i.charAt(0))
        return firstLetters[0] + firstLetters.pop()
      } catch (error) {
        return ''        
      }
    },
    showButton() {
      return this.$route.name !== 'stores.choose'
    }
  },
  methods: {
    toggleTheme() {
      document.createAttribute('data-bs-theme', 'dark')
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
    width: 100%;
    padding: 10px 0;
  }

  header button {
    background-color: transparent;
    border: none;
  }

  .falçwojfawjifw {
    margin-right: .7rem;
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

  .badge-counter {
    border-radius: 5px;
    background-color: var(--primary);
    padding: 0 3px;
    color: #fff;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    font-size: 10px;
    position: absolute
  }

</style>