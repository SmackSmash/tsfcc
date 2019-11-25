import { FETCH_PROPERTIES, SIGN_IN, LOAD_USER, NO_USER } from './types';

export const loadUser = () => ({ type: LOAD_USER });

export const noUser = () => ({ type: NO_USER });

export const signIn = formData => ({
  type: SIGN_IN,
  payload: formData
});

export const fetchProperties = () => ({ type: FETCH_PROPERTIES });
