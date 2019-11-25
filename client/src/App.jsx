import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser, noUser } from './actions';
import setAuthToken from './utils/setAuthToken';
import Home from './pages/common/Home/Home';
import Properties from './pages/common/Properties/Properties';
import SignIn from './pages/admin/SignIn/SignIn';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import './App.scss';

import FormTest from './pages/FormTest';

const App = ({ loadUser, noUser }) => {
  useEffect(() => {
    setAuthToken() ? loadUser() : noUser();
  }, [loadUser, noUser]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/formtest" component={FormTest} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  loadUser: propTypes.func.isRequired,
  noUser: propTypes.func.isRequired
};

export default connect(null, { loadUser, noUser })(App);
