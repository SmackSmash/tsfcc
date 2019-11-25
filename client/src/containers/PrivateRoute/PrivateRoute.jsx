import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuthenticated, loading, ...rest }) => {
  console.log(isAuthenticated, loading);
  return (
    <Route
      {...rest}
      render={props => (!isAuthenticated && !loading ? <Redirect to="/signin" /> : <Component />)}
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = ({ auth: { isAuthenticated, loading } }) => ({ isAuthenticated, loading });

export default connect(mapStateToProps)(PrivateRoute);
