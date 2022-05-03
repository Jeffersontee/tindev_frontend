import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login';
import Main from './pages/Main';
import ErroPage from './pages/ErrorPage';

// caso entre Router o <Login /> ele vai fica repetindo nao importa a rota que colocar
function App() {
	return (
    <Router>
      <nav>
        <Link to="/"> Login</Link>
        <Link to="/main"> Main</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<ErroPage />} />
      </Routes>
    </Router>
  );
}

export default App;