<template>
  <form @submit.prevent="onSubmit()" class="border p-3 rounded mt-3">
    <slot></slot>
    <div class="d-flex gap-2 mt-2">
      <BaseButton type="button" @click="$router.back()" class="btn btn-danger btn-sm ms-auto">
        Cancelar
      </BaseButton>
      <BaseButton :loading="isLoading" class="btn btn-primary btn-sm" type="submit">
        Salvar
      </BaseButton>
    </div>
  </form>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import Loading from '@/js/Mixins/Loading'

export default {
  components: {
    BaseButton
  },
  mixins: [Loading],
  props: {
    request: {
      required: true
    },
    onSuccess: {
      default: null
    }
  },
  methods: {
    onSubmit() {
      this.setLoading(true)
      this.request()
        .then((response) => {
          if (this.onSuccess !== null) this.onSuccess(response)
        })
        .finally(() => this.setLoading(false))
    }
  }
}

</script>