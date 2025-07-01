// client/src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://flipr-task-backend.onrender.com",
  withCredentials: true, // allow cookies for session auth
});

export default axiosInstance;
