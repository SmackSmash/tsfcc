import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../../../pages/admin/Loading/Loading';
import Admin from '../../../containers/Admin/Admin';
import SignInForm from '../../../components/admin/SignInForm/SignInForm';
import './SignIn.scss';

const SignIn = ({ isAuthenticated, loading }) => {
  return !isAuthenticated && !loading ? (
    <Admin>
      <div className="sign-in">
        <SignInForm />
      </div>
    </Admin>
  ) : loading ? (
    <Loading />
  ) : (
    <Redirect to="/dashboard" />
  );
};

const mapStateToProps = ({ auth: { isAuthenticated, loading } }) => ({ isAuthenticated, loading });

export default connect(mapStateToProps)(SignIn);
