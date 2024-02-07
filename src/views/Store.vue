<template>
  <div>
    <button class="btn btn-primary" @click="$router.push({ name: 'store.index', params: { slug: 'plankton' } })">
      Plankton
    </button>
  </div>
</template>