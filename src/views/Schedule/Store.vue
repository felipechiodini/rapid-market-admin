<template>
  <div>
    <base-store title="Novo Cliente" :request="store" :onCreated="onCreated">
      <div class="row">
        <div class="col-12 col-lg-6">
          <label for="customer-name">Nome</label>
          <input v-model="form.name" class="form-control" type="text" id="customer-name">
        </div>
        <div class="col-12 col-lg-6">
          <label for="customer-document">Documento</label>
          <input v-model="form.document" v-maska data-maska="###.###.###-##" class="form-control" type="text" id="customer-document">
        </div>
        <div class="col-12 col-lg-6">
          <label for="customer-cellphone">Telefone</label>
          <input v-model="form.cellphone" v-maska data-maska="(##) #####-####" class="form-control" type="text" id="customer-cellphone">
        </div>
      </div>
    </base-store>
  </div>
</template>

<script>
import BaseStore from '@/components/BaseStore.vue'
import { vMaska } from "maska"
import { requesFromStore } from '@/js/api.js'

export default {
  directives: { maska: vMaska },
  components: {
    BaseStore
  },
  data: () => {
    return {
      form: {
        name: null,
        document: null,
        cellphone: null
      }
    }
  },
  methods: {
    store() {
      return requesFromStore(this.$route.params.slug).post(`customer`, this.form)
    },
    onCreated(data) {
      this.$router.push({
        name: 'customer.update',
        params: {
          customer_id: data.customer.id
        }
      })
    }
  }
  
}
</script>