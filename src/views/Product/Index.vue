<template>
  <div>
    <BaseIndex title="Produtos">
      <template #buttons>
        <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'product.store' })">
          Novo Produto
        </button>
      </template>
      <base-table class="my-3" request="product">
        <template #content="{ rows }">
          <tr v-for="(product, key) in rows" :key="key">
            <td>
              <img class="fopawjfopawjofwa rounded" :src="product.src" alt="">
            </td>
            <td>
              {{ product.name }}
            </td>
            <td>
              {{ product.price_from }}
            </td>
            <td>
              {{ product.price_to }}
            </td>
            <td>
              <router-link :to="{ name: 'product.update', params: { product_id: product.id }}">
                Editar
              </router-link>
            </td>
          </tr>
        </template>
      </base-table>
    </BaseIndex>
  </div>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import BaseTable from '@/components/BaseTable.vue'

export default {
  components: {
    BaseTable,
    BaseIndex
  }

}
</script>


<style scoped>

.fopawjfopawjofwa {
  width: 70px;
  height: 70px;
  object-fit: cover;
}

</style>