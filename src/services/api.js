import axios from 'axios';

const api = axios.create({
    baseURL: 'http://rubrato.ddns.net:3333',
})

export default api;