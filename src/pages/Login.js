import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

import api from '../services/api'

import logo from "../assets/logo.svg";

function Login() { 
	let navigate = useNavigate()
	const [username, setUsername] = useState('');
	
	async function handleSubmit(e) {
		console.log(e);
		e.preventDefault();

		const response = await api.post('/devs', {
			username: username
		});

		const { _id } = response.data; 

		navigate(`/dev/${_id}`);
	}

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
				<input
					placeholder="Digite seu usuário no Github"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login; // ou pode ser usar na função como default
