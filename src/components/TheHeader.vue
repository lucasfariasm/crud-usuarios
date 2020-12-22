<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/operand.png" alt="Operand-logo">
      </router-link>
      <router-link class="btn" to="/">Administrador</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 200px;
}


</style>