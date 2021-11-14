import axios from 'axios';

import { getItem } from './storage';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ANALYTICS_ID,
});

api.interceptors.request.use(async (config) => {
  let token = '';

  if (typeof window !== 'undefined') {
    token = getItem('token');
  }
  if (token?.token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token.token}`,
    };
  }
  return config;
});

export default api;
