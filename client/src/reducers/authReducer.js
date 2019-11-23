import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../actions/types';

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
  errors: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...INITIAL_STATE, loading: true };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        errors: null
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        errors: action.payload
      };
    default:
      return state;
  }
};