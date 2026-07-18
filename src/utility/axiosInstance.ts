import axios, { type InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { API_URL, TOKEN } from './constants';
import { logoutApp } from './commonServices';

const axiosInstance = axios.create({
  baseURL: API_URL
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get(TOKEN);

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      logoutApp();
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
