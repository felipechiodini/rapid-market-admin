<template>
  <span>
    {{ address.street }}
    {{ address.number }} 
    {{ address.neighborhood }}
    {{ address.city }}
    {{ address.complement }}
  </span>
</template>

<script>
export default {
  props: {
    address: {
      type: Object
    }
  }
}
</script>