<template>
  <span class="ms-1">{{ address.street }}</span>,
  <span class="ms-1">nº {{ address.number }}</span>,
  <span class="ms-1">{{ address.neighborhood }}</span>,
  <span class="ms-1">{{ address.city }}</span>
  <span class="ms-1">{{ address.complement }}</span>
</template>

<script>
  export default {
    props: {
      address: {
        
      }
    }

  }
</script>