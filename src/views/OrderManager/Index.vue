<template>
  <div>
    <base-index title="Gerenciador de Pedidos">
      <div class="waopfjoawp shadow">


        <div class="awonjfowajf bg-light" v-for="number in 10" :key="number">
          <span class="order-number">#5986</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis voluptas quibusdam officiis enim, quidem non sunt sed facilis illo dolore ducimus atque repellat, eligendi quisquam aliquid. Cumque architecto omnis alias!</p>
        </div>  

      </div>
      <div>

      </div>
    </base-index>
  </div>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'

export default {
  components: {
    BaseIndex
  }
}
</script>


<style scoped>

.waopfjoawp {
  display: flex;
  flex-direction: column;
  width: 300px;
  border-right: 1px solid #ccc;
}

.awonjfowajf {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ccc;
}

</style>