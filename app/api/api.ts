import axios from 'axios';

let token: string | null;

// run this only in clinet side
if (typeof window !== "undefined") {
    token = localStorage.getItem("token")
}

const api = axios.create({
    // TODO: change this to env
    baseURL: "http://localhost:8080"
})

api.interceptors.request.use((config) => {
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
})

export default api;