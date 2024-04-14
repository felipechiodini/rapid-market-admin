<template>
  <form @submit.prevent="onSubmit()">
    <slot></slot>
    <BaseButton :loading="isLoading" class="btn btn-primary btn-sm" type="submit">
      Salvar
    </BaseButton>
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
        .then(response => {
          if (this.onSuccess !== null) {
            this.onSuccess(response)
          }
        })
        .finally(() => this.setLoading(false))
    },
    onSuccess() {
      this.$router.push({
        name: 'dwas'
      })
    }
  }
}

</script>