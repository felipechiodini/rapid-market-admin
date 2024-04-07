<template>
  <div>
    <base-store title="Nova Categoria">
      <base-form :request="save" />
    </base-store>
  </div>
</template>

<script>
import BaseStore from '@/components/BaseStore.vue'
import BaseForm from './BaseForm.vue';
import { requesFromStore } from '@/js/api.js';

export default {
  components: {
    BaseStore,
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
    save() {
      return requesFromStore(this.$route.params.slug)
        .post('category')
    }
  }

}
</script>