<script setup>
import Api from '@/js/api';
import router from '@/router';
import { onMounted } from 'vue';
import BaseButton from './BaseButton.vue';

const props = defineProps({
  title: String,
  request: String
})

onMounted(() => {
  console.log('teste')
})

const onSbumit = () => {
  // Api.get(this.request + `/` router)
}

</script>


<template>
  <div class="container">
    <div>
      Products > Create > Edit
    </div>
    <div class="d-flex">
      <h3 class="m-0 mb-3 fw-bolder">{{ title }}</h3>
      <div class="ms-auto">
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary btn-sm" @click="destroy()">
          Remover
        </button>
      </div>
    </div>
    <form @submit.prevent="onSubmit()">
      <div class="bg-white rounded border p-3">
        <slot />
      </div>
      <div class="mt-4">
        <button type="submit" class="btn btn-sm btn-primary me-2">
          Salvar Alterações
        </button>
        <button @click="$router.back()" class="btn btn-sm btn-dark">
          Cancelar
        </button>
      </div>
    </form>

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
