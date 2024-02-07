<template>
  <button class="btn btn-primary" :disabled="loading === true" v-bind:type="type">
    <slot v-if="loading === false" />
    <loading v-else />
  </button>
</template>

<script>
import Loading from './Loading.vue';

export default {
  name: 'base-button',
  components: {
    Loading
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: null
    }
  }
}
</script>