<template>
  <input class="form-control" type="text" :value="modelValue" @input="e => $emit('update:modelValue', e.target.value)">
</template>

<script>
export default {
  props: {
    modelValue: {

    }
  }
}
</script>

<style scoped>

  input {
    height: 50px;
    padding: 1rem;
  }

</style>