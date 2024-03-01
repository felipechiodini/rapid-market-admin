<template>
  <div class="container">
    <div class="">
      <div class="row">
        <div class="col-4">
          <label for="daw">Nome da Loja</label>
          <input class="form-control" type="text">
        </div>
        

      </div>
      <div>
        <h6>Logo</h6>
      </div>
      

      <div class="border p-3">
        <h6>Endereço</h6>
        <div class="d-flex flex-column">
          <div>
            <label for="daw">CEP</label>
            <input class="form-control" v-model="store.address.cep" type="text">
          </div>
          <div>
            <label for="daw">Rua</label>
            <input class="form-control" v-model="store.address.street" type="text">
          </div>
          <div>
            <label for="daw">Número</label>
            <input class="form-control" v-model="store.address.number" type="text">
          </div>
          <div>
            <label for="daw">Bairro</label>
            <input class="form-control" v-model="store.address.neighborhood" type="text">
          </div>
          <div>
            <label for="daw">Cidade</label>
            <input class="form-control" v-model="store.address.city" type="text">
          </div>
          <div>
            <label for="daw">Complemento</label>
            <input class="form-control" v-model="store.address.complement" type="text">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Steps from 'primevue/steps';

  export default {
    components: {
      Steps
    },
    data() {
      return {
        store: {
          address: {

          }
        },
        items: [{
            label: 'Personal Info'
          },
          {
            label: 'Reservation'
          },
          {
            label: 'Review'
          }
        ]
      }
    }


  }
</script>