<template>
  <BaseIndex title="Dados do Estabelecimento">
    <div class="d-flex gap-3">
      <div>
        <label for="nome">Nome</label>
        <input v-model="store.name" id="nome" class="form-control">
      </div>
      <div>
        <label for="slug">Identificador</label>
        <input readonly v-model="store.slug" id="slug" class="form-control">
      </div>
    </div>
  </BaseIndex>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import { useStore } from '@/stores/store'
import { mapState } from 'pinia'

export default {
  components: {
    BaseIndex
  },
  computed: {
    ...mapState(useStore, ['store'])
  }
}

</script>