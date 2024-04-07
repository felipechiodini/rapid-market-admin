<template>
  <div>
    <BaseIndex title="Pagamento">
      <div class="row mt-4">
        <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Ativo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(payment, key) in payments" :key="key">
              <td>{{ payment.name }}</td>
              <td>
                {{ payment.active }}
                <button class="btn btn-sm btn-primary " @click="active(payment)">
                  Ativar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BaseIndex>
  </div>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import BaseTable from '@/components/BaseTable.vue'
import { requesFromStore } from '@/js/api.js'

export default {
  components: {
    BaseTable,
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