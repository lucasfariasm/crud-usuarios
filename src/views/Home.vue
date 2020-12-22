<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'read'}">Usuários</router-link>
        </li>
        <li>
          <router-link :to="{name: 'create'}">Criar/ Editar</router-link>
        </li>
        <li>
          <router-link :to="{name: 'delete'}">Deletar</router-link>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>

export default {
  name: "Home"
};
</script>

<style scoped>
.usuario {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 1200px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}

.sidenav a {
  padding: 10px;
  display: block;
  background: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
}

.sidenav a.router-link-exact-active,
.sidenav a:hover{
  background: #ff9c1d;
  color: #fff;
}

.sidenav a.router-link-exact-active{
  font-weight: bold;
}

</style>
