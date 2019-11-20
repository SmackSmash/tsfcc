import { FETCH_PROPERTIES_SUCCESS, FETCH_PROPERTIES_ERROR } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES_SUCCESS:
      return action.payload;
    case FETCH_PROPERTIES_ERROR:
    default:
      return state;
  }
};
