<template>
  <div>
    <BaseIndex title="Banners">
      <template #buttons>
        <button class="btn btn-sm btn-primary" @click="$router.push({ name: 'banner.store' })">
          Novo Banner
        </button>
      </template>
      <base-table class="table my-4" request="banner">
        <template #content="{ rows }">
          <tr v-for="(banner, key) in rows" :key="key">
            <td>
              {{ banner.name }}
            </td>
            <td>
              <img height="70px" :src="banner.src" alt="">
            </td>
          </tr>
        </template>
      </base-table>
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