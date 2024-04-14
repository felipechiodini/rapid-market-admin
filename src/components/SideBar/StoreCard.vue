<template>
  <div data-bs-toggle="popover" class="d-flex justify-content-center align-items-center mb-3">
    <div class="fawopfpwoajfwafwa">
      <h6 class="m-0">{{ store.name }}</h6>
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
import { useStore } from '@/stores/store';
import { mapState } from 'pinia';

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

  .fawopfpwoajfwafwa {
    font-size: .7rem;
    display: flex;
    align-items: center;
    gap: 3px;
    flex-direction: column;
  }

</style>