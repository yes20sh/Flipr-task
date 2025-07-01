// client/src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // allow cookies for session auth
});

export default axiosInstance;
