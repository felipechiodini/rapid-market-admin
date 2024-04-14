<template>
  <div v-if="isntLoading">

    <BaseIndex v-if="dashboard" title="Dashboard">
      <div style="width: 400px;">
        <canvas id="myChart"></canvas>
      </div>
    </BaseIndex>
    <BaseIndex v-else-if="store" title="Completar Cadastro da Loja">
      <div class="d-flex align-items-center p-3 gap-3" v-for="(requirement, key) in store.completed_configured" :key="key">
        <span class="fas fa-lock"></span>
        <span :class="{ 'text-decoration-line-through': requirement.done === true }">{{ requirement.name }}</span>
      </div>
    </BaseIndex>
  </div>
  <div v-else>
    carregando...
  </div>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import { requesFromStore } from '@/js/api.js'
import { useStore } from '@/stores/store'
import Chart from 'chart.js/auto'
import { mapState } from 'pinia'
import { nextTick } from 'vue'
import Loading from '@/js/Mixins/Loading'

export default {
  components: {
    BaseIndex,
  },
  mixins: [Loading],
  data: () => {
    return {
      dashboard: null
    }
  },
  computed: {
    ...mapState(useStore, ['isCompleted', 'store'])
  },
  mounted() {
    if (this.isCompleted) {
      this.load()
    }
  },
  methods: {
    load() {
      requesFromStore(this.$route.params.slug)
        .get('dashboard')
        .then(async ({ data }) => {
          this.dashboard = data.dashboard

          await nextTick()
          const ctx = document.getElementById('myChart');
      
          new Chart(ctx, {
              type: 'line',
              data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                  label: 'Faturamento Diario',
                  data: [12, 19, 3, 5, 2, 3],
                  borderWidth: 1
                }]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }
           });
        })
    }
  }
  
}
</script>