<template>
  <BaseIndex title="Dados do Estabelecimento">
    <BaseForm class="row flex-column gap-4">
      <div class="col-4">
        <label for="nome">Nome da Loja</label>
        <input v-model="store.name" id="nome" class="form-control">
      </div>
      <div class="col-4">
        <label for="slug">Identificador</label>
        <input disabled v-model="store.slug" id="slug" class="form-control">
      </div>
      <div class="col-4">
        <label for="telefone">Telefone de contato</label>
        <input class="form-control" id="telefone" type="text">
      </div>
      <div class="col-4">
        <label for="pedido-minimo">Pedido mínimo</label>
        <input class="form-control" id="pedido-minimo" type="text">
      </div>
      <div class="col-4">
        <label class="d-block">Logo</label>
        <div class="border text-center rounded p-2">
          <img class="image-logo" @click="selectNewImage()" src="https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/539c3520-a5b1-4c4c-9713-76332c14f50c/202103082320_Z6hz_i.png" alt="">
          <input ref="input-file" type="file" class="d-none">
        </div>
      </div>
    </BaseForm>
  </BaseIndex>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import BaseForm from '@/components/BaseForm.vue'
import { useStore } from '@/stores/store'
import { mapState } from 'pinia'

export default {
  components: {
    BaseIndex,
    BaseForm
  },
  computed: {
    ...mapState(useStore, ['store'])
  },
  methods: {
    selectNewImage() {
      this.$refs['input-file'].click()
    }
  }
}

</script>

<style scoped>

.image-logo {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
}

</style>