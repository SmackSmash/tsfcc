import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  LOAD_USER,
  AUTH_ERROR,
  AUTH_SUCCESS
} from '../actions/types';

// Watchers
export function* watchSignIn() {
  yield takeLatest(SIGN_IN, signInAsync);
}

export function* watchLoadUser() {
  yield takeLatest(LOAD_USER, loadUserAsync);
}

// Workers
function* signInAsync(action) {
  try {
    const response = yield axios.post('/api/users/signin', action.payload);
    const { token } = response.data;
    localStorage.setItem('token', token);
    const decoded = yield jwt.decode(token);
    yield put({
      type: SIGN_IN_SUCCESS,
      payload: {
        token,
        user: decoded.user
      }
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

function* loadUserAsync() {
  try {
    const response = yield axios.get('/api/users');
    if (response.data.errors) {
      console.error(response.data.errors);
      localStorage.removeItem('token');
      const errors = response.data.errors;
      yield put({
        type: AUTH_ERROR,
        payload: errors
      });
    } else {
      yield put({
        type: AUTH_SUCCESS,
        payload: {
          token: localStorage.getItem('token'),
          user: response.data.username
        }
      });
    }
  } catch (error) {
    console.error(error);
    localStorage.removeItem('token');
    const errors = error.response.data.errors;
    yield put({
      type: AUTH_ERROR,
      payload: errors
    });
  }
}
