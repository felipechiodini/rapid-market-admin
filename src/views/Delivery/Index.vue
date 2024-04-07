<template>
  <div>
    <BaseIndex title="Entrega">
      <div class="row mt-4">
        <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Ativo</th>
              <th>Minutos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(delivery, key) in deliveries" :key="key">
              <td>{{ delivery.name ?? '-' }}</td>
              <td>{{ yesNoLabel(delivery.active) ?? '-' }}</td>
              <td>{{ delivery.minutes ?? '-' }}</td>
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
import YesNoLabel from '@/js/Mixins/YesNoLabel.js'
import { requesFromStore } from '@/js/api.js'

export default {
  mixins: [YesNoLabel],
  components: {
    BaseTable,
    BaseIndex
  },
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
      requesFromStore(this.$route.params.slug)
        .get(`delivery`)
        .then(({ data }) => {
          this.deliveries = data.deliveries
        })
    }
  }

}
</script>