<template>
  <div>
    <base-index title="Clientes">
      <template #buttons>
        <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'customer.store' })">
          Novo Cliente
        </button>
      </template>
      <base-table class="table my-4" request="customer">
        <template #content="{ rows }">
          <tr v-for="(customer, key) in rows" :key="key">
            <td>
              {{ customer.name }}
            </td>
            <td>
              {{ customer.document }}
            </td>
            <td>
              {{ customer.cellphone }}
            </td>
            <td>
              <router-link :to="{ name: 'customer.update', params: { customer_id: customer.id  }}">
                Editar
              </router-link>
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