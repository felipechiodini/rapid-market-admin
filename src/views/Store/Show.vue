<template>
  <BaseIndex title="Dados do Estabelecimento">
    <BaseForm :request="request">
      <div class="col-12 col-lg-6">
        <label for="nome">Nome da Loja</label>
        <input v-model="store.name" id="nome" class="form-control">
      </div>
      <div class="col-12 col-lg-6">
        <label for="slug">Identificador</label>
        <input disabled v-model="store.slug" id="slug" class="form-control">
      </div>
      <div class="col-12 col-lg-6">
        <label class="d-block">Logo</label>
        <div class="border text-center rounded p-2" role="button" @click="selectNewImage()">
          <img class="image-logo" :src="logoImage">
          <input ref="input-file" @change="e => sendFile(e.target.files[0])"type="file" class="d-none">
        </div>
        <div class="progress" v-if="sendingFile.active === true">
          <div class="progress-bar" role="progressbar" :style="`width: ${sendingFile.progress}%`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </BaseForm>
  </BaseIndex>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import BaseForm from '@/components/BaseForm.vue'
import { useStore } from '@/stores/store'
import { mapState } from 'pinia'
import { requesFromStore } from '@/js/api'

export default {
  components: {
    BaseIndex,
    BaseForm
  },
  data: () => {
    return {
      sendingFile: {
        active: false,
        progress: 0
      }
    }
  },
  computed: {
    ...mapState(useStore, ['store']),
    logoImage() {
      if (!this.store?.logo) {
        return '/no-image.jpg'
      } else {
        return this.store.logo
      }
    }
  },
  methods: {
    selectNewImage() {
      this.$refs['input-file'].click()
    },
    request() {
      requesFromStore()
        .put('store', this.store)
    },
    sendFile(image) {
      this.sendingFile.active = true
      requesFromStore()
        .postForm('store/logo', { logo: image }, {
          onUploadProgress: (event) => {
            this.sendingFile.progress = Math.round((event.loaded * 100) / event.total)
          }
        })
        .finally(() => {
          this.sendingFile.active = false
          this.sendingFile.progress = 0
        })
    }
  }
}

</script>

<style scoped>

.image-logo {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}

</style>