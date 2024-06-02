<template>
  <BaseIndex title="Cardápio">
    
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
  methods: {
    load() {
      requesFromStore(this.$route.params.slug)
        .get(`payment`)
        .then(({ data }) => {
          this.payments = data.payments
        })
    },
    active(payment) {
      requesFromStore(this.$route.params.slug)
        .post(`payment/${payment.key}/status`, { active: true })
        .then(({ data }) => {
          
        })
    }
  }

}
</script>