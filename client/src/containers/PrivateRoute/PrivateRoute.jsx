import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../../pages/admin/Loading/Loading';

const PrivateRoute = ({ component: Component, isAuthenticated, loading, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to="/signin" />
        ) : loading ? (
          <Loading />
        ) : (
          <Component />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = ({ auth: { isAuthenticated, loading } }) => ({ isAuthenticated, loading });

export default connect(mapStateToProps)(PrivateRoute);
