import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import './FormTest.scss';

const FormTest = props => {
  const initialValues = {
    username: '',
    password: ''
  };

  const onSubmit = values => {
    console.log(values);
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required()
      .min(5),
    password: yup
      .string()
      .required()
      .min(5)
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {formik => (
        <form className="test" onSubmit={formik.handleSubmit}>
          {/* VERBOSE */}
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username && formik.touched.username ? (
            <p className="error">{formik.errors.username}</p>
          ) : null}
          {/* TERSE */}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : null}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default FormTest;
