<template>
  <div class="d-flex flex-column gap-2 justify-content-center align-items-center mb-3">
    <h6 class="m-0">{{ store.name }}</h6>
    <div class="p-3 rounded w-100 custom">
      <span>
        <span class="fas fa-circle" :class="translate.class"></span>
        {{ translate.label }}
      </span>
      <span v-if="store.status.is_open === false">
        {{ store.status.open_in }}
      </span>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/stores/store'
import { mapState } from 'pinia'

export default {
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
          class: 'text-sucess'
        }
      }

      return values[this.store.status.is_open]
    }
  }
}
</script>

<style scoped>

  .custom {
    background-color: #eaeaea;
    border: 1px solid #ccc;
  }

</style>