import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_PROPERTIES,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_ERROR
} from '../actions/types';

// Watchers
export function* watchFetchProperties() {
  yield takeLatest(FETCH_PROPERTIES, fetchPropertiesAsync);
}

// Workers
function* fetchPropertiesAsync() {
  try {
    const response = yield axios.get('/api/properties');
    if (response.data) {
      yield put({
        type: FETCH_PROPERTIES_SUCCESS,
        payload: response.data
      });
    } else {
      yield put({
        type: FETCH_PROPERTIES_ERROR
      });
    }
  } catch (error) {
    console.error(error.message);
    yield put({
      type: FETCH_PROPERTIES_ERROR
    });
  }
}
