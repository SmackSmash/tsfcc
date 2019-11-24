import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { signIn } from '../../../actions';
import CardHeader from '../CardHeader/CardHeader';
import Input from '../Input/Input';
import Error from '../Error/Error';
import FormGroup from '../FormGroup/FormGroup';
import Button from '../Button/Button';

const SignInForm = ({ auth: { loading, errors, isAuthenticated }, signIn }) => {
  const initialValues = {
    username: '',
    password: ''
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup
      .string()
      .required()
      .min(6)
  });

  const onSubmit = formValues => {
    console.log(formValues);
    signIn(formValues);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <CardHeader>Sign In</CardHeader>
          <FormGroup>
            <Input
              name="username"
              label="Username"
              error={formik.errors.username && formik.touched.username ? true : false}
              errorMessage={formik.errors.username}
              {...formik.getFieldProps('username')}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              label="Password"
              error={formik.errors.password && formik.touched.password ? true : false}
              errorMessage={formik.errors.password}
              {...formik.getFieldProps('password')}
            />
          </FormGroup>
          {errors ? errors.map(errorMessage => <Error errorMessage={errorMessage} />) : null}
          <FormGroup>
            <Button
              type="submit"
              disabled={loading ? true : false}
              text={loading ? 'Loading' : 'Sign In'}
            />
          </FormGroup>
        </form>
      )}
    </Formik>
  );
};

SignInForm.propTypes = {
  signIn: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { signIn })(SignInForm);
