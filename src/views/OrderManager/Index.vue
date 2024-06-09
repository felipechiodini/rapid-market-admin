<template>
  <BaseIndex title="Gestor de Pedidos">
    <!-- <template #buttons>
      <button class="btn btn-primary btn-sm">
        Pausa de Emergência
      </button>
    </template> -->
    <div class="doijawodiaw rounded d-flex">
      <div class="waopfjoawp rounded-start">
        <div class="p-2 border-bottom border-end">
          <div class="position-relative">
            <input type="text" v-model="filters.id" class="form-control form-control-sm" placeholder="Número pedido" @input="doSearch">
            <span v-if="filters.id !== null" class="fas fa-times podawkopfjawojfwaoif" @click="clearSearch()"></span>
          </div>
        </div>
        <div class="foiawjfiwafawi">
          <template v-if="orders !== null">
            <div
              class="awonjfowajf"
              :class="{ 'selected shadow': order.id === selectedOrder?.id }"
              v-for="(order, key) in orders"
              :key="key"
              @click="loadOrderFromIndex(order)">
              <div class="d-flex text-end">
                <span class="fw-bold text-start">{{ order.customer.name }}</span>
                <span class="ms-2 order-number text-muted">#{{ order.id }}</span>
                <span class="ms-auto">{{ order.payment_type }} • {{ order.total }}</span>
              </div>
              <span class="badge badge-custom" :class="getOrderStatusBadge(order)">
                {{ order.status_label }}
              </span>
              <span>
                {{ order.neighborhood }} - {{ order.distance }}
              </span>
              <span>
                {{ formatOrderSince(order.ordered_since) }}
              </span>
            </div>  
          </template>
          <div class="d-flex justify-content-center align-items-center h-100" v-else>
            <loading size="2rem" />
          </div>
        </div>
      </div>
      <div class="fapowfoiwa rounded-end">
        <template v-if="selectedOrder !== null && loadingOrder === false">
          <div class="d-flex align-items-center">
            <h5 class="m-0 me-2">{{ selectedOrder.customer.name }}</h5>
            <span class="text-muted">#{{ selectedOrder.id }}</span>
            <button class="btn btn-success btn-sm ms-3" @click="contactCustomer(selectedOrder.customer)">
              <i class="fa-brands fa-whatsapp"></i>
            </button>
          </div>
          <div>
            <span>{{ selectedOrder.payment.type_label }}</span> • 
            <span>{{ selectedOrder.delivery.type_label }}</span>
          </div>
          <div class="d-flex">
            <component :is="deliveryComponent" :address="selectedOrder.address" />
          </div>
          <span>Pedido realizado às: {{ selectedOrder.created_at }}</span>
          <div class="border rounded bg-light p-2" v-for="(product, key) in selectedOrder.products" :key="key">
            <div class="d-flex align-items-center">
              <span class="me-2">{{ product.amount }}x</span>
              <h6 class="m-0">{{ product.name }}</h6>
              <span class="ms-auto">{{ product.value }}</span>
            </div>
            <p class="m-0">{{ product.observation }}</p>
          </div>
          <table class="align-self-end w-50 mt-2">
            <tr>
              <td>Produtos</td>
              <td class="text-end">{{ selectedOrder.products_total }}</td>
            </tr>
            <tr>
              <td>Taxa de Entrega</td>
              <td class="text-end">{{ selectedOrder.delivery_fee }}</td>
            </tr>
            <tr v-if="selectedOrder.discount">
              <td>Desconto</td>
              <td class="text-end">{{ selectedOrder.discount }}</td>
            </tr>
            <tr class="border-top">
              <td>Total</td>
              <td class="text-end">{{ selectedOrder.total }}</td>
            </tr>
          </table>
          <div>
            <button class="btn btn-primary btn-sm me-3" @click="doNextStep()" v-if="showButtonNextStep">
              {{ nextStepButton.label }}
            </button>
            <button class="btn btn-outline-primary btn-sm" @click="cancelOrder()" v-if="showButtonCanceled">
              Cancelar
            </button>
          </div>
        </template>
        <div class="d-flex justify-content-center align-items-center h-100" v-else-if="loadingOrder === true">
          <loading size="3rem" />
        </div>
        <div class="d-flex flex-column h-100 align-items-center justify-content-center" v-else>
          <i class="fas fa-arrow-left text-primary" style="font-size: 2rem;"></i>
          <h6>Selecione um pedido</h6>
        </div>
      </div>
    </div>
  </BaseIndex>
  <!-- <EmergencyStop /> -->
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import Loading from '@/components/Loading.vue'
import { requesFromStore } from '@/js/api.js'
import { CANCELED, DISPATCHED, getButton } from '@/js/OrderStatus'
import debounce from 'lodash.debounce'
import Delivery from '@/views/OrderManager/Shipping/Delivery.vue'
import OnSite from '@/views/OrderManager/Shipping/OnSite.vue'
import EmergencyStop from './EmergencyStop.vue'

