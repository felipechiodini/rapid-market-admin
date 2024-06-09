<template>
  <slot v-if="loading === false"/>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'

export default {
  components: {
    Loading
  },
  props: {
    loading: {
      default: false
    }
  }

}

</script>