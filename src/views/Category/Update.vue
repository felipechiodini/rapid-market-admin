<template>
  <BaseIndex title="Editar Categoria">
    <BaseForm :request="request">
      <div class="row">
        <div class="col-12">
          <label for="category-name">Nome</label>
          <input class="form-control" v-model="form.name" type="text" id="category-name">
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
        .put(`category/${this.$route.params.category_id}`, this.form)
    }
  }

}
</script>