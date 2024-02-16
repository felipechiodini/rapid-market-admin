<template>
  <div>
    <base-index title="Produtos">
      <template #buttons>
        <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'product.store' })">
          Novo Produto
        </button>
      </template>
      <base-table class="table" request="product">
        <template #header>
          <th>Nome</th>
        </template>
        <template #content="{ rows }">
          <tr v-for="(product, key) in rows" :key="key">
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
              <img class="fopawjfopawjofwa rounded" :src="product.src" alt="">
            </td>
          </tr>
        </template>
      </base-table>
    </base-index>
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