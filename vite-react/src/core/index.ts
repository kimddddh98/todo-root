import axios from 'axios';
// axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: 'http://localhost:3030', // API의 기본 URL 설정
  withCredentials: true,
});

export default api;
