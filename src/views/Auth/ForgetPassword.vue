<template>
  <div class="fpawgjowiag">
    <form class="fpowafgowajwa shadow" @submit.prevent="onSubmit()">
      <button-go-back class="mb-3" />
      <h4 class="mb-2">Redefinir Senha</h4>
      <div class="text-muted">
        <p>Você receberá um email com as instruções para redefinir sua senha.</p>
      </div>
      <label class="form-control-label mb-0" for="email-for-reset">Email</label>
      <input type="email" class="form-control mb-2" id="email-for-reset" v-model="email" />
      <base-button type="submit" class="w-100" :loading="submiting">
        Enviar
      </base-button>
    </form>
  </div>
</template>

<script>
import { request } from '@/js/Api.js'
import BaseButton from '@/components/BaseButton.vue'
import ButtonGoBack from '@/components/ButtonGoBack.vue'

export default {
  components: {
    BaseButton,
    ButtonGoBack
  },
  data: () => {
    return {
      email: null,
      submiting: false
    }
  },
  methods: {
    async onSubmit() {
      this.submiting = true

      try {
        const { data } = await request().post('auth/forgot-password', { email: this.email })
        this.$bvToast.toast(data.message, { title: 'Sucesso', variant: 'success' })
      } catch (error) {
      }

      this.submiting = false
    }
  }
}
</script>

<style scoped>

.fpawgjowiag {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.fpowafgowajwa {
  padding: 3rem;
  border-radius: 5px;
  width: 500px;
  background-color: #ffffff;
}

</style>