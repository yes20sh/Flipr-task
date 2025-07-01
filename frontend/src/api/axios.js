// client/src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://flipr-task-backend.onrender.com/api",
  withCredentials: true, // allow cookies for session auth
});

export default axiosInstance;
