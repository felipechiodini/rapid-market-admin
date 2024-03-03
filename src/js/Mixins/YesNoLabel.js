export default {
  methods: {
    yesNoLabel(value) {
      const values = {
        false: 'Não',
        true: 'Sim'
      }

      return values[value]
    }
  }
}