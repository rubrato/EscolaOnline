import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tccbackendrui.herokuapp.com',
})

export default api;