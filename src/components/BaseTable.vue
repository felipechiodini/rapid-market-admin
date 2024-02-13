<template>
  <div class="table-responsive p-3">
    <template v-if="loading === false && hasData">
      <div class="d-flex flex-column border rounded bg-white">
        <div class="d-flex border-bottom w-100">
          <button class="btn btn-sm m-2 ms-auto">
            <i class="fas fa-filter"></i>
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th v-for="(column, key) in columns" :key="key">
                {{ column.label }}
              </th>
            </tr>
          </thead>
          <slot name="content" :rows="data"></slot>
        </table>
        <nav class="ms-auto">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
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
import { requesFromStore } from '@/js/apiStore.js'

export default {
  name: 'BaseTable',
  components: {
    Loading
  },
  props: ['request'],
  watch: {
    '$route.query': function() {
      this.load()
    }
  },
  data: () => {
    return {
      page: null,
      loading: true
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
    this.load()
  },
  methods: {
    load() {
      this.loading = true

      const page = this.$route.query.page ?? 1
      const per_page = this.$route.query.per_page ?? 10

      requesFromStore(this.$route.params.slug).get(this.request, { params: { page, per_page }}).then(({ data }) => {
        this.page = data.page
        this.columns = data.columns
      }).finally(() => {
        this.loading = false
      })
    },
  }


}
</script>
