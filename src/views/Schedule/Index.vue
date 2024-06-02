<template>
  <BaseIndex title="Horário de funcionamento" subtitle="Escolha os dias e horários que sua loja receberá pedidos.">
    <template #buttons>
      <button class="btn btn-primary" @click="showModal = true">
        Novo Horário
      </button>
    </template>

    <div class="p-3">
      <table>
        <tr>
          <td>dwas</td>
        </tr>
      </table>
    </div>


    <Modal v-model="showModal" title="Escolha os dias e horários que a loja vai abrir">
      <div class="d-flex flex-column gap-5">
        <div>
          <h6 class="mb-3 fw-normal">Escolha os <strong>dias da semana</strong>:</h6>
          <div class="d-flex gap-2">
            <BaseButton v-for="(weekDay, key) in weekDays" :key="key">
              {{ weekDay }}
            </BaseButton>
          </div>
        </div>
        <div>
          <h6 class="mb-3 fw-normal">Selecione o horário em que a loja <strong>ficará aberta</strong>:</h6>
          <div class="d-flex align-items-center gap-2">
            <span>Abrir a loja das</span> 
            <select class="form-select w-auto">
              <option :value="option" v-for="(option, key) in schedules" :key="key">
                {{ option }}
              </option>
            </select>
            <span>até</span>
            <select class="form-select w-auto">
              <option :value="option" v-for="(option, key) in schedules" :key="key">
                {{ option }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </Modal>
  </BaseIndex>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import BaseButton from './Components/Button.vue'
import Modal from './Components/Modal.vue'

export default {
  components: {
    BaseIndex,
    BaseButton,
    Modal
  },
  data: () => {
    return {
      showModal: true
    }
  },
  computed: {
    schedules() {
      const array = []
      for (let hour = 0; hour <= 23; hour++) {
        for (let minute = 0; minute < 4; minute++) {
          array.push(`${String(hour).padStart(2, '0')}:${String(minute * 15).padStart(2, '0') }`)
        }
      }

      array.push('23:59')

      return array 
    },
    weekDays() {
      return [
        'Seg',
        'Ter',
        'Qua',
        'Qui',
        'Sex',
        'Sab',
        'Dom',
      ]
    }
  }
}
</script>
