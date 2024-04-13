<template>
  <span v-if="message !== null">
    {{ message }}
  </span>
</template>

<script>
export default {
  props: {
    message: {
      default: null
    }
  }
}

</script>

<style scoped>

span {
  font-size: .8rem;
  color: var(--danger)
}

</style>