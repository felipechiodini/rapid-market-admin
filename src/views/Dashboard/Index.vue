<template>
  <div>
    <base-index title="Dashboard">
      <div style="width: 400px;"><canvas id="myChart"></canvas></div>
    </base-index>
  </div>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue';
import Loading from '@/components/Loading.vue';
import { request } from '@/js/apiStore';
import Chart from 'chart.js/auto'

export default {
  components: {
    BaseIndex,
    Loading
  },
  data: () => {
    return {
      dashboard: null
    }
  },
  mounted() {
    this.load()
    this.loadChart()
  },
  methods: {
    load() {
      request(this.$route.params.slug)
        .get('dashboard')
        .then(({ data }) => {
          this.dashboard = data.dashboard
        })
    },


    loadChart(){
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
    }
  }
  
}
</script>