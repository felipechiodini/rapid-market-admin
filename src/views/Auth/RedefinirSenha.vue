<template>
  <div class="container" style="height: 100vh;">
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
      <div class="bg-white rounded p-5 w-100 shadow-lg" style="max-width: 500px;">
        <div>
          <input :error="errorMessage" class="input-group-alternative w-100 mb-3" placeholder="Senha"
            type="password" addon-left-icon="ni ni-lock-circle-open" v-model="password">
          <button :disabled="loadingPassword" variant="dark w-100" @click="redefinir()">
            <b-spinner small v-if="loadingPassword"></b-spinner>
            <span v-else>Redefinir Senha</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Api from 'api'

  export default {
    data: () => {
      return {
        password: null,
        invalidToken: false,
        loading: true,
        loadingPassword: false,
        errorMessage: null
      }
    },
    methods: {
      redefinir() {
        this.loadingPassword = true
        Api.post('auth/change-password', {
          password: this.password,
          token: this.$route.params.token
        }).then(({
          data
        }) => {
          this.$bvToast.toast(data.message, {
            title: 'Sucesso',
            variant: 'success'
          })
          this.$router.push('/login')
        }).finally(() => {
          this.loadingPassword = false
        })
      }
    }
  }
</script>