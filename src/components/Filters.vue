<template>
  <div class="d-flex border-bottom w-100">
    <button class="btn btn-sm m-2 ms-auto" @click="toogleFilters()">
      <i class="fas fa-filter"></i>
      <span>{{ rules.length }}</span>
    </button>
  </div>
  <div class="d-flex flex-column p-3 justify-content-center border-bottom" v-if="show === true">
    <div class="d-flex" @click="clearFilters()">
      <button class="btn btn-sm text-danger fw-bold ms-auto">
        Limpar
      </button>
    </div>
    <template v-if="rules.length > 0">
      <div class="dwapodkwkpaodjwp p-0 rounded mt-2 mb-4 mx-5 border" v-for="(rule, key) in rules" :key="key">
        <div class="d-flex align-items-center rounded border-bottom py-2 px-3">
          <h6 class="m-0">
            {{ getFilter(rule.filterKey).label }}
          </h6>
          <button class="btn btn-sm text-danger ms-auto" @click="spliceRule(key)">
            <span class="fas fa-trash"></span>
          </button>
        </div>
        <div class="d-flex rounded p-3">
          <div class="col-4 me-3">
            <label for="fowjafiwjfwo">Operador</label>
            <select class="form-select" id="fowjafiwjfwo" v-model="rule.operator">
              <option :value="operator.value" v-for="(operator, key) in getFilter(rule.filterKey).operators" :key="key">
                {{ operator.label }}
              </option>
            </select>
          </div>
          <div class="col">
            <label for="filter-value">Valor</label>
            <input
              class="form-control"
              id="filter-value"
              type="text"
              v-model="rule.value">
          </div>
        </div>
      </div>
    </template>
    <div class="d-flex justify-content-center">
      <div class="dropdown">
        <button class="btn btn-primary btn-sm" data-bs-toggle="dropdown">
          <span class="fas fa-plus me-2"></span>
          Nova Regra
        </button>
        <div class="dropdown-menu">
          <button
            @click="addRule(filter.column)"
            class="btn btn-sm btn-primary me-1"
            v-for="(filter, key) in filters"
            :key="key">
            {{ filter.label }}
          </button>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-primary btn-sm" @click="applyFilters()">
        Aplicar Filtros
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filters: {
      required:true,
      type: Object
    }
  },
  data: () => {
    return {
      show: false,
      rules: []
    }
  },
  methods: {
    toogleFilters() {
      this.show = !this.show
    },
    getFilter(filterKey) {
      return this.filters[filterKey]
    },
    addRule(filterKey) {
      this.rules.push({
        filterKey,
        value: null,
        operator: null
      })
    },
    spliceRule(key) {
      this.rules.splice(key, 1)
    },
    clearFilters() {
      this.rules = []
      this.applyFilters()
    },
    applyFilters() {
      const val = {}

      this.rules.forEach(i => {
        val[i.filterKey] = {
          operator: i.operator,
          value: i.value,
        }
      })

      this.$emit('apply', val)
    }
  }
}
</script>

<style scoped>

  .dwapodkwkpaodjwp {
    display: flex;
    flex-direction: column;
  }

  .dwapodkwkpaodjwp .title {
    font-size: .8rem;
  }


</style>