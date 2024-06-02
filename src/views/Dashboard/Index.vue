<template>
  <BaseIndex v-if="isCompleted === false" title="Complete o cadastro da loja">
    <div class="d-flex align-items-center p-3 gap-3" v-for="(requirement, key) in store.completed_configured" :key="key">
      <span class="fas fa-lock"></span>
      <a @click.prevent="goToRequirement(requirement)"
        :class="{ 'clickable': requirement.done === false, 'text-decoration-line-through': requirement.done === true }">
        {{ requirement.name }}
      </a>
    </div>
  </BaseIndex>
  <BaseIndex v-else title="Dashboard">
  </BaseIndex>
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
          const ctx = document.getElementById('myChart')
      
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
    },
    goToRequirement(requirement) {
      if (requirement.done === true) return

      this.$router.push({
        name: requirement.router_name,
        params: {
          slug: this.$route.params.slug
        }
      })
    }
  }
  
}
</script>