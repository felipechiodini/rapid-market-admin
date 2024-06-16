<template>
  <BaseIndex title="Cardápio">
    <template #buttons>
      <a :href="cardapiolink" target="_blank" class="btn btn-primary btn-sm">
        Cardápio
        <span class="fa-solid fa-arrow-up-right-from-square"></span>
      </a>
    </template>

    <div>

      <div class="d-flex">
        <button class="btn btn-primary me-auto">
          Adicionar categoria
        </button>
      </div>

      <h6>Editar</h6>
      <span>Ative ou pause a venda dos itens de cada cardápio, altere os preços e controle seu estoque</span>

      <div class="row mb-3">
        <div class="col-8">
          <input class="form-control" placeholder="Buscar item" type="text">
        </div>
        <div class="col">
          <select class="form-select" name="" id="">
            <option value=""></option>
          </select>
        </div>
      </div>

    
      <div class="d-flex border rounded p-3">
        <div>
          <h6>Smash Burguers</h6>
        </div>
        <div class="ms-auto">

        </div>

        <table class="border">
          <tr>
            <th>Item</th>
            <th>Preço</th>
            <th>Statu de venda</th>
            <th>Estoque</th>
          </tr>
          <tr>
            <td>
              <img src="" alt="">
            </td>
            <td>
              <input class="form-control" type="text">
            </td>
            <td>
              <input type="checkbox" name="" id="">
            </td>
          </tr>
        </table>
      </div>


    </div>


  </BaseIndex>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import { requesFromStore } from '@/js/api.js'

export default {
  components: {
    BaseIndex
  },
  data: () => {
    return {
      payments: [],
      menu: null
    }
  },
  computed: {
    cardapiolink() {
      return `${import.meta.env.VITE_ORDER_SITE}/${this.$route.params.slug}`
    }
  },
  mounted() {
    requesFromStore()
      .get('menu')
      .then(({ data }) => {
        this.menu = data.menu
      })
  },
  methods: {
    
  }

}
</script>