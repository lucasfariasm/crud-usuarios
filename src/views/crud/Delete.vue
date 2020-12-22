<template>
  <div class="delete">
    <h1>Deletar usuário</h1>
    <table>
      <tr>
        <th class="menu-deletar"></th>
        <th>Nome</th>
        <th>E-mail</th>
        <th>CEP</th>
        <th>Rua</th>
        <th>Número</th>
        <th>Bairro</th>
        <th>Cidade</th>
        <th>Estado</th>
      </tr>
      <tr v-for="usuario in usuarios" :key="usuario.id">
        <td class="btn-deletar" @click="deletarUsuario(usuario.id)"></td>
        <td>{{usuario.nome}}</td>
        <td>{{usuario.email}}</td>
        <td>{{usuario.cep}}</td>
        <td>{{usuario.rua}}</td>
        <td>{{usuario.numero}}</td>
        <td>{{usuario.bairro}}</td>
        <td>{{usuario.cidade}}</td>
        <td>{{usuario.estado}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from "@/services.js"

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
    },
    deletarUsuario(id) {
      const confirmar = window.confirm("Deseja deletar este usuário?");
      if (confirmar) {
        api.delete(`/usuario/${id}`)
        .then(() => {
          this.getUsuarios();
        }).catch(error => {
          console.log(error.response)
        });
      }
    }
  },
  created() {
    this.getUsuarios();
  }
}
</script>

<style scoped>
table {
  width: 100%;
  margin-top: 15px;
  border-collapse: collapse;
}

table, th, td {
  text-align: center;
}

tr {
  position: relative;
}

th, td {
  border: 1px solid white;
  padding: 15px;
  transition: all .3s;
}

th {
  box-shadow: 0 6px 8px rgba(255, 156, 29, 0.2);
}

td {
  box-shadow: 0 6px 8px rgba(30, 60, 90, 0.1);
}

th:hover,
td:hover {
  transform: scale(1.01);
  border-bottom-color: #ff9c1d;
}

.btn-deletar {
  /* position: absolute; */
  /* color: red; */
  /* background: red; */
  top: 0px;
  left: 0px;
  background: url("../../assets/remover.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  /* text-indent: -140px; */
  overflow: hidden;
  cursor: pointer;
  border: none;
}
</style>