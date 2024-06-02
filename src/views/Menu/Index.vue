<template>
  <BaseIndex title="Cardápio">
    <template #buttons>
      <a :href="cardapiolink" target="_blank" class="btn btn-primary btn-sm">
        Cardápio
        <span class="fa-solid fa-arrow-up-right-from-square"></span>
      </a>
    </template>
  </BaseIndex>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import { requesFromStore } from '@/js/api.js'

export default {
  components: {
    BaseIndex
  },
  data: () => {
    return {
      payments: []
    }
  },
  mounted() {
    this.load()
  },
  computed: {
    cardapiolink() {
      return `${import.meta.env.VITE_ORDER_SITE}/${this.$route.params.slug}`
    }
  },
  methods: {
    
  }

}
</script>