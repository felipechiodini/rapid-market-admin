<template>
  <div>
    <base-index title="Comandas">
      <template #buttons>
        <button class="btn btn-primary">Nova Comanda</button>
      </template>
      <base-table class="table" request="card">
        <template #header>
          <th>Nome</th>
          <th></th>
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