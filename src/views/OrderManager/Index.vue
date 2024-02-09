<template>
  <div>
    <base-index title="Gerenciador de Pedidos">
    <div class="doijawodiaw d-flex mt-4">
      <div class="waopfjoawp">
        <template v-if="orders !== null">
          <div
            class="awonjfowajf"
            :class="{ 'selected': order.id === selectedOrder?.id }"
            v-for="(order, key) in orders"
            :key="key"
            @click="loadOrderOnIndex(order)">
            <div class="d-flex">
              <span class="fw-bold">{{ order.customer.name }}</span>
              <span class="ms-2 order-number text-muted">#{{ order.id }}</span>
            </div>
            <span>{{ order.status_label }}</span>
            <span>{{ order.total }}</span>
          </div>  
        </template>
        <loading v-else />
      </div>
      <div class="fapowfoiwa shadow">
        <template v-if="selectedOrder !== null && loadingOrder === false">
          <div class="d-flex">
            <h5>{{ selectedOrder.customer.name }}</h5>
            <button class="btn btn-primary btn-sm ms-3">
              Entrar em Contato
            </button>
          </div>
          <span class="text-muted">#{{ selectedOrder.id }}</span>
          <span>Pedido realizado às: {{ selectedOrder.created_at_label }}</span>
          <div class="border rounded bg-white p-3 my-3">
            <div class="d-flex">
              <span>1x</span>
              <h6 class="ms-2 m-0">Prato principal do cardápio</h6>
              <span class="m-auto">R$ 38,99</span>
            </div>
          </div>
          <div class="">
            <button class="btn btn-primary btn-sm me-3" @click="doNextStep()" v-if="showButtonNextStep">
              {{ nextStepButton.label }}
            </button>
            <button class="btn btn-outline-primary btn-sm" @click="cancelOrder()" v-if="showButtonCanceled">
              Cancelar
            </button>
          </div>
        </template>
        <div v-else-if="loadingOrder === true">
          <loading />
        </div>
        <div class="d-flex flex-column h-100 align-items-center justify-content-center" v-else>
          <i class="fas fa-arrow-left text-primary" style="font-size: 2rem;"></i>
          <h6>Selecione um pedido</h6>
        </div>
      </div>
    </div>
    </base-index>
  </div>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import Loading from '@/components/Loading.vue';
import { request } from '@/js/apiStore';
import { CANCELED, DISPATCHED, getButton } from '@/js/OrderStatus';

export default {
  components: {
    BaseIndex,
    Loading
  },
  data: () => {
    return {
      orders: null,
      selectedOrder: null,
      loadingOrder: false
    }
  },
  computed: {
    nextStepButton() {
      return getButton(this.selectedOrder.status)
    },
    orderIsCanceled() {
      return this.selectedOrder.status === CANCELED
    },
    orderIsDispached() {
      return this.selectedOrder.status === DISPATCHED
    },
    showButtonNextStep() {
      return this.orderIsCanceled === false && this.orderIsDispached === false
    },
    showButtonCanceled() {
      return this.orderIsCanceled === false && this.orderIsDispached === false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      request(this.$route.params.slug).get('order-manager').then(({ data }) => {
        this.orders = data.orders
      })
    },
    doNextStep() {
      request(this.$route.params.slug).post(this.nextStepButton.request(this.selectedOrder.id)).then(({ data }) => {
        this.loadOrder(this.selectedOrder)
      })
    },
    cancelOrder() {
      request(this.$route.params.slug).post(`order-manager/${this.selectedOrder.id}/cancel`).then(({ data }) => {
        this.loadOrder(this.selectedOrder)
      })
    },
    loadOrderOnIndex(order) {
      if (this.selectedOrder?.id === order.id) return
      this.loadOrder(order)
    },
    loadOrder(order) {
      this.loadingOrder = true
      this.selectedOrder = { id: order.id }

      request(this.$route.params.slug)
        .get(`order-manager/${order.id}`)
        .then(({ data }) => {
          this.selectedOrder = data.order
        }).finally(() => {
          this.loadingOrder = false
        })
    }
  }
}
</script>


<style scoped>

.doijawodiaw {
  height: 75vh;
  overflow: auto;
}

.waopfjoawp {
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  overflow: auto;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.waopfjoawp::-webkit-scrollbar {
  display: none;
}

.awonjfowajf {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: .5rem;
  cursor: pointer;
}

.awonjfowajf.selected {
  background-color: #fff;
  border-right: none;
  z-index: 2;
}

.fapowfoiwa {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  background-color: #fff;
}

</style>