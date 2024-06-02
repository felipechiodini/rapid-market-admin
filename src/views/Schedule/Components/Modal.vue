<template>
  <div :class="{ 'd-none': modelValue === false }" class="custom-modal">
    <div class="d-flex flex-column bg-white p-3 rounded">
      <div class="d-flex align-items-center mb-3">
        <h6 class="m-0" v-if="title">{{ title }}</h6>
        <button class="btn btn-sm ms-auto" @click="close()">
          <span class="fas fa-times"></span>
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: null
    },
    modelValue: {
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('update:modelValue', false)
    }
  }
}

</script>

<style scoped>

.custom-modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #0000005c;
  z-index: 10;
}

</style>