import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Create an Axios instance with base configuration
const AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to set the Authorization token in request headers
export function setToken(config: InternalAxiosRequestConfig, idToken = '') {
    if (!idToken) return config;
    return config.headers.Authorization = `Bearer ${idToken}`;
}

// Request interceptor to include the token from local storage
AxiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('sessionId');
        if (token) {
            setToken(config, token);
        }
        return config;
    },
    (error: AxiosError) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
AxiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // Handle successful responses
        return response;
    },
    async (error: AxiosError) => {
        // if (error.response?.status === 401) {
        //     console.warn('Unauthorized access, logging out.');
        //     handleLogout();
        //     return Promise.reject(error);
        // } else {
        //     console.error('Response error:', error);
        //     return Promise.reject(error);
        // }
    }
);

// A separate Axios instance for requests without authentication
export const ApiNoAuth = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Utility function to store the access token in local storage
export const setAccessToken = (token: string) => {
    localStorage.setItem('sessionId', token);
};

export default AxiosInstance;