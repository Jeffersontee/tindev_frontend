import axios from 'axios';


const api = axios.create({
	baseURL: 'http://localhost:8455'
});

export default api;