import React from 'react';
import { BrowserRouter ,Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

function Routes() {
	return (
    <div>
      <BrowserRouter>
        
          <Route path="/" exact component={Login} />
          <Route path="/main" component={Main} />
        
      </BrowserRouter>
    </div>
  );
}

export default Routes;