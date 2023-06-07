import axios from 'axios';
// axios.defaults.withCredentials = true;
const url = import.meta.env.VITE_BASE_URL
const api = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default api;
