<template>
  <div>

    <button class="btn btn-primary" @click="logout">Sair</button>
  </div>
</template>


<script>
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';

export default {


  methods: {
    ...mapActions(useUserStore, ['logout'])
  }

}
</script>