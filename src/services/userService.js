import axios from "axios";

const API_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
    const authStore = localStorage.getItem('auth-store');
    if (authStore) {
      const parsedStore = JSON.parse(authStore);
      if (parsedStore.state.token) {
        config.headers.Authorization = `Bearer ${parsedStore.state.token}`;
      }
    }
    return config;
  });

  export const getUsers = async () => {
   try {
    const response = await api.get('/api/users')
    return response.data;
   } catch (error) {
    console.error("getUser error:", error);
    return { error: error.message || "getUser failed" };
   }
  };