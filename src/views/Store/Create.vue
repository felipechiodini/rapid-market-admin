<template>
  <div class="container">
    <BaseForm :request="request" :onSuccess="onSuccess" class="d-flex flex-column p-4 w-50">
      <div>
        <label for="">Nome da Loja</label>
        <input class="form-control" required v-model="form.name" type="text">
      </div>
    </BaseForm>
  </div>
</template>

<script>
import { request } from '@/js/api';
import BaseForm from '@/components/BaseForm.vue';

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