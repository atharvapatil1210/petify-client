import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const signup = (user) => axios.post(`${API_URL}/signup`, user);
export const login = (user) => axios.post(`${API_URL}/login`, user);
