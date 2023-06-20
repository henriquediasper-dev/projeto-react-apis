import axios from "axios";

// Cria uma instância do Axios com configurações específicas
export const api = axios.create({
  // URL base para todas as requisições
  baseURL: "https://pokeapi.co/api/v2",
  // Tempo máximo de espera para uma resposta da API (10 segundos neste caso)
  timeout: 10000,
});
