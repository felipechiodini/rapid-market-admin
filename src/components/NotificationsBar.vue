<template>
  <div class="offcanvas offcanvas-end overflow-y-auto" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Notificações</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="daowjfoawpfjawo p-3" v-for="(notification, key) in notifications" :key="key">
      <div class=" justify-content-between">
        <h6 class="m-0">{{ notification.title }}</h6>
        <p class="m-0" v-html="notification.content"></p>
      </div>
      <div>
        <span v-if="notification.read === false" class="fas fa-circle text-primary"></span>
      </div>
    </div>
    <div class="m-3 text-center">
      <BaseButton :loading="loading" class="btn btn-primary btn-sm w-100" @click="load()" v-if="hasMoreNotifications">
        Carregar mais...
      </BaseButton>
      <small v-else>
        Você não possui mais notificações
      </small>
    </div>
  </div>
</template>

<script>
import { useNotificationStore } from '@/stores/notification'
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '@/stores/user'
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    BaseButton
  },
  data: () => {
    return {
      //
    }
  },
  mounted() {
    this.load()

    window.Echo.private(`notifications.${this.user.id}`)
      .listen('.notification', (e) => {
        const audio = new Audio('/toastnotification.mp3')
        audio.play()
        this.$toast.add({ summary: e.userNotification.title, detail: e.userNotification.content, life: 3000 });
        this.push(e.userNotification)
      })
  },
  computed: {
    ...mapState(useUserStore, ['user']),
    ...mapState(useNotificationStore, ['notifications', 'hasMoreNotifications', 'loading'])
  },
  methods: {
    ...mapActions(useNotificationStore, ['load', 'push']),
  }
}
</script>

<style>

.daowjfoawpfjawo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ccc;
}

.daowjfoawpfjawo:last-child {
  border-bottom: 1px solid #ccc;
}

</style>