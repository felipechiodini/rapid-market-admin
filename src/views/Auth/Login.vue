<template>
  <TemplateLogin>
    <div class="d-flex flex-column justify-content-center h-100 w-50 mx-5">
      <div class="w-75">
        <h5>Rapideats</h5>
        <h1>Login</h1>
        <p>Acesse sua conta para gerenciar sua loja.</p>
        <form class="d-flex flex-column" @submit.prevent="onSubmit()">
          <label for="login-email">Email</label>
          <BaseInput required id="login-email" type="email" v-model="form.email" />
          <label for="login-password" class="mt-2">Senha</label>
          <BaseInput required id="login-password" type="password" v-model="form.password" />
          <RouterLink class="mt-1" :to="{ name: 'auth.password-recovery' }">
            Esqueci minha senha
          </RouterLink>
          <SubmitButton class="btn btn-primary" type="submit" :loading="submiting">
            Entrar
          </SubmitButton>
          <div v-bind="errors.has('error')">
            {{ errors.get('error') }}
          </div>
        </form>
      </div>
      <div class="rounded-4 mt-5 d-flex align-items-center">
        <span style="font-size: .9rem;">
          Ainda não administra seu delivery com a Rapideats?
        </span>
        <button class="btn btn-transparent start-now">
          Começar agora
        </button>
      </div>
    </div>
  </TemplateLogin>
</template>

<script>
import TemplateLogin from './Components/TemplateLogin.vue'
import BaseInput from './Components/BaseInput.vue'
import SubmitButton from './Components/SubmitButton.vue'
import BaseButton from '@/components/BaseButton.vue'
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/user.js'
import { request } from '@/js/api.js'
import useValidationError from '@/js/useValidationErrors.js'

export default {
  components: {
    TemplateLogin,
    SubmitButton,
    BaseInput,
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
