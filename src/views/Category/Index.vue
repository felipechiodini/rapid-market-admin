<template>
  <div>
    <base-index title="Categorias">
      <template #buttons>
        <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'category.store' })">
          Nova Categoria
        </button>
      </template>
      <base-table class="table" request="category">
        <template #header>
          <th>Nome</th>
          <th></th>
        </template>
        <template #content="{ rows }">
          <tbody>
            <tr v-for="(category, key) in rows" :key="key">
              <td>
                {{ category.name }}
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