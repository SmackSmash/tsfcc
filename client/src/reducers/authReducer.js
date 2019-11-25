import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR, NO_USER } from '../actions/types';

const INITIAL_STATE = {
  token: null,
  isAuthenticated: null,
  loading: true,
  errors: null,
  user: null
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
        errors: null,
        user: action.payload.user
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        errors: action.payload,
        user: null
      };
    case NO_USER:
      return { ...INITIAL_STATE, loading: false };
    default:
      return state;
  }
};
