<template>
  <div class="notifications">
    <div>
      <notification v-for="notification in notifications" v-bind="notification" :clickHandler="notification.onClick"
        :key="notification.timestamp.getTime()" @close="removeNotification">
      </notification>
    </div>
  </div>
</template>

<script>
import Notification from './Notification.vue';

export default {
  components: {
    Notification
  },
  props: {
    overlap: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      notifications: this.$notifications.state
    }
  },
  methods: {
    removeNotification(timestamp) {
      this.$notifications.removeNotification(timestamp);
    }
  },
  created() {
    this.$notifications.settings.overlap = this.overlap;
  },
  watch: {
    overlap: function (newVal) {
      this.$notifications.settings.overlap = newVal;
    }
  }
}
</script>