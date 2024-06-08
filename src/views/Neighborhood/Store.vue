<template>
  <BaseIndex title="Novo Bairro">
    <BaseForm :request="request">
      <label for="nome">Nome</label>
      <input class="form-control" v-model="form.name" id="nome" type="text">
      <div>
        <label for="preço">Preço</label>
        <input class="form-control" v-model="form.price" id="preço" type="text">
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
        name: null,
        price: null
      }
    }
  },
  methods: {
    request() {
      return requesFromStore()
        .post('neighborhood', this.form)
    }
  }

}
</script>