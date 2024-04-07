<template>
  <BaseButton class="submit-button">
    <slot></slot>
  </BaseButton>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  components: {
    BaseButton
  }
}

</script>

<style scoped>

.submit-button {
  padding: .7rem;
  border-radius: 50px;
  width: 250px;
  margin-top: 1rem;
  font-size: 1.2rem;
}
</style>