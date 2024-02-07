<template>
  <div class="container">
    <div class="d-flex">
      <h4 class="mb-0">{{ title }}</h4>
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
    }
  }
}
</script>