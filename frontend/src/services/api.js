import axios from 'axios';

// Creating an Axios instance pointing to our port 5001 backend API
const API = axios.create({
    baseURL: 'http://localhost:5001',
});

// Adding an interceptor to inject the token into requests automatically
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Apply the bearer
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default API;
