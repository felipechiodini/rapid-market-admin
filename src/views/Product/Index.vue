<template>
  <div>
    <base-index title="Produtos">
      <template #buttons>
        <b-button size="sm" :to="{ name: 'product.store' }">
          Novo Produto
        </b-button>
      </template>
      <base-table class="table" request="product">
        <template #header>
          <th>Nome</th>
        </template>
        <template #content="{ rows }">
          <tr v-for="(customer, key) in rows" :key="key">
            <td>
              {{ customer.name }}
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