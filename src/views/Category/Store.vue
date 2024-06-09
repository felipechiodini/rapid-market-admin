<template>
  <BaseIndex title="Nova Categoria">
    <BaseForm :request="request" :onSuccess="({ data }) => $router.push({ name: 'category.update', params: { category_id: data.category.id } })">
      <div class="row">
        <div class="col-12">
          <label for="category-name">Nome da Categoria</label>
          <input class="form-control" required v-model="form.name" id="category-name" type="text">
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