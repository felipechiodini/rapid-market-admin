<template>
  <div style="height: 100vh;">
    <div class="d-flex h-100">
      <img src="/owner.png" class="shadow-lg rounded-end-4" alt="owner rapideats sistem" style="height: 100%; width: 50%; object-fit: cover;">
      <div class="d-flex flex-column justify-content-center align-items-center h-100 w-50">
        <div class="w-75 ">
          <h5>Rapid Eats</h5>
          <h3>Entrar</h3>
          <p>Acesse sua conta para gerenciar sua loja.</p>
          <form class="d-flex flex-column" @submit.prevent="onSubmit()">
            <input required class="form-control" placeholder="Email" type="email" v-model="form.email" />
            <input required class="form-control my-2" placeholder="Senha" type="password" v-model="form.password" />
            <RouterLink class="mt-3" :to="{ name: 'auth.forget-password' }">
              Esqueci minha senha.
            </RouterLink>
            <BaseButton style="padding: 1rem; border-radius: 50px; width: 250px; margin-top: 1rem;" type="submit" :loading="submiting">
              Entrar
            </BaseButton>
            <div v-bind="errors.has('error')">
              {{ errors.get('error') }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/user.js'
import { request } from '@/js/api.js'
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
        const { data } = await request().post('auth/login', this.form)
        this.setToken(data.access_token)
        request().get('auth/me').then(({ data }) => this.setUser(data))
        this.$router.push({ name: 'stores.choose' })
      } catch (error) {
        this.errors.record(error)
      }

      this.submiting = false
    }
  }
}
</script>
