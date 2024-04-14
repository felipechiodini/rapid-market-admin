<template>
  <div class="opdakwofwo">
    <div class="waopkfawpkfw rounded">
      <div class="d-flex mb-3">
        <div class="ms-auto">
          <button class="btn btn-primary" @click="$router.push({ name: 'stores.create' })">
            <span class="fas fa-plus"></span>
            Nova Loja
          </button>
        </div>
      </div>
      <template v-if="hasStores">
        <div class="dwaiopfjiowajfwai rounded-top">
          <h6>Minhas Lojas</h6>
        </div>
        <StoreButton v-for="(store, key) in stores" :key="key" @click="$router.push({ name: 'dashboard.index', params: { slug: store.slug } })">
          {{ store.name }}
        </StoreButton>
      </template>
      <template v-else>
        <h6>Cadastre sua primeira loja</h6>
      </template>
    </div>
  </div>
</template>

<script>
import { request } from '@/js/api.js';
import StoreButton from './StoreButton.vue';

export default {
  components: {
    StoreButton,
  },
  data: () => {
    return {
      stores: []
    }
  },
  computed: {
    hasStores() {
      return this.stores.length > 0
    }
  },
  mounted() {
    request()
      .get('stores')
      .then(({ data }) => this.stores = data.stores)
  }
}
</script>

<style scoped>

  .opdakwofwo {
    display: flex;
    margin-top: 4rem;
    flex-direction: column;
    align-items: center;
  }

  .dwaiopfjiowajfwai {
    height: 50px;
    background-color: var(--primary);
    padding: 1rem;
  }
  
  .dwaiopfjiowajfwai h6 {
    color: #fff;
  }


  .waopkfawpkfw {
    margin-top: 1rem;
  }


</style>