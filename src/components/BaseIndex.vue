<template>
  <div class="container">
    <div class="d-flex">
      <div>
        <h4 class="mb-0">{{ title }}</h4>
        <span class="subtitle mt-2" v-if="subtitle">{{ subtitle }}</span>
      </div>
      <div class="ms-auto">
        <slot name="buttons"></slot>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseIndex',
  props: {
    title: {
      type: String
    },
    subtitle: {
      default: null
    }
  }
}
</script>

<style scoped>

.subtitle {
  display: block;
  font-size: .9rem;
  color: #7b7b7b;
}

</style>