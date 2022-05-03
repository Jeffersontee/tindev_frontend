import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";

function Way() {
	return (
    <Router>
      <nav>
        <Link to="/"> Login</Link>
        <Link to="/main"> Main</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default Way;