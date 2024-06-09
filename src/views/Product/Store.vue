<template>
  <BaseIndex title="Novo Produto">
    <BaseForm :request="request" :onSuccess="({ data }) => $router.push({ name: 'product.update', params: { product_id: data.product.id } })">
      <div class="row">
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
          <label for="product-price-from">Preço</label>
          <input class="form-control" id="product-price-from" v-model="form.price" />
        </div>
        <div class="col-6">
          <label for="product-description">Descrição</label>
          <textarea class="form-control" v-model="form.description" id="product-description" rows="5"></textarea>
        </div>
      </div>
    </BaseForm>
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