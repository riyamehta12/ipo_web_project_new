import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/', // Adjust if your backend runs elsewhere
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
