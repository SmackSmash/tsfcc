import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/common/Home/Home';
import Properties from './pages/common/Properties/Properties';
import SignIn from './pages/admin/SignIn/SignIn';
import './App.scss';

import FormTest from './pages/FormTest';

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/formtest" component={FormTest} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
