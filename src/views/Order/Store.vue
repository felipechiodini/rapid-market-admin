<template>
  <div>
    <base-store title="Nova Categoria">
      <base-form :request="save" />
    </base-store>
  </div>
</template>

<script>
import BaseStore from '@/components/BaseStore.vue'
import { requesFromStore } from '@/js/Api.js';

export default {
  components: {
    BaseStore,
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