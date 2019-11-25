import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser, noUser } from './actions';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './containers/PrivateRoute/PrivateRoute';
import Home from './pages/common/Home/Home';
import Properties from './pages/common/Properties/Properties';
import SignIn from './pages/admin/SignIn/SignIn';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import './App.scss';

import FormTest from './pages/FormTest';
import Loading from './pages/common/Loading/Loading';

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
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/formtest" component={FormTest} />
        <Route exact path="/loading" component={Loading} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  loadUser: propTypes.func.isRequired,
  noUser: propTypes.func.isRequired
};

export default connect(null, { loadUser, noUser })(App);
