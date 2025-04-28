import api from './api.js';

export const registerUser = async (userData) => {
    try {
        const response = await api.post('/clientes', userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Erro ao conectar com o servidor';
    }
}

export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/clientes/login', credentials);
        return response.data;

    } catch (error) {
        throw error.response ? error.response.data : 'Erro ao conectar com o servidor';
    }
}