<template>
  <div>
    <base-update title="Editar Cliente" request="customer">
      <div class="row">
        <div class="col-12 col-lg-6">
          <label for="customer-name">Nome</label>
          <input v-model="form.name" class="form-control" type="text" id="customer-name">
        </div>
        <div class="col-12 col-lg-6">
          <label for="customer-cellphone">Telefone</label>
          <input v-model="form.cellphone" class="form-control" type="text" id="customer-cellphone">
        </div>
      </div>
    </base-update>
  </div>
</template>

<script>
  import BaseUpdate from '@/components/BaseUpdate.vue'
  import BaseTable from '@/components/BaseTable.vue'

  export default {
    components: {
      BaseTable,
      BaseUpdate
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