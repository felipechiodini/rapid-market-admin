<template>
  <BaseIndex title="Novo Produto">
    <button class="btn btn-primary btn-sm" @click="step--" v-if="step > 1">
      Voltar
    </button>

    <div class="d-flex" v-if="step === 1">
      <button class="btn btn-outline-primary" style="padding: 5rem;" @click="setType(1)">
        <span class="fas fa-warning"></span>
        Preparado
      </button>
      <button class="btn btn-outline-primary" style="padding: 5rem;" @click="setType(2)">
        <span class="fas fa-warning"></span>
        Industrializado
      </button>
    </div>


    <template v-if="step === 2">
      <div v-if="itemType === 1">
        <div>
  
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab"
                aria-controls="home" aria-selected="true">Detalhes</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab"
                aria-controls="profile" aria-selected="false">Complementos</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab"
                aria-controls="contact" aria-selected="false">Preço e Estoque</button>
            </li>
          </ul>
          <div class="tab-content border-end border-start border-bottom p-3" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="">

                <div class="">
                  <label for="">Foto do Item</label>
                  <div v-if="!img" role="button" style="height: 100px; width: 100px; background-color: aliceblue" @click="$refs['input-file'].click()">
                    <span class="fas fa-image"></span>
                  </div>
                  <img class="d-block" v-else :src="img" alt="" style="height: 100px; width: 100px">
                  <input class="d-none" type="file" name="" id="" @change="dddddddddd" ref="input-file">
                </div>

                <div class="col-6">
                  <label for="product-name">Nome</label>
                  <input class="form-control" v-model="form.name" id="product-name" type="text">
                </div>
                <div class="col-6">
                  <label for="product-category">Categoria</label>
                  <select class="form-select" id="product-category" v-model="form.category_id">
                    <option :value="category.id" v-for="(category, key) in categories" :key="key">
                      {{ category.name }}
                    </option>
                  </select>
                </div>
                <div class="col-6">
                  <label for="product-description">Descrição</label>
                  <textarea class="form-control" v-model="form.description" id="product-description" rows="5"></textarea>
                </div>
                <div>
                  <h6>Este item serve quantas pessoas?</h6>
                  <div class="d-flex gap-2">
                    <div class="" v-for="(number, key) in 5" :key="key">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label border p-3" for="flexRadioDefault1">
                        {{ number }}
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label for="">Peso</label>
                  <div class="d-flex w-25">
                    <input class="form-control" placeholder="0" type="text">
                    <select class="form-select" name="" id="">
                      <option value="">g</option>
                      <option value="">Kg</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <h6>Complementos</h6>
              <span>Indique aqui se o item tem complementos.</span>
              <div class="d-flex flex-column p-2 rounded">
                <div>
                  <input class="form-check-input" id="aaaaaaa" type="radio" name="flexRadioDefault">
                  <label for="aaaaaaa">Não, este item não tem complementos</label>
                </div>
                <div>
                  <input class="form-check-input" id="bbbbbbb" type="radio" name="flexRadioDefault">
                  <label for="bbbbbbb">Sim, este item tem complementos</label>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <label for="valor">Valor</label>
              <input class="form-control" id="valor" type="text">
              <h6>Estoque</h6>
              <div class="d-flex">
                <input type="checkbox" name="" id="">
                Ativar o estoque deste item?
              </div>
              <h6>Coloque a quantidade de itens disponíveis em estoque</h6>
              <span>Cadastrando o estoque, o item pausará automaticamente quando acabar</span>
              <div>
                <label for="estoque">Insira a quantidade</label>
                <input class="form-control" id="estoque" type="text">
              </div>

              <button class="btn btn-primary">
                Criar Item
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <div v-if="itemType === 2">
  
      </div>
    </template>


   
  </BaseIndex>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import BaseForm from '@/components/BaseForm.vue'
import PhotoUploader from '@/components/PhotoUploader.vue'
import { requesFromStore } from '@/js/api.js'

export default {
  components: {
    BaseIndex,
    BaseForm,
    PhotoUploader
  },
  data: () => {
    return {
      form: {
        name: null,
        price: null,
        description: null,
        category_id: null,
      },

      step: 1,
      img: null,
      itemType: null,
      categories: null,
      config: {
        masked: false,
        prefix: 'R$ ',
        suffix: '',
        thousands: '.',
        decimal: ',',
        precision: 2,
      }
    }
  },
  mounted() {
    this.fetchCategories()
  },
  methods: {
    setType(value) {
      this.step++
      this.itemType = value
    },
    dddddddddd(e) {
      const objectUrl = URL.createObjectURL(e.target.files[0])
      this.img= (objectUrl)
    },
    request() {
      return requesFromStore()
        .post('product', this.form)
    },
    fetchCategories() {
      requesFromStore()
        .get('category/all')
        .then(({ data }) => this.categories = data.categories)
    }
  }
}
</script>