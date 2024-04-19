<template>
  <BaseIndex title="Nova Categoria">
    <BaseForm :request="request">
      <label for="">Cliente</label>
      <input type="text">
    </BaseForm>
  </BaseIndex>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import BaseForm from '@/components/BaseForm.vue'
import { requesFromStore } from '@/js/api.js'

export default {
  components: {
    BaseIndex,
    BaseForm,
  },
  data: () => {
    return {
      form: {
        name: null
      }
    }
  },
  methods: {
    request() {
      return requesFromStore()
        .post('order')
    }
  }

}
</script>