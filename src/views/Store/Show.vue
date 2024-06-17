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
        <div class="border text-center rounded p-2">
          <img class="image-logo mb-2" :src="logoImage">
          <input ref="input-file" @change="setFile" type="file" class="d-none">
          <div>
            <button type="button" class="btn btn-info btn-sm me-2" @click="openInputFile()">
              <span class="fas fa-upload"></span>
              Nova Foto
            </button>
            <BaseButton
              type="button"
              @click="uploadNewPhoto()"
              :loading="uploadingFile"
              class="btn btn-primary btn-sm"
              v-if="fileToUpload">
              Salvar
            </BaseButton>
          </div>
        </div>
      </div>
    </BaseForm>
  </BaseIndex>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import BaseForm from '@/components/BaseForm.vue'
import BaseButton from '@/components/BaseButton.vue'
import { useStore } from '@/stores/store'
import { mapState } from 'pinia'
import { requesFromStore } from '@/js/api'

export default {
  components: {
    BaseIndex,
    BaseForm,
    BaseButton
  },
  data: () => {
    return {
      fileToUpload: null,
      uploadingFile: false,
      imagePreview: null
    }
  },
  computed: {
    ...mapState(useStore, ['store']),
    logoImage() {
      if (this.imagePreview !== null) {
        return this.imagePreview
      } else if (this.store?.logo !== null) {
        return this.store.logo
      } else {
        return '/no-image.jpg'
      }
    }
  },
  methods: {
    openInputFile() {
      this.$refs['input-file'].click()
    },
    request() {
      requesFromStore()
        .put('store', this.store)
    },
    uploadNewPhoto() {
      this.uploadingFile = true
      requesFromStore()
        .postForm('store/logo', { logo: this.fileToUpload })
        .then(() => {
          this.fileToUpload = null
          this.imagePreview = null
        })
        .finally(() => this.uploadingFile = false)
    },
    setFile({ target }) {
      this.fileToUpload = target.files[0]
      this.imagePreview = URL.createObjectURL(target.files[0])
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