<template>
  <div class="container">
    <div class="row justify-content-center">
      <BaseForm class="w-50" :request="request" :onSuccess="onSuccess">
        <div class="col-auto">
          <label for="nome">Nome do Estabelecimento</label>
          <input class="form-control" id="nome" required v-model="form.name" type="text">
        </div>
      </BaseForm>
    </div>
  </div>
</template>

<script>
import { request } from '@/js/api'
import BaseForm from '@/components/BaseForm.vue'

export default {
  components: {
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
      return request()
        .post('store', this.form)
    },
    onSuccess({ data }) {
      this.$router.push({
        name: 'dashboard.index',
        params: {
          slug: data.store.slug
        }
      })
    }
  }
}
</script>