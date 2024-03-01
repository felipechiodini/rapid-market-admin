<template>
  <div class="d-flex">
    <div class="d-flex flex-column border-end">
      <ul>
        <li class="aaaaaaaaaaa">
          <router-link :to="{ 'name': 'profile.myaccount' }">
            Minha Conta
          </router-link>
        </li>

        <li>
          <router-link :to="{ 'name': 'profile.subscription' }">
            Assinatura
          </router-link>
          
        </li>
        <li>
          <router-link :to="{ 'name': 'profile.users' }">
            Usuários
          </router-link>
          
        </li>
        <li>
          <router-link :to="{ 'name': 'profile.permissions' }">
            Permissões
          </router-link>
          
        </li>
        <li>
          <router-link :to="{ 'name': 'profile.purchases' }">
            Histórico de Compras
          </router-link>
          
        </li>
      </ul>
    </div>
    <RouterView />
  </div>
</template>

<style>

 ul {
  padding: 0;
 }

  li {
    list-style: none;
  }

  li { 
    padding: 1rem;
  }

</style>