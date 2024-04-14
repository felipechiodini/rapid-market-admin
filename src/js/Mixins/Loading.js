export default {
  data: () => {
    return {
      loading: false
    }
  },
  computed: {
    isLoading() {
      return this.loading === true
    },
    isntLoading() {
      return this.loading === false
    }
  },
  methods: {
    setLoading(value) {
      this.loading = value
    }
  }
}