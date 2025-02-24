import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

const Routes: React.FC = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:login" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;