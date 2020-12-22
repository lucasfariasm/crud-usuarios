import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "@/services.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    }
  },
  mutations: {
    UPDATE_USUARIO(state, payload){
      state.usuario = Object.assign(state.usuario, payload);
    }
  },
  actions: {
    criarUsuario(context, payload){
      context.commit("UPDATE_USUARIO", {id: payload.email})
      api.post("/usuario", payload)
    }
  },
  modules: {
  }
})
