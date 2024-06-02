<template>
  <div class="border rounded">
    <Filters :filters="filters" @apply="applyFilters" />
    <template v-if="loading === false && hasData">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th v-for="(column, key) in columns" :key="key" @click="sort(column)">
                {{ column }}
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <slot name="content" :rows="data"></slot>
          </tbody>
        </table>
        <div class="d-flex align-items-center">
          <select class="form-select w-auto ms-auto" v-model="perPage">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <BasePagination
            class="d-flex justify-content-end p-3 m-0"
            v-model="currentPage"
            :per-page="perPage"
            :total="page.total" />
        </div>
      </div>
    </template>
    <div class="d-flex justify-content-center my-5" v-else-if="loading === true">
      <loading />
    </div>
    <div class="row my-5 justify-content-center" v-else>
      <div class="text-center py-4">
        <p>Nenhum item foi encontrado!</p>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from './Loading.vue'
import { requesFromStore } from '@/js/api.js'
import BasePagination from '@/components/BasePagination.vue'
import Filters from '@/components/Filters.vue'

export default {
  name: 'BaseTable',
  components: {
    Loading,
    BasePagination,
    Filters,
},
  props: ['request'],
  watch: {
    '$route.query': function() {
      this.fetchPage()
    }
  },
  data: () => {
    return {
      page: null,
      loading: true,
      filters: null,
      applyedFilters: null,
      showFilters: false,
      operators: null,
    }
  },
  computed: {
    data() {
      return this.page?.data
    },
    hasData() {
      return this.page?.data?.length > 0
    },
    currentPage: {
      get: function() {
        return this.$route.query.page ?? 1
      },
      set: function(val) {
        this.$router.replace({
          name: this.$route.name,
          query: {
            ...this.$route.query,
            page: val
          }
        })
      }
    },
    perPage: {
      get: function() {
        return this.$route.query.per_page ?? 10
      },
      set: function(val) {
        this.$router.replace({
          name: this.$route.name,
          query: {
            ...this.$route.query,
            per_page: val
          }
        })
      }
    }
  },
  mounted() {
    this.fetchPage()
  },
  methods: {
    applyFilters(filters) {
      this.fetchPage(filters)
    },
    sort(column) {
      this.page.data.sort((a, b) => {
        if (a.name > b.name) {
          return 1
        } else if (a.name < b.name) { 
          return -1
        } else {
          return 0
        }
      })
    },
    fetchPage(filters = null) {
      this.loading = true

      const page = this.$route.query.page ?? 1
      const per_page = this.$route.query.per_page ?? 10

      requesFromStore()
        .get(this.request, { params: { page, per_page, filters }})
        .then(({ data }) => {
          this.page = data.page
          this.columns = data.columns
        }).catch((error) => {

        }).finally(() => {
          this.loading = false
        })
    },
  }
}
</script>
