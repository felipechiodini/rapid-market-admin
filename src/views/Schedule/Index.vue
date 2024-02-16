<template>
  <div>
    <base-index title="Horários">
      <div class="row mt-4">
        <div class="mb-3" v-for="(weekDay, key) in weekDays" :key="key">
          <h6>{{ weekDay.label }}</h6>
          <div class="flex-column">
            <div class="d-flex align-items-center mb-2" v-for="(schedule, key) in weekDay.schedules" :key="key">
              <span class="me-2">Loja abre das</span>
              <input step="900" v-model="schedule.start" type="time" class="form-control" style="width: auto;" />
              <span class="mx-2">até</span>
              <input step="900" v-model="schedule.end" type="time" class="form-control" style="width: auto;" />
              <button class="btn btn-sm" v-if="weekDay.schedules.length > 1" @click="removeSchedule(weekDay, key)">
                <span class="fas fa-trash"></span>
              </button>
            </div>
            <button class="btn btn-sm" @click="addSchedule(weekDay)">
              <span class="fas fa-plus-square"></span>
            </button>
          </div>
        </div>
      </div>
    </base-index>
  </div>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import BaseTable from '@/components/BaseTable.vue'

export default {
  components: {
    BaseTable,
    BaseIndex
  },
  data: () => {
    return {
      weekDays: {
        1: {
          label: 'Domingo',
          schedules: [
            { start: 0, end: 0 },
          ]
        },
        2: {
          label: 'Segunda',
          schedules: [
            { start: 0, end: 0 }
          ]
        },
        3: {
          label: 'Terça',
          schedules: [
            { start: 0, end: 0 }
          ]
        },
        4: {
          label: 'Quarta',
          schedules: [
            { start: 0, end: 0 }
          ]
        },
        5: {
          label: 'Quinta',
          schedules: [
            { start: 0, end: 0 }
          ]
        },
        6: {
          label: 'Sexta',
          schedules: [
            { start: 0, end: 0 }
          ]
        },
        7: {
          label: 'Sabado',
          schedules: [
            { start: 0, end: 0 }
          ]
        },
      }

    }
  },
  methods: {
    removeSchedule(weekDay, key) {
      weekDay.schedules.splice(key, 1)
    },
    addSchedule(weekDay) {
      weekDay.schedules.push({ start: 0, end: 0 })
    }
  }

}
</script>