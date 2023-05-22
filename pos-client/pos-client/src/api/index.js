import axios from "axios";

// axios instance
const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api;