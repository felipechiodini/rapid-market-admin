<template>
  <div>
    <base-store title="Novo Banner" :request="request">
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
    </base-store>
  </div>
</template>

<script>
import { requesFromStore } from '@/js/api.js';
import PhotoUploader from '@/components/PhotoUploader.vue';
import BaseStore from '@/components/BaseStore.vue';

export default {
  components: {
    BaseStore,
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
      return requesFromStore(this.$route.params.slug)
        .postForm('banner', this.form)
    }
  }
}
</script>