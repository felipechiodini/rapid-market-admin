<template>
  <div class="border rounded bg-white">
    <input ref="input" type="file" @input="pushImage">
    <div class="fapwofjopwajfwo" @click.self="$refs.input.click()">
      <img class="ioawfiawfhw" :src="src" v-for="(src, key) in rendered" :key="key">
      <button type="button" class="ioawfiawfhw owajfwafjiw rounded fas fa-plus" @click="$refs.input.click()"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {

    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'value'
  },
  data: () => {
    return {
      photos: [],
      rendered: []
    }
  },
  methods: {
    pushImage(event) {
      if (event.target.files[0]) {

        if (this.multiple == false) {
          this.photos = []
          this.rendered = []
        }

        this.photos.push(event.target.files[0])
        this.rendered.push(URL.createObjectURL(event.target.files[0]))
        this.updateModel()
      }
    },
    updateModel() {
      if (this.multiple === true) {
        this.$emit('update:modelValue', this.photos)
      } else {
        this.$emit('update:modelValue', this.photos[0])
      }
    }
  }
}
</script>

<style scoped>

  input[type="file"] {
    display: none;
  }

  .fapwofjopwajfwo {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: .5rem;
    cursor: pointer;
  }

  .ioawfiawfhw {
    border-radius: 10px;
    height: 70px;
    width: 70px;
    margin-right: 1rem;
    object-fit: cover;
    cursor: default;
  }

  .owajfwafjiw {
    border: none;
    background-color: transparent;
  }

  .ioawfiawfhw:last-child {
    margin-right: 0;
  }


</style>