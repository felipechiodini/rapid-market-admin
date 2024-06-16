<template>
  <div class="d-flex">
    <div class="p-4">
      <h5 class="mb-3">Sua conta</h5>
      <div class="d-flex align-items-center">
        <Avatar :label="initialLetters" size="xlarge" shape="circle" />
        <div class="ms-3">
          <strong>Faça o upload da sua foto de perfil</strong>
          <small class="d-block">
            Isto serve para que os membros da sua equipa o reconheçam na RapidEats
          </small>
        </div>
        <button class="btn btn-primary btn-sm ms-auto">
          Fazer upload da foto
        </button>
      </div>
      <hr>
      <div class="d-flex my-4">
        <div>
          <strong class="d-block">
            Nome
          </strong>
          <span>
            Felipe Chiodini Bona
          </span>
        </div>
        <div class="ms-auto">
          <button class="btn btn-primary btn-sm">
            Editar
          </button>
        </div>
      </div>
      <hr>
      <div class="d-flex my-4">
        <div>
          <strong class="d-block">
            Endereço de E-mail
          </strong>
          <span>
            felipechiodinibona@hotmail.com
          </span>
        </div>
        <div class="ms-auto">
          <button class="btn btn-primary btn-sm ms-auto">
            Editar
          </button>
        </div>
      </div>
      <hr>
      <div>
        <strong>Tema</strong>
        <p>Escolha como gostaria de visualizar o RapidEats. 
          Selecione um tema ou sincronize temas com as preferências do seu sistema.</p>
        <div>
        </div>
      </div>
      <hr>
      <BaseButton class="btn btn-danger btn-sm w-25" :loading="logingOut" @click="logout(() => logingOut = false), logingOut = true">
        Sair
      </BaseButton>
    </div>
  </div>
</template>


<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '@/stores/user';
import Avatar from 'primevue/avatar';
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    Avatar,
    BaseButton
  },
  data: () => {
    return {
      logingOut: false
    }
  },
  computed: {
    ...mapState(useUserStore, ['initialLetters'])
  },
  methods: {
    ...mapActions(useUserStore, ['logout'])
  }

}
</script>

<style scoped>

  strong {
    font-weight: 500;
  }

</style>