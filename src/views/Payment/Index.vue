<template>
  <BaseIndex title="Tipos de Pagamentos" subtitle="Controle os tipos de pagamentos aceitos por seu estabelecimento">
    <table class="table border">
      <thead>
        <tr>
          <th>Ativo</th>
          <th>Nome</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(payment, key) in payments" :key="key">
          <td>{{ yesNoLabel(payment.active) }}</td>
          <td>{{ payment.name }}</td>
          <td>
            <RouterLink :to="{ name: 'payment.update', params: { type: payment.type }}">
              Editar
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </BaseIndex>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import { requesFromStore } from '@/js/api.js'
import YesNoLabel from '@/js/Mixins/YesNoLabel.js'

export default {
  components: {
    BaseIndex
  },
  mixins: [YesNoLabel],
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
      requesFromStore()
        .get('payment')
        .then(({ data }) => this.payments = data.payments)
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