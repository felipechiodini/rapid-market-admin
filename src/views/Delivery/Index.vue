<template>
  <BaseIndex title="Tipos de Entrega" subtitle="Configure informações sobre entrega e retirada">
    <table class="table border">
      <thead>
        <tr>
          <th>Ativo</th>
          <th>Nome</th>
          <th>Tempo de Entrega</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(delivery, key) in deliveries" :key="key">
          <td>{{ yesNoLabel(delivery.active) }}</td>
          <td>{{ delivery.name }}</td>
          <td>{{ delivery.minutes ?? '-' }}</td>
          <td>
            <RouterLink :to="{ name: 'delivery.update', params: { type: delivery.type }}">
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
import YesNoLabel from '@/js/Mixins/YesNoLabel.js'
import { requesFromStore } from '@/js/api.js'

export default {
  components: {
    BaseIndex
  },
  mixins: [YesNoLabel],
  data: () => {
    return {
      deliveries: []
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      requesFromStore()
        .get('delivery')
        .then(({ data }) => {
          this.deliveries = data.deliveries
        })
    }
  }
}
</script>