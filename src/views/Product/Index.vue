<template>
  <div>
    <base-index title="Produtos">
      <template #buttons>
        <button class="btn btn-primary btn-sm" :to="{ name: 'product.store' }">
          Novo Produto
        </button>
      </template>
      <base-table class="table" request="product">
        <template #header>
          <th>Nome</th>
        </template>
        <template #content="{ rows }">
          <tbody>
            <tr v-for="(customer, key) in rows" :key="key">
              <td>
                {{ customer.name }}
              </td>
            </tr>
          </tbody>
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