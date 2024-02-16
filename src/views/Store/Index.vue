<template>
  <div class="opdakwofwo">
    <h3>Burguer System</h3>
    <div class="waopkfawpkfw rounded shadow-sm">
      <div class="dwaiopfjiowajfwai rounded-top">
        <h6>Lojas</h6>
      </div>
      <base-button v-for="(store, key) in stores" :key="key" @click="$router.push({ name: 'dashboard.index', params: { slug: store.slug } })">
        {{ store.name }}
      </base-button>
    </div>
    <RouterView />
  </div>
</template>

<script>
import Api from '@/js/api';
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
    Api.get('stores').then(({ data }) => {
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