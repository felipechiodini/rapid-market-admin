<template>
  <BaseIndex title="Categorias" subtitle="Informe as divisões e tipos de pratos / lanches">
    <template #buttons>
      <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'category.store' })">
        Nova Categoria
      </button>
    </template>
    <BaseTable request="category">
      <template #content="{ rows }">
        <tr v-for="(category, key) in rows" :key="key">
          <td>
            {{ category.name }}
          </td>
          <td>
            <RouterLink :to="{ name: 'category.update', params: { category_id: category.id }}">
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
    BaseTable,
    BaseIndex
  }
}
</script>