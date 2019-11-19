import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Properties from './pages/Properties/Properties';
import './App.scss';

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/properties" component={Properties} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
