<template>
  <BaseIndex title="Nova Categoria">
    <BaseForm class="row" :request="request">
      <div class="col-3">
        <label for="category-name">Nome</label>
        <input class="form-control" required v-model="form.name" id="category-name" type="text">
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
    BaseForm
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
        .post('category', this.form)
    }
  }

}
</script>