import { useParams } from 'react-router-dom';
import './Main.css'

import logo from '../assets/logo.svg';
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";


export default function Main() {
	let { id } = useParams();

	return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img
            src="https://avatars.githubusercontent.com/u/2254731?v=4"
            alt=""
          />
          <footer>
            <h1>ID: {id}</h1><strong>Diego Rocket CEO</strong>
            <p>Ceo Rocketset programador!</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars.githubusercontent.com/u/2254731?v=4"
            alt=""
          />
          <footer>
            <h1>ID: {id}</h1><strong>Diego Rocket CEO</strong>
            <p>Ceo Rocketset programador!</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars.githubusercontent.com/u/2254731?v=4"
            alt=""
          />
          <footer>
            <h1>ID: {id}</h1><strong>Diego Rocket CEO</strong>
            <p>Ceo Rocketset programador!</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars.githubusercontent.com/u/2254731?v=4"
            alt=""
          />
          <footer>
            <h1>ID: {id}</h1><strong>Diego Rocket CEO</strong>
            <p>Ceo Rocketset programador!</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}