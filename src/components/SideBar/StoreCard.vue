<template>
  <div class="d-flex flex-column gap-2 justify-content-center align-items-center mb-3">
    <h6 class="m-0">{{ store.name }}</h6>
    <div class="p-3 rounded w-100 custom" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-html="true" data-bs-placement="right" data-bd-content="kkkkkkkkkks" data-bs-title="Tooltip <b>dd</b> on left">
      <span class="fas fa-circle me-2" :class="translate.class"></span>
      <span>{{ translate.label }}</span>
      <span v-if="store.status.is_open === false">
        {{ store.status.open_in }}
      </span>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/stores/store'
import { mapState } from 'pinia'
import { Tooltip } from 'bootstrap'

export default {
  mounted() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
  },
  computed: {
    ...mapState(useStore, ['store']),
    translate() {
      const values = {
        false: {
          label: 'Loja Fechada',
          class: 'text-danger'
        },
        true: {
          label: 'Loja Aberta',
          class: 'text-success'
        }
      }

      return values[this.store.status.is_open]
    }
  }
}
</script>

<style scoped>

  .custom {
    font-size: .8rem;
    background-color: #eaeaea;
    border: 1px solid #ccc;
  }

  .custom-tooltip {
    --bs-tooltip-bg: var(--bs-primary);
  }

</style>