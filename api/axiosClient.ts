// libs
import axios from 'axios';
// constants
import { StoreKeys } from 'constants/common';

const axiosClient = axios.create({
  baseURL: ``,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: any) {
    const token = localStorage.getItem(StoreKeys?.TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
