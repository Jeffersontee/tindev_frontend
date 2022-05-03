import "./Login.css";
import logo from "../assets/logo.svg";

function Login() {
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="Tindev" />
        <input placeholder="Digite seu usuário no Github" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login; // ou pode ser usar na função como default
