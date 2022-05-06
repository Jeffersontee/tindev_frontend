import { useParams, Link } from 'react-router-dom';
import './Main.css';

import api from '../services/api';

import logo from '../assets/logo.svg';
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import { useEffect, useState } from 'react';


export default function Main() {
	const [users, setUsers] = useState([])
	let { id } = useParams();


	console.log("O que traz", id);
	
	useEffect(() => { 
			async function loadUsers() {
				const response = await api.get('/devs', {
					headers: { 
						user: id,
					}
				})
				setUsers(response.data);
			}

			loadUsers();
		}, [id]) // vetor de dependencia de useEffet não utilizar async dentro do arrow function

	async function handleLike(idUser) {
		console.log("like", idUser);
    await api.post(`/devs/${idUser}/likes`, null, {
      headers: { user: id },
    });
    //sempre que for fazer um spli ou slice filter preciso chamar o setUser nunca o user mesmo sendo um array
    setUsers(users.filter((user) => user._id !== idUser));
	}	
	//api para pegar o header , null pula o body e vai para header
	async function handleDislike(idUser) {
    console.log("dislike", idUser);
    await api.post(`/devs/${idUser}/dislikes`, null, {
      headers: { user: id },
		});
		//sempre que for fazer um spli ou slice filter preciso chamar o setUser nunca o user mesmo sendo um array
		setUsers(users.filter(user => user._id !== idUser))
  }	
	
	// user map não precisa usar return user => (( ))
	return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.name} />
              <footer>
                <h1>{user._id}</h1>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>

              <div className="buttons">
                <button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt="Dislike" />
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="Like" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">Acabou :(</div>
      )}
    </div>
  );
}