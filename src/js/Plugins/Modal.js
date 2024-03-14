import { Modal } from 'bootstrap'

export default {
  install(app) {
    app.config.globalProperties.$modal = {
      show: (id) => {
        const myModalEl = document.getElementById(id)
        const modal = Modal.getOrCreateInstance(myModalEl)
        modal.show()
      },
      hide: (id) => {
        const myModalEl = document.getElementById(id)
        const modal = Modal.getOrCreateInstance(myModalEl)
        modal.hide()
      }
    }
  }
} 