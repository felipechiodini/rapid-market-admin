<template>
  <div>
    <base-store title="Editar Endereço da Loja" :request="onSubmit">
      <div class="row mt-4">
        <div class="col-6">
          <label for="address-cep">Cep</label>
          <input class="form-control" id="address-cep" v-model="address.cep" type="text">
        </div>
        <div class="col-6">
          <label for="address-street">Rua</label>
          <input class="form-control" id="address-street" v-model="address.street" type="text">
        </div>
        <div class="col-6">
          <label for="address-number">Número</label>
          <input class="form-control" id="address-number" v-model="address.number" type="text">
        </div>
        <div class="col-6">
          <label for="address-neighborhood">Bairro</label>
          <input class="form-control" id="address-neighborhood" v-model="address.neighborhood" type="text">
        </div>
        <div class="col-6">
          <label for="address-complement">Complemento</label>
          <input class="form-control" id="address-complement" v-model="address.complement" type="text">
        </div>
        <div class="col-6">
          <label for="address-city">Cidade</label>
          <input class="form-control" id="address-city" v-model="address.city" type="text">
        </div>
        <div class="col-6">
          <label for="address-state">Estado</label>
          <input class="form-control" id="address-state" v-model="address.state" type="text">
        </div>
      </div>
    </base-store>
  </div>
</template>

<script>
import BaseStore from '@/components/BaseStore.vue';
import { requesFromStore } from '@/js/Api.js';

export default {
  components: {
    BaseStore
  },
  data: () => {
    return {
      address: {
        cep: null,
        street: null,
        number: null,
        neighborhood: null,
        complement: null,
        city: null,
        state: null,
      }
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      requesFromStore(this.$route.params.slug)
        .get('address')
        .then(({ data }) => {
          this.address = data.address
        })
    },
    onSubmit() {
      requesFromStore(this.$route.params.slug)
        .post('address', this.address)
    }
  }
}
</script>