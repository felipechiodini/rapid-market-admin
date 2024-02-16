<template>
  <div class="container">
    <div class="d-flex">
      <h3 class="m-0 mb-3 fw-bolder">{{ title }}</h3>
      <div class="ms-auto">
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary btn-sm" @click="destroy()">
          Remover
        </button>
      </div>
    </div>
    <base-store :request="request">
      
    </base-store>

    <!-- Modal -->
    <div class="modal model-sm fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Deletar</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <base-button type="button" class="btn btn-sm btn-primary">
              Deletar
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseStore from './BaseStore.vue';

export default {
  components: {
    BaseStore
  },
  props: {
    title: {
      type: String,
      required: true
    },
    request: {
      required: true
    }
  },
  methods: {
    onSubmit() {
      this.request().then(({ data }) => {
        console.log(data)
      })
    }
  }
}

</script>