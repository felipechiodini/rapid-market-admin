<template>
  <div>
    <base-update title="Editar Categoria" request="category">
      <template #buttons>
        <button class="btn btn-sm btn-primary">
          Nova Categoria
        </button>
      </template>
      <div class="row">
        <div class="col-12">
          <label for="category-name">Nome</label>
          <input class="form-control" type="text" id="category-name">
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
  }

}
</script>