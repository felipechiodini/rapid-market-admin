<template>
  <BaseIndex title="Novo Pedido">
    <BaseForm :request="request">
      <div class="row">
        <div class="col-5">
          <label for="">Cliente</label>
          <input type="text">
        </div>
      </div>
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