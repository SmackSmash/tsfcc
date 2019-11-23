import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../actions/types';

// Watchers
export function* watchSignIn() {
  yield takeLatest(SIGN_IN, signInAsync);
}

// Workers
function* signInAsync(action) {
  try {
    const response = yield axios.post('/api/users/signin', action.payload);
    localStorage.setItem('token', response.data.token);
    yield put({
      type: SIGN_IN_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
    localStorage.removeItem('token');
    const errors = error.response.data.errors;
    yield put({
      type: SIGN_IN_ERROR,
      payload: errors
    });
  }
}