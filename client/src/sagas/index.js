import { all } from 'redux-saga/effects';
import { watchFetchProperties } from './propertiesSaga';
import { watchSignIn } from './authSaga';

export default function* rootSaga() {
  yield all([watchFetchProperties(), watchSignIn()]);
}
