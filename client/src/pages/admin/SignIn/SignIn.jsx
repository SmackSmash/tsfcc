import React from 'react';
import Admin from '../../../containers/Admin/Admin';
import SignInForm from '../../../components/admin/SignInForm/SignInForm';
import './SignIn.scss';

const SignIn = props => {
  return (
    <Admin>
      <div className="sign-in">
        <SignInForm />
      </div>
    </Admin>
  );
};

export default SignIn;