export default {
  components: {
    BaseIndex,
    Loading,
    Delivery,
    OnSite,
    EmergencyStop
  },
  data: () => {
    return {
      orders: [],
      selectedOrder: null,
      loadingOrder: false,
      filters: {
        id: null
      }
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
    },
    showAddress() {
      return this.selectedOrder.delivery.type === 1
    },
    deliveryComponent() {
      const options = {
        1: 'Delivery',
        3: 'OnSite'
      }

      return options[this.selectedOrder.delivery.type]
    }
  },
  mounted() {
    this.load()

    window.Echo.private(`orders.${this.$route.params.slug}`)
      .listen('.App\\Events\\OrderCreated', (order) => {
        this.pushOrder(order)
      })
  },
  methods: {
    load() {
      this.orders = null
      requesFromStore(this.$route.params.slug)
        .get('order-manager', { params: { ...this.filters } })
        .then(({ data }) => {
          this.orders = data.orders
        })
    },
    getOrderStatusBadge(order) {
      const statusColor = {
        1: 'bg-primary',
        2: 'bg-info',
        3: 'bg-secondary',
        4: 'bg-success',
        5: 'bg-warning',
      }

      return statusColor[order.status]
    },
    doNextStep() {
      requesFromStore(this.$route.params.slug)
        .post(this.nextStepButton.request(this.selectedOrder.id))
        .then(({ data }) => {
          const orderInIndex = this.orders.find(order => order.id === this.selectedOrder.id)
          orderInIndex.status = data.status
          orderInIndex.status_label = data.label
          this.loadOrder(this.selectedOrder)
        })
    },
    cancelOrder() {
      requesFromStore(this.$route.params.slug).post(`order-manager/${this.selectedOrder.id}/cancel`).then(({ data }) => {
        this.loadOrder(this.selectedOrder)
      })
    },
    loadOrderFromIndex(order) {
      if (this.selectedOrder?.id === order.id) return
      this.loadOrder(order)
    },
    loadOrder(order) {
      this.loadingOrder = true
      requesFromStore(this.$route.params.slug)
        .get(`order-manager/${order.id}`)
        .then(({ data }) => {
          this.selectedOrder = data.order
        }).finally(() => {
          this.loadingOrder = false
        })
    },
    contactCustomer(customer) {
      const url = `https://api.whatsapp.com/send/?phone=55${customer.cellphone}&text=Olá&type=phone_number`
      window.open(url, '_blank').focus()
    },
    clearSearch() {
      this.filters.id = null
      this.load()
    },
    formatOrderSince(ordered_since) {
      if (ordered_since < 10) {
        return 'alguns segundos atrás'
      }

      if (ordered_since < 60) {
        return `${ordered_since} segundos atrás`
      }

      const minutes = Math.floor(ordered_since / 60)
      return `${minutes} minutos atrás`
    },
    pushOrder(order) {
      this.orders.unshift(order)
      this.playSound()
    },
    playSound() {
      const audio = new Audio('/notification.mp3');
      audio.play()
    },
    doSearch: debounce(function() { this.load() }, 500)
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
  width: 30%;
  height: 100%;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.foiawjfiwafawi {
  height: 100%;
  overflow: auto;
}

.foiawjfiwafawi::-webkit-scrollbar {
  width: 5px;
}

.foiawjfiwafawi::-webkit-scrollbar-thumb {
  background-color: var(--primary)
}

.awonjfowajf {
  font-size: .8rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: .8rem;
  cursor: pointer;
  gap: 3px;
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
  gap: 5px;
  overflow: auto;
}

.badge-custom {
  font-weight: 500;
  width: fit-content;
}

.podawkopfjawojfwaoif { 
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  padding: 7px;
}

</style>