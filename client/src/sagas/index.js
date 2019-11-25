import { all } from 'redux-saga/effects';
import { watchFetchProperties } from './propertiesSaga';
import { watchLoadUser, watchSignIn } from './authSaga';

export default function* rootSaga() {
  yield all([watchFetchProperties(), watchLoadUser(), watchSignIn()]);
}
