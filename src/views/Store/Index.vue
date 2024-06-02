<template>
  <div class="opdakwofwo">
    <div class="waopkfawpkfw">
      <div class="d-flex mb-3">
        <div class="ms-auto">
          <button class="btn btn-primary" @click="$router.push({ name: 'stores.create' })">
            <span class="fas fa-store"></span>
            Nova Loja
          </button>
        </div>
      </div>
      <div class="rounded overflow-hidden" style="width: 500px;">
        <div class="p-3 bg-primary">
          <h6 class="m-0 text-white">Minhas Lojas</h6>
        </div>
        <template v-if="loadingStores === false">
          <StoreButton v-for="(store, key) in stores" :key="key" @click="goTo(store)">
            {{ store.name }}
          </StoreButton>
        </template>
        <div class="d-flex justify-content-center mt-5" v-else>
          <Loading />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from '@/js/api.js'
import StoreButton from './StoreButton.vue'
import Loading from '@/components/Loading.vue'

export default {
  components: {
    StoreButton,
    Loading
  },
  data: () => {
    return {
      stores: [],
      loadingStores: true
    }
  },
  mounted() {
    this.loadingStores = true
    request()
      .get('stores')
      .then(({ data }) => this.stores = data.stores)
      .finally(() => this.loadingStores = false)
  },
  methods: {
    goTo(store) {
      this.$router.push({
        name: 'dashboard.index',
        params: { slug: store.slug }
      })
    }
  }
}
</script>

<style scoped>

  .opdakwofwo {
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
  }

  .waopkfawpkfw {
    margin-top: 1rem;
  }

</style>