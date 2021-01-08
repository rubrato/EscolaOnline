import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tccbackend.azurewebsites.net:3333',
})

export default api;