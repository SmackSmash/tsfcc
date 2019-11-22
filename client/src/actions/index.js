import { FETCH_PROPERTIES, SIGN_IN } from './types';

export const fetchProperties = () => ({ type: FETCH_PROPERTIES });

export const signIn = formData => ({
  type: SIGN_IN,
  payload: formData
});
