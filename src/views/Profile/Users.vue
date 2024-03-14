<template>
  <div class="m-5">
    <BaseIndex title="Usuários">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, key) in users" :key="key">
            <td>
              {{ user.name }}
            </td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </BaseIndex>
  </div>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import { request } from '@/js/Api.js'

export default {
  components: {
    BaseIndex
  },
  mounted() {
    this.laod()
  },
  methods: {
    laod() {
      request().get('users').then(({ data }) => {
        this.page = data.page
      })
    }
  }
}
</script>