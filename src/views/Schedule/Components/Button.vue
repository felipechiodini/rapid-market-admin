<template>
  <button class="btn btn-outline-primary" :class="{ 'bg-primary': selected }">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    selected: {
      default: false
    }
  }
}
</script>
