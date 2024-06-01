<template>
  <TemplateLogin>
    <div class="d-flex flex-column justify-content-center h-100 w-50 mx-5">
      <form class="d-flex flex-column" @submit.prevent="onSubmit()">
        <h1>Recuperação de senha</h1>
        <p>Digite seu e-mail e receba instruções para recuperar sua senha.</p>
        <label class="form-control-label" for="email-for-reset">Email</label>
        <BaseInput required type="email" id="email-for-reset" v-model="email" />
        <Message class="my-2 text-primary" v-if="message">{{ message }}</Message>
        <div class="d-flex gap-2">
          <SubmitButton class="btn btn-primary" type="submit" :loading="submiting">
            Enviar
          </SubmitButton>
          <SubmitButton class="btn btn-outline-danger" @click="$router.back()">
            Voltar
          </SubmitButton>
        </div>
      </form>
    </div>
  </TemplateLogin>
</template>

<script>
import TemplateLogin from './Components/TemplateLogin.vue'
import SubmitButton from './Components/SubmitButton.vue'
import BaseInput from './Components/BaseInput.vue'
import { request } from '@/js/api.js'
import BaseButton from '@/components/BaseButton.vue'
import ButtonGoBack from '@/components/ButtonGoBack.vue'
import Message from '@/components/Message.vue'

export default {
  components: {
    TemplateLogin,
    SubmitButton,
    BaseInput,
    BaseButton,
    ButtonGoBack,
    Message
  },
  data: () => {
    return {
      email: null,
      submiting: false,
      message: null
    }
  },
  methods: {
    onSubmit() {
      this.submiting = true
      request()
        .post('auth/forgot-password', { email: this.email })
        .then(({ data }) => this.message = data.message)
        .finally(() => this.submiting = false)
    }
  }
}
</script>
