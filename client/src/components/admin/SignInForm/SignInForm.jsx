import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn } from '../../../actions';
import Input from '../Input/Input';
import FormGroup from '../FormGroup/FormGroup';
import Button from '../Button/Button';

const SignInForm = ({ auth: { loading, errors }, signIn }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    signIn(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign in</h3>
      <FormGroup>
        <Input name="username" label="Username" onChange={handleChange} value={formData.username} />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          label="Password"
          onChange={handleChange}
          value={formData.password}
        />
      </FormGroup>
      {errors ? errors.map(error => <p>{error}</p>) : null}
      <FormGroup>
        <Button type="submit" text={loading ? 'Loading' : 'Sign In'} />
      </FormGroup>
    </form>
  );
};

SignInForm.propTypes = {
  signIn: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { signIn })(SignInForm);
