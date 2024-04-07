<template>
  <div>
    <base-store title="Novo Produto" :request="submit">
      <div class="row">
        <div class="col-6">
          <label for="product-name">Nome</label>
          <input class="form-control" v-model="form.name" id="product-name" type="text">
        </div>
        <div class="col-6">
          <label for="product-category">Categoria</label>
          <select class="form-select" id="product-category" v-model="form.category_id">
            <option :value="category.id" v-for="(category, key) in categories">
              {{ category.name }}
            </option>
          </select>
        </div>
        <div class="col-6">
          <label for="product-price-from">Preço de</label>
          <input class="form-control" v-money="config" id="product-price-from" v-model="form.price.from" />
        </div>
        <div class="col-6">
          <label for="product-price-to">Preço por</label>
          <input class="form-control" v-money="config" id="product-price-to" v-model="form.price.to" />
        </div>
        <div class="col-12">
          <label for="product-description">Descrição</label>
          <textarea class="form-control" v-model="form.description" id="product-description" rows="5"></textarea>
        </div>
        <div>
          <label for="product-category">Fotos</label>
          <photo-uploader :multiple="true" v-model="form.photos" />
        </div>
      </div>
    </base-store>
  </div>
</template>

<script>
import BaseStore from '@/components/BaseStore.vue';
import { requesFromStore } from '@/js/api.js';
import PhotoUploader from '@/components/PhotoUploader.vue';

export default {
  components: {
    BaseStore,
    PhotoUploader
  },
  data: () => {
    return {
      form: {
        name: null,
        price: {
          from: null,
          to: null,
        },
        description: null,
        category_id: null,
        photos: null
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
    submit() {
      return requesFromStore(this.$route.params.slug)
        .postForm('product', this.form)
    },
    fetchCategories() {
      requesFromStore(this.$route.params.slug)
        .get('category/all').then(({ data }) => {
          this.categories = data.categories
        }).catch(() => {

        })
        .finally(() => {

        })
    }
  }
}
</script>