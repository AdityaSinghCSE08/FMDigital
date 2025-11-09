import axios from "axios";

const token = localStorage.getItem("token");
const api = axios.create({
    baseURL: "https://api.fmdigitalofficial.com/api/v1",
    // Temporarily disabled withCredentials due to CORS issues
    // withCredentials: true, // Enable cookies
    headers: {
        'Content-Type': 'application/json',
        // Remove CORS headers as they should be set by server
        // 'Access-Control-Allow-Credentials': true,
        // "Access-Control-Allow-Origin": "*",
    }
});

const setAuthToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

// Interceptor to call setAuthToken before each request
api.interceptors.request.use(
    (config) => {
        setAuthToken();
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;