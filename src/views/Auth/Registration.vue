<template>
  <TemplateLogin>
    <div class="d-flex flex-column justify-content-center h-100 px-4">
      <img width="150px" src="/logo.png">
      <h1>Cadastre-se</h1>
      <p>Crei sua conta grátis e começe seu delivery com a RapidEats.</p>
      <form class="d-flex flex-column" @submit.prevent="onSubmit">
        <label for="nome">Nome</label>
        <input class="form-control" type="text" required id="nome" v-model="form.name" />
        <label for="login-cellphone" class="mt-2">Celular</label>
        <input class="form-control" required id="login-cellphone" type="tel" v-model="form.cellphone" />
        <BaseError message="Informe o nome" />
        <label for="login-email">Email</label>
        <input class="form-control" required id="login-email" type="email" v-model="form.email" />
        <BaseError message="Informe o email" />
        <label for="login-password" class="mt-2">Senha</label>
        <input class="form-control" required id="login-password" type="password" v-model="form.password" />
        <BaseError message="Informe a senha" />
        <SubmitButton class="btn btn-primary w-100" type="submit" :loading="submiting">
          Criar minha conta
        </SubmitButton>
      </form>
      <div class="d-flex flex-wrap align-items-end mt-5 gap-2">
        <span style="font-size: .9rem;">
          Já possuí uma conta?
        </span>
        <RouterLink :to="{ name: 'auth.login' }">
          Login
        </RouterLink>
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
import BaseError from '@/components/BaseError.vue'
import { freeTest } from '@/js/Links'

export default {
  components: {
    TemplateLogin,
    SubmitButton,
    BaseInput,
    BaseButton,
    BaseError
  },
  data: () => {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        cellphone: null
      },
      error: null,
      submiting: false,
    }
  },
  methods: {
    ...mapActions(useUserStore, ['setToken', 'setUser', 'setMenus']),
    async onSubmit(t) {
      this.submiting = true

      const token = await grecaptcha.execute(import.meta.env.VITE_RECAPTHCA_KEY, { action: 'submit' })

      try {
        await request().post('user', {
          ...this.form,
          recaptcha_token: token
        })

        let { data } = await request().post('auth/login', { 
          email: this.form.email,
          password: this.form.password
        })

        this.setToken(data.access_token)

        const response = await request().get('auth/me')
        this.setUser(response.data)

        this.$router.push({ name: 'stores.choose' })
      } catch (error) {
        this.error = error.response.data.message
      }

      this.submiting = false
    }
  }
}
</script>
