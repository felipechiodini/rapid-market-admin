<template>
  <button :disabled="isLoading">
    <slot v-if="isLoading === false" />
    <Loading class="align-middle" v-else />
  </button>
</template>

<script>
import Loading from './Loading.vue';

export default {
  name: 'base-button',
  components: {
    Loading
  },
  computed: {
    isLoading() {
      return this.loading === true
    }
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>