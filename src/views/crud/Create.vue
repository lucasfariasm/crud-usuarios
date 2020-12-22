<template>
  <div class="criar">
    <h1>Criar novo usuário</h1>
    <form>
      <label for="nome">Nome</label>
      <input id="nome" name="nome" type="text" v-model="usuario.nome">
      <label for="email">E-mail</label>
      <input id="email" name="email" type="email" v-model="usuario.email">
      <label for="cep">CEP</label>
      <input id="cep" name="cep" type="text" v-model="usuario.cep" @keyup="preencherCep">
      <label for="rua">Rua</label>
      <input id="rua" name="rua" type="text" v-model="usuario.rua">
      <label for="numero">Número</label>
      <input id="numero" name="numero" type="text" v-model="usuario.numero">
      <label for="bairro">Bairro</label>
      <input id="bairro" name="bairro" type="text" v-model="usuario.bairro">
      <label for="cidade">Cidade</label>
      <input id="cidade" name="cidade" type="text" v-model="usuario.cidade">
      <label for="estado">Estado</label>
      <input id="estado" name="estado" type="text" v-model="usuario.estado">
      
      <button class="btn btn-form" @click.prevent="adicionarUsuario">Salvar</button>
    </form>
    <h1>Editar Usuário</h1>
    <table>
      <tr>
        <th class="menu-editar"></th>
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
        <td class="btn-editar" @click="editarUsuario(usuario)"></td>
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
import {getCep} from "@/services.js"
import { api } from "@/services.js"

export default {
  name: "Create",

  data() {
    return {
      usuario: {
        id: "",
        nome: "",
        email: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: ""
      },
      usuarios: null
    }
  },

  methods: {
    preencherCep(){
      const cep = this.usuario.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        getCep(cep).then(response => response.json()).then(response => {
          console.log(response)
            this.usuario.rua = response.logradouro;
            this.usuario.bairro = response.bairro;
            this.usuario.cidade = response.localidade;
            this.usuario.estado = response.uf;
        });
      }
    },
    formatarUsuario() {
      this.usuario.id = this.usuario.email
    },
    adicionarUsuario() {
      if(!this.usuario.id){
        if(this.usuario.nome === ""){
          alert('Por favor, preencha os campos abaixo')
          this.usuario = {};
        }else {
          this.formatarUsuario();
          api.salvar(this.usuario).then(() => {
            this.usuario = {};
            this.getUsuarios()
            alert('Usuário criado com sucesso!!!');
        })
        }
      }else {
        this.formatarUsuario();
        api.atualizar(`/usuario/${this.usuario.id}`, this.usuario).then(() => {
          this.usuario = {};
          alert('Usuário atualizado com sucesso!!!');
        })
      }
    },
    getUsuarios() {
      fetch("http://localhost:3000/usuario/").then(response => response.json()).then(response => {
        this.usuarios = response;
      });
    },
    editarUsuario(usuario) {
      this.usuario = usuario;
    }
  },
  created() {
    this.getUsuarios();
  }
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 10px auto 0px auto;
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}


.btn-form {
  max-width: 100%;
  margin-right: 20px;
  grid-column: 2;
  margin-top: 10px;
  margin-bottom: 40px;
}
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

.btn-editar {
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

</style>