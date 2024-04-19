<template>
  <button :disabled="loading === true">
    <Loading v-if="loading === true" class="spinner-border-sm text-light" />
    <slot v-else />
  </button>
</template>

<script>
import Loading from '@/components/Loading.vue'

export default {
  components: {
    Loading
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>