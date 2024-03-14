<template>
  <div class="modal fade" :id="id">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-white">
        <div class="modal-header" v-if="title !== null">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      default: null
    },  
    centered: {
      type: Boolean,
      default: false
    },
  }
}
</script>