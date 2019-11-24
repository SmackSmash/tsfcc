import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { signIn } from '../../../actions';
import Input from '../Input/Input';
import Error from '../Error/Error';
import FormGroup from '../FormGroup/FormGroup';
import Button from '../Button/Button';

const SignInForm = ({ auth: { loading, errors }, signIn }) => {
  const initialValues = {
    username: '',
    password: ''
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  });

  const onSubmit = formValues => {
    console.log(formValues);
    signIn(formValues);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <h3>Sign in</h3>
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
            <Button type="submit" text={loading ? 'Loading' : 'Sign In'} />
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
