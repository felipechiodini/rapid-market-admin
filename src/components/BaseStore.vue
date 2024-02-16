<template>
  <div class="container">
    <h3 class="m-0 mb-3 fw-bolder">{{ title }}</h3>
    <form @submit.prevent="onSubmit()">
      <div class="bg-light rounded border p-3">
        <slot />
      </div>
      <div class="mt-4">
        <button type="submit" class="btn btn-primary me-2">
          <loading v-if="submiting === true"></loading>  
          <span v-else>Salvar</span>  
        </button>
        <button class="btn btn-dark" @click="$router.back()">
          Cancelar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonGoBack from './ButtonGoBack.vue';
import Loading from './Loading.vue';

export default {
  components: {
    ButtonGoBack,
    Loading
  },
  props: {
    title: {
      type: String
    },
    request: {
      required: true
    }
  },
  data: () => {
    return {
      submiting: false
    }
  },
  methods: {
    onSubmit() {
      this.submiting = true
      this.request().then(({ data }) => {
        this.onCreated(data)
      }).catch((err) => {
        console.log(err)
      }).finally(() => {
        this.submiting = false
      })
    }
  }
  
}
</script>