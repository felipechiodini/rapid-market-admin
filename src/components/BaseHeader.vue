<template>
  <header>
    <button v-if="showButton" class="btn btn-outline-primary btn-sm" @click="$router.push({ name: 'stores.choose' })">
      <i class="fas fa-chevron-left"></i>
      Lojas
    </button>
    <div class="d-flex gap-3 ms-auto">
      <button class="btn btn-sm">
        <span class="fa-regular fa-circle-question"></span>
        Ajuda
      </button>
      <button class="btn btn-sm position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
        <span class="fa-regular fa-bell"></span>
        <span class="badge-counter" v-if="notificationsNotReadCount > 0">{{ notificationsNotReadCount }}</span>
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
    padding: 10px;
  }

  .falçwojfawjifw {
    border: none;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    background-color: #000;
    color: #fff;
  }

  .fa-regular.fa-bell {
    font-size: 1.2rem;
  }

  .badge-counter {
    border-radius: 5px;
    background-color: var(--primary);
    padding: 0 3px;
    color: #fff;
    font-weight: 500;
    font-size: 10px;
    top: 0;
    position: absolute;
  }

</style>