<template>
  <div class="d-flex">
    <div class="p-4">
      <h5 class="mb-3">A sua conta</h5>
      <div class="d-flex align-items-center">
        <Avatar label="P" size="xlarge" shape="circle" />
        <div class="ms-3">
          <strong>Faça o upload da sua foto de perfil.</strong>
          <small class="d-block">Isto serve para que os membros da sua equipa o reconheçam na Burguer System.</small>
        </div>
        <button class="btn btn-secondary btn-sm ms-auto">
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
          <button class="btn btn-secondary btn-sm ">
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
          <button class="btn btn-secondary btn-sm ms-auto">
            Editar
          </button>
        </div>
      </div>
      <hr>
      
      <div>
        <strong>Tema</strong>
        <p>Escolha como gostaria de visualizar o Burguer System. 
          Selecione um tema ou sincronize temas com as preferências do seu sistema.</p>
        <div>
        </div>
      </div>

      <hr>

      <button class="btn btn-sm btn-danger" @click="logout()">
        Sair
      </button>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import Avatar from 'primevue/avatar';

export default {
  components: {
    Avatar
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