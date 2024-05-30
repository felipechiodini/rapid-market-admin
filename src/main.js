import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import { Money3Directive } from 'v-money3'
import Modal from './js/Plugins/Modal'
import { request } from '@/js/api.js'

import './assets/main.scss'
import 'primevue/resources/themes/aura-light-green/theme.css'

window.Pusher = Pusher

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
  wsHost: import.meta.env.VITE_PUSHER_HOST,
  wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
  wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
  forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
  enabledTransports: ['ws', 'wss'],
  authorizer: (channel, options) => {
    return {
      authorize: (socketId, callback) => {
        request().post('broadcast/auth', { socket_id: socketId, channel_name: channel.name })
        .then(response => {
          callback(false, response.data)
        })
        .catch(error => {
          callback(true, error)
        })
      }
    }
  },
})

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.directive('money', Money3Directive)
app.use(ToastService)
app.use(Modal)
app.use(PrimeVue)
app.use(pinia)
app.use(router)
app.mount('#app')
