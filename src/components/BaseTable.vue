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
        <Paginator :page="currentPage" :first="perPage" :rows="10" :totalRecords="page.total" :rowsPerPageOptions="[10, 20, 30]" />

        <Pagination 
          v-model="currentPage"
          :perPage="10"
          :total="page.total" />
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
import Pagination from '@/components/Pagination.vue'
import Filters from '@/components/Filters.vue'
import Paginator from 'primevue/paginator';

export default {
  name: 'BaseTable',
  components: {
    Loading,
    Pagination,
    Filters,
    Paginator
},
  props: ['request'],
  watch: {
    '$route.query': function() {
      this.fetchPage()
    }
  },
  data: () => {
    return {
      loading: true,
      page: null,
      columns: null,
      filters: {},
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
        return parseInt(this.$route.query.page) ?? 1
      },
      set: function(val) {
        this.$router.replace({
          name: this.$route.name,
          query: {
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

      requesFromStore(this.$route.params.slug)
        .get(this.request, { params: { page, per_page, filters }})
        .then(({ data }) => {
          this.page = data.page
          this.columns = data.columns

          data.filters.forEach(filter => {
            this.filters[filter.column] = filter
          })

        }).catch((error) => {

        }).finally(() => {
          this.loading = false
        })
    },
  }


}
</script>
