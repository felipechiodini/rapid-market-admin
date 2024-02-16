<template>
  <base-index title="Endereço da Loja">
    <div class="m-5">
      <div class="d-flex flex-column">
        <span v-for="(item, key) in address" :key="key">
          {{ item }}
        </span>
        <button class="btn btn-primary w-25 mt-3" @click="$router.push({ name: 'address.update' })">
          Editar
        </button>
      </div>
    </div>
  </base-index>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue';
import { requesFromStore } from '@/js/apiStore';

export default {
  components: {
    BaseIndex
  },
  data: () => {
    return {
      address: null
    }
  },
  mounted() {
    this.fetchAddress()
  },
  methods: {
    fetchAddress() {
      requesFromStore(this.$route.params.slug)
        .get('address')
        .then(({ data }) => {
          this.address = data.address
        })
    }

  }
}
</script>
