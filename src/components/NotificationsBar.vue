<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Notificações</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="border-bottom p-3" v-for="(notification, key) in notifications" :key="key">
      <h6 class="m-0">{{ notification.title }}</h6>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur quae facilis recusandae. In ad unde natus totam velit. Asperiores tempora beatae perferendis voluptas assumenda maxime fugiat suscipit. Adipisci, enim?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      notifications: [
        {
          title: 'Title',
          body: 'lore'
        }
      ]
    }
  }
}
</script>