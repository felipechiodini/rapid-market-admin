<template>
  <button class="doawkfpwakfowpa">
    <div class="wiafjwa">
      <i class="fas fa-store-alt"></i>
      <h6>
        <slot />
      </h6>
    </div>
  </button>
</template>

<script>
export default {
}
</script>

<style scoped>

  .doawkfpwakfowpa {
    display: flex;
    min-width: 500px;
    border: none;
    padding: 1.3rem;
  }

  .wiafjwa {
    display: flex;
    align-items: center;
  }

  .wiafjwa i {
    font-size: 1.4rem;
    color: var(--primary)
  }

  .wiafjwa h6 {
    margin: 0;
    margin-left: 1rem;
  }

</style>