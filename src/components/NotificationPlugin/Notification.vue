<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</template>

<script>
  export default {
    name: 'notification',
    components: {
      contentRender: {
        props: ['component'],
        render: h => h(this.component)
      }
    },
    props: {
      message: String,
      title: String,
      icon: String,
      verticalAlign: {
        type: String,
        default: 'top',
        validator: value => {
          let acceptedValues = ['top', 'bottom'];
          return acceptedValues.indexOf(value) !== -1;
        }
      },
      horizontalAlign: {
        type: String,
        default: 'right',
        validator: value => {
          let acceptedValues = ['left', 'center', 'right'];
          return acceptedValues.indexOf(value) !== -1;
        }
      },
      type: {
        type: String,
        default: 'info',
        validator: value => {
          let acceptedValues = [
            'default',
            'info',
            'primary',
            'danger',
            'warning',
            'success'
          ];
          return acceptedValues.indexOf(value) !== -1;
        }
      },
      timeout: {
        type: Number,
        default: 5000,
        validator: value => {
          return value >= 0;
        }
      },
      timestamp: {
        type: Date,
        default: () => new Date()
      },
      component: {
        type: [Object, Function]
      },
      showClose: {
        type: Boolean,
        default: true
      },
      closeOnClick: {
        type: Boolean,
        default: true
      },
      clickHandler: Function
    },
    data() {
      return {
        elmHeight: 0
      };
    },
    computed: {
      hasIcon() {
        return this.icon && this.icon.length > 0;
      },
      alertType() {
        return `alert-${this.type}`;
      },
      customPosition() {
        let initialMargin = 20;
        let alertHeight = this.elmHeight + 10;
        let sameAlertsCount = this.$notifications.state.filter(alert => {
          return (
            alert.horizontalAlign === this.horizontalAlign &&
            alert.verticalAlign === this.verticalAlign &&
            alert.timestamp <= this.timestamp
          );
        }).length;
        if (this.$notifications.settings.overlap) {
          sameAlertsCount = 1;
        }
        let pixels = (sameAlertsCount - 1) * alertHeight + initialMargin;
        let styles = {};
        if (this.verticalAlign === 'top') {
          styles.top = `${pixels}px`;
        } else {
          styles.bottom = `${pixels}px`;
        }
        return styles;
      }
    },
    mounted() {
      this.elmHeight = this.$el.clientHeight;
      if (this.timeout) {
        setTimeout(this.close, this.timeout);
      }
    },
    methods: {
      close() {
        this.$emit('close', this.timestamp);
      },
      tryClose(evt) {
        if (this.clickHandler) {
          this.clickHandler(evt, this);
        }
        if (this.closeOnClick) {
          this.close();
        }
      }
    }
  }
</script>
