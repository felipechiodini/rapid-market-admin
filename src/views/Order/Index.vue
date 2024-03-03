<template>
  <div>
    <BaseIndex title="Categorias">
      <template #buttons>
        <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'category.store' })">
          Nova Categoria
        </button>
      </template>
      <BaseTable class="table my-4" request="category">
        <template #content="{ rows }">
          <tr v-for="(category, key) in rows" :key="key">
            <td>
              {{ category.name }}
            </td>
            <td>
              <router-link :to="{ name: 'category.update', params: { category_id: category.id }}">
                Editar
              </router-link>
            </td>
          </tr>
        </template>
      </BaseTable>
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