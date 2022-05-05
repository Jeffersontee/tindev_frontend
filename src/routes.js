import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";

/*
 <nav>
   <Link to="/"> Login</Link>
   <Link to="/main"> Main</Link>
 </nav>;
*/

function Way() {
	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/devs/:id" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Way;