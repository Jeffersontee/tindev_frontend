import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
//import ErrorPage from "./pages/ErrorPage";

/*
 <nav>
   <Link to="/"> Login</Link>
   <Link to="/main"> Main</Link>
 </nav>;
*/

function Router() {
	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dev/:id" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;