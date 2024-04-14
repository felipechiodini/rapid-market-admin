<template>
  <form @submit.prevent="onSubmit">
    <div class="row">
      <div class="col-6">
        <label for="category-name">Nome</label>
        <input v-model="form.name" class="form-control" id="category-name" type="text">
      </div>
    </div>
    <button class="btn btn-primary btn-sm" type="submit">
      Criar
    </button>
  </form>
</template>

<script>
import { requesFromStore } from '@/js/api.js'
export default {
  props: {
    request: {

    }
  },
  data: () => {
    return {
      form: {
        name: null
      }
    }
  },
  methods: {
    onSubmit() {
      this.requesFromStore(this.$route.params.slug)
        .then()

      this.request()
        .append({teste: 'dwadw'})
        .then(({ data }) => {
        })
    }
  }

}
</script>