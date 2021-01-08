import axios from 'axios';

const api = axios.create({
    baseURL: 'https://github.com/rubrato/EscolaOnline-backend:3333',
})

export default api;