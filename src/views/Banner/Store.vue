<template>
  <BaseIndex title="Novo Banner">
    <BaseForm :request="request">
      <div class="row">
        <div class="col-12">
          <label for="">Nome</label>
          <input v-model="form.name" class="form-control" type="text">
        </div>
        <div class="col-12">
          <label for="">Imagens</label>
          <PhotoUploader v-model="form.image" />
        </div>
      </div>
    </BaseForm>
  </BaseIndex>
</template>

<script>
import BaseIndex from '@/components/BaseIndex.vue'
import BaseForm from '@/components/BaseForm.vue'
import { requesFromStore } from '@/js/api.js'
import PhotoUploader from '@/components/PhotoUploader.vue'

export default {
  components: {
    BaseIndex,
    BaseForm,
    PhotoUploader
  },
  data: () => {
    return {
      form: {
        name: null,
        image: null
      }
    }
  },
  methods: {
    request() {
      return requesFromStore()
        .postForm('banner', this.form)
    }
  }
}
</script>