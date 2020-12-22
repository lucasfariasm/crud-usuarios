<template>
<div class="update">
  <h1>Editar informações de usuário</h1>
  <section>
    <table>
      <tr>
        <th class="menu-deletar"></th>
        <th>Nome</th>
        <th>E-mail</th>
        <th>CEP</th>
        <th>Cidade</th>
        <th>Estado</th>
      </tr>
      <tr v-for="usuario in usuarios" :key="usuario.id">
        <td class="btn-deletar" @click="deletarUsuario(usuario.id)"></td>
        <td>{{usuario.nome}}</td>
        <td>{{usuario.email}}</td>
        <td>{{usuario.cep}}</td>
        <td>{{usuario.cidade}}</td>
        <td>{{usuario.estado}}</td>
      </tr>
    </table>
  </section>
  <!-- <div class="button">
      <button class="btn btn-form">Salvar Alterações</button>
  </div> -->
</div>
</template>

<script>
// import {getCep} from "@/services.js"
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
      const confirmar = window.confirm("Deseja editar este usuário?");
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
  background: url("../../assets/editar.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  /* text-indent: -140px; */
  overflow: hidden;
  cursor: pointer;
  border: none;
}

.btn-form {
  margin-right: 20px;
}
</style>