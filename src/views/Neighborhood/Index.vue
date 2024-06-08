<template>
  <BaseIndex title="Bairros">
    <template #buttons>
      <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'neighborhood.store' })">
        Novo Bairro
      </button>
    </template>
    <BaseTable request="neighborhood">
      <template #content="{ rows }">
        <tr v-for="(neighborhood, key) in rows" :key="key">
          <td>
            {{ neighborhood.name }}
          </td>
          <td>
            {{ formatCurrency(neighborhood.price) }}
          </td>
          <td>
            <RouterLink :to="{ name: 'neighborhood.update', params: { neighborhood_id: neighborhood.id }}">
              Editar
            </RouterLink>
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
    BaseIndex,
    BaseTable
  }
}
</script>