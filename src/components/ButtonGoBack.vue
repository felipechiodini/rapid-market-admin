<template>
  <button class="btn" @click="$router.back()">
    <i class="fas fa-arrow-left"></i>
  </button>
</template>

<script>
export default {
  name: 'button-go-back'
}
</script>