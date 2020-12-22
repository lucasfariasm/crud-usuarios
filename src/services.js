import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000"
})

export const api = {
  salvar:(usuario) => {
    return axiosInstance.post('usuario', usuario);
  },

  atualizar:(endpoint, body) => {
    return axiosInstance.put(endpoint, body);
  },

  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  }
}

export function getCep(cep){
  return fetch(`https://viacep.com.br/ws/${cep}/json/`);
}