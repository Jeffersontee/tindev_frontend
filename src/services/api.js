import axios from 'axios';


const api = axios.create({
	baseURL: 'http://localhost:8555'
});

export default api;