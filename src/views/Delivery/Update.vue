<template>
  <BaseIndex title="Editar Entrega">
    <div>
      <div class="col-12 col-lg-6">
        <label for="customer-name">Nome</label>
        <input v-model="form.name" class="form-control" type="text" id="customer-name">
      </div>
      <div class="col-12 col-lg-6">
        <label for="customer-cellphone">Telefone</label>
        <input v-model="form.cellphone" class="form-control" type="text" id="customer-cellphone">
      </div>
    </div>
  </BaseIndex>
</template>

<script>
export default {
  components: {
  },
  data: () => {
    return {
      form: {
        name: null,
        cellphone: null
      }
    }
  },

}
</script>