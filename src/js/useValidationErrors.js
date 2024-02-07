export default class useValidationErrors {
  constructor() {
    this.errors = {}
  }

  has(field) {
    return Object.hasOwnProperty.call(this.errors, field)
  }

  get(field) {
    return this.has(field) ? this.errors[field][0] : null
  }

  any() {
    return Object.keys(this.errors).length > 0
  }

  record(newErros) {
    this.errors = newErros
  }

  bindInputError(field, otherBinds = {}) {
    return {
      ...otherBinds,
      error: this.has(field),
      'error-message': this.get(field)
    }
  }

  clean(field) {
    if (field) {
      return delete this.errors[field]
    }

    this.errors = {}
  }

}