import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.9:3333/', // Defina a URL base da API
    timeout: 10000, // Tempo limite para a requisição
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;