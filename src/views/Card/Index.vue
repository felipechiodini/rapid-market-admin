<template>
  <BaseIndex title="Comandas">
    <template #buttons>
      <button class="btn btn-primary btn-sm">
        Nova Comanda
      </button>
    </template>
    <BaseTable request="card">
      <template #content="{ rows }">
        <tr v-for="(customer, key) in rows" :key="key">
          <td>
            {{ customer.name }}
          </td>
        </tr>
      </template>
    </BaseTable>
  </BaseIndex>
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