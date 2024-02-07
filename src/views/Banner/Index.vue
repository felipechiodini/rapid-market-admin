<template>
  <div>
    <base-index title="Banners">
      <template #buttons>
        <b-button size="sm">Novo Banner</b-button>
      </template>
      <base-table class="table" request="banner">
        <template #header>
          <th>Nome</th>
          <th></th>
        </template>
        <template #content="{ rows }">
          <tr v-for="(customer, key) in rows" :key="key">
              <td>
                {{ customer.name }}
              </td>
              <td>
                <img height="70px" :src="customer.src" alt="">
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