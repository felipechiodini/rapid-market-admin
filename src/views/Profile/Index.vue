<template>
  <div class="d-flex">
    <div class="d-flex flex-column border-end">
      <router-link :to="{ 'name': 'profile.myaccount' }">
        Minha Conta
      </router-link>
      <router-link :to="{ 'name': 'profile.subscription' }">
        Assinatura
      </router-link>
      <router-link :to="{ 'name': 'profile.users' }">
        Usuários
      </router-link>
      <router-link :to="{ 'name': 'profile.permissions' }">
        Permissões
      </router-link>
      <router-link :to="{ 'name': 'profile.purchases' }">
        Histórico de Compras
      </router-link>
    </div>
    <RouterView />
  </div>
</template>
