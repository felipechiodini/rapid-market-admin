<script setup>
import { defineModel } from 'vue';

const show = defineModel()

</script>

<template>
  <div class="drop-down" :class="{ 'show': show }">
    <div class="fwiaojfwoaf">
      <span>Perfil</span>
      <button @click="logout()" class="btn">
        Sair
      </button>
    </div>
  </div>
</template>

<style scoped>

  .drop-down {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    flex-direction: column;
    top: 55px;
    right: 25px;
    height: 100px;
    width: 200px;
    background-color: #fff;
    border: 1px solid #ccc;
    transition: opacity .3s;
    box-shadow: 0 0 10px 0px #ccc;
  }

  .fwiaojfwoaf {
    border-top: 1px solid #ccc;
  }

  .drop-down.show {
    position: absolute;
    visibility: visible;
    opacity: 1;
    display: flex;
  }

  .logout {
    background-color: transparent;
    border: none;
    font-size: 1rem;
  }



</style>