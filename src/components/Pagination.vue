<template>
  <nav>
    <ul class="pagination justify-content-end">
      <li class="page-item prev-page clickable" :class="{ disabled: modelValue === 1 }">
        <a class="page-link" aria-label="Previous" @click="prevPage()">
          <span aria-hidden="true"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
        </a>
      </li>
      <li class="page-item clickable" :class="{ 'active': modelValue == item }" :key="item"
        v-for="item in range(minPage, maxPage)">
        <a class="page-link" @click="changePage(item)">
          {{item}}
        </a>
      </li>
      <li class="page-item next-page clickable" :class="{ disabled: modelValue === totalPages }">
        <a class="page-link" aria-label="Next" @click="nextPage()">
          <span aria-hidden="true"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "pagination",
    props: {
      pageCount: {
        type: Number,
        default: 0,
        description: "Pagination page count. This should be specified in combination with perPage"
      },
      perPage: {
        type: Number,
        default: 10,
        description: "Pagination per page. Should be specified with total or pageCount"
      },
      total: {
        type: Number,
        default: 0,
        description: "Can be specified instead of pageCount. The page count in this case will be total/perPage"
      },
      modelValue: {
        type: Number,
        // default: 10
      },
      size: {
        type: String,
        default: "",
        description: "Pagination size"
      },
      align: {
        type: String,
        default: "",
        description: "Pagination alignment (e.g center|start|end)"
      }
    },
    computed: {
      totalPages() {
        if (this.pageCount > 0) return this.pageCount
        if (this.total > 0) {
          return Math.ceil(this.total / this.perPage)
        }
        return 1
      },
      pagesToDisplay() {
        if (this.totalPages > 0 && this.totalPages < this.defaultPagesToDisplay) {
          return this.totalPages
        }
        return this.defaultPagesToDisplay
      },
      minPage() {
        let min = this.modelValue - Math.floor(this.pagesToDisplay / 2)

        if (min <= 1) {
          return 1
        }

        return min
      },
      maxPage() {
        let max = this.modelValue + Math.floor(this.pagesToDisplay / 2)

        let min = this.modelValue - Math.floor(this.pagesToDisplay / 2)

        if (max >= this.totalPages) {
          return this.totalPages
        }
        if (min < 1) {
          max = max + Math.abs(min) + 1
        }

        return max
      }
    },
    data: () => {
      return {
        defaultPagesToDisplay: 5
      }
    },
    methods: {
      range(min, max) {
        let arr = []
        for (let i = min; i <= max; i++) {
          arr.push(i)
        }
        return arr
      },
      changePage(item) {
        this.$emit("update:modelValue", item)
      },
      nextPage() {
        if (this.modelValue < this.totalPages) {
          this.$emit("update:modelValue", this.modelValue + 1)
        }
      },
      prevPage() {
        if (this.modelValue > 1) {
          this.$emit("update:modelValue", this.modelValue - 1)
        }
      }
    },
    watch: {
      perPage() {
        this.$emit("update:modelValue", 1)
      },
      total() {
        this.$emit("update:modelValue", 1)
      }
    }
  }
</script>