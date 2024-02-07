<template>
  <div class="container" style="height: 100vh;">
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
      <div class="bg-white rounded p-5 w-100 shadow" style="max-width: 500px;">
        <div class="text-center text-muted mb-4">
          <h4>Burguer System</h4>
        </div>
        <form @submit.prevent="onSubmit()">
          <input class="form-control" placeholder="Email" type="email" v-model="form.email" />
          <input class="form-control my-2" placeholder="Senha" type="password" v-model="form.password" />
          <base-button class="w-100" type="submit" :loading="submiting">
            Entrar
          </base-button>
          <div v-bind="errors.has('error')">
            {{ errors.get('error') }}
          </div>
        </form>
      </div>
      <router-link class="mt-3" :to="{ name: 'auth.forget-password' }">Esqueci minha senha.</router-link>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/user.js'
import Api from '@/js/api'
import useValidationError from '@/js/useValidationErrors.js'

export default {
  components: {
    BaseButton
  },
  data: () => {
    return {
      form: {
        email: null,
        password: null
      },
      errors: new useValidationError(),
      submiting: false
    }
  },
  methods: {
    ...mapActions(useUserStore, ['setToken', 'setUser', 'setMenus']),
    async onSubmit() {
      this.submiting = true

      try {
        const { data } = await Api.post('auth/login', this.form)
        this.setToken(data.access_token)
        Api.get('auth/me').then(({ data }) => this.setUser(data))
        this.$router.push({ name: 'dashboard.index' })
      } catch (error) {
        this.errors.record(error)
      }

      this.submiting = false
    }
  }
}
</script>
