<template>
  <div class="opdakwofwo">
    <div class="waopkfawpkfw rounded">
      <div class="d-flex mb-3">
        <h5>Burguer System</h5>
        <div class="ms-auto">
          <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'stores.create' })">
            <span class="fas fa-plus"></span>
            Nova Loja
          </button>
        </div>
      </div>
      <div class="dwaiopfjiowajfwai rounded-top">
        <h6>Minhas Lojas</h6>
      </div>
      <base-button class="rounded" v-for="(store, key) in stores" :key="key" @click="$router.push({ name: 'dashboard.index', params: { slug: store.slug } })">
        {{ store.name }}
      </base-button>
    </div>
  </div>
</template>

<script>
import { request } from '@/js/Api.js';
import BaseButton from './BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
  data: () => {
    return {
      stores: null
    }
  },
  mounted() {
    request().get('stores').then(({ data }) => {
      this.stores = data.stores
    })
  }
}
</script>

<style scoped>

  .opdakwofwo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 80vh;
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