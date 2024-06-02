<template>
  <ul class="pagination" :class="[size && `pagination-${size}`, align && `justify-content-${align}`]">
    <li class="page-item prev-page" role="button" :class="{disabled: modelValue === 1}">
      <a class="page-link" aria-label="Previous" @click="prevPage">
        <span aria-hidden="true"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
      </a>
    </li>
    <li class="page-item" role="button" :class="{active: modelValue === item}"
        :key="item"
        v-for="item in range(minPage, maxPage)">
      <a class="page-link" @click="changePage(item)">{{item}}</a>
    </li>
    <li class="page-item next-page" role="button" :class="{disabled: modelValue === totalPages}">
      <a class="page-link" aria-label="Next" @click="nextPage">
        <span aria-hidden="true"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BasePagination",
  props: {
    pageCount: {
      type: Number,
      default: 0,
      description:
        "Pagination page count. This should be specified in combination with perPage"
    },
    perPage: {
      type: Number,
      default: 10,
      description:
        "Pagination per page. Should be specified with total or pageCount"
    },
    total: {
      type: Number,
      default: 0,
      description:
        "Can be specified instead of pageCount. The page count in this case will be total/perPage"
    },
    modelValue: {
      type: Number,
      default: 1,
      description: "Pagination value"
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
      if (this.pageCount > 0) return this.pageCount;
      if (this.total > 0) {
        return Math.ceil(this.total / this.perPage);
      }
      return 1;
    },
    pagesToDisplay() {
      if (this.totalPages > 0 && this.totalPages < this.defaultPagesToDisplay) {
        return this.totalPages;
      }
      return this.defaultPagesToDisplay;
    },
    minPage() {
      if (this.modelValue >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        const newMaxPage = pagesToAdd + this.modelValue;
        if (newMaxPage > this.totalPages) {
          return this.totalPages - this.pagesToDisplay + 1;
        }
        return this.modelValue - pagesToAdd;
      } else {
        return 1;
      }
    },
    maxPage() {
      if (this.modelValue >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        const newMaxPage = pagesToAdd + this.modelValue;
        if (newMaxPage < this.totalPages) {
          return newMaxPage;
        } else {
          return this.totalPages;
        }
      } else {
        return this.pagesToDisplay;
      }
    }
  },
  data() {
    return {
      defaultPagesToDisplay: 5
    };
  },
  methods: {
    range(min, max) {
      let arr = [];
      for (let i = min; i <= max; i++) {
        arr.push(i);
      }
      return arr;
    },
    changePage(item) {
      this.$emit('update:modelValue', item);
    },
    nextPage() {
      if (this.value < this.totalPages) {
        this.$emit('update:modelValue', this.value + 1);
      }
    },
    prevPage() {
      if (this.value > 1) {
        this.$emit('update:modelValue', this.value - 1);
      }
    }
  },
  watch: {
    perPage() {
      this.$emit('update:modelValue', 1);
    },
    total() {
      this.$emit('update:modelValue', 1);
    }
  }
};
</script>