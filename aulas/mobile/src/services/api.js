import axios from 'axios';

const api = axios.create({
    baseURL: 'exp://192.168.0.111:19000'
});

export default api;