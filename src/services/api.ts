import axios from 'axios';

const api = axios.create({
  baseURL: 'https://64d26872f8d60b17436202e2.mockapi.io/',
});

export default api;
