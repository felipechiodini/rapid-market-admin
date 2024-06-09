<template>
  <BaseIndex title="Editar Produto">
    <BaseForm :request="request" :onSucess="() => $router.push({ name: 'dwads' })">


      <div class="row">
        <div class="col-12">
          <label for="nome-produto">Nome</label>
          <input class="form-control" id="nome-produto" type="text">
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
        .put(`product/${this.$route.params.product_id}`, this.form)
        .then(({ data }) => {
          
        })
    }
  }
}

</script>