<template>
  <div class="d-flex flex-column gap-2 justify-content-center align-items-center mb-3">
    <h6 class="m-0">{{ store.name }}</h6>
    <div class="p-3 rounded w-100 custom">
      <span class="fas fa-circle me-2" :class="translate.class"></span>
      <span>{{ translate.label }}</span>
      <span v-if="store.status.is_open === false">
        {{ store.status.open_in }}
      </span>
    </div>
    <div class="dwopajoaw">
      Loajsdpwadw

      <div>
        
      </div>
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

  .dwopajoaw {
    display: none;
    border: 1px solid #ccc;
    padding: 1rem;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    position: absolute;
    left: 220px;
    top: 100px;
    height: 100px;
  }

  .custom:hover + .dwopajoaw {
    display: block !important;
  }

</style>