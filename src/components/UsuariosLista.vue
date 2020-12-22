<template>
  <section class="usuarios-container">
    <div v-for="usuario in usuarios" :key="usuario.id">
      <h2 class="titulo">{{usuario.nome}}</h2>
      <p class="email">{{usuario.email}}</p>
      <p class="cep">{{usuario.cep}}</p>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      usuarios: null
    };
  },
  methods: {
    getUsuarios() {
      fetch("http://localhost:3000/usuario/").then(response => response.json()).then(response => {
        this.usuarios = response;
      });
    }
  },
  created() {
    this.getUsuarios();
  }
}
</script>

<style>

</style>