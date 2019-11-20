import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { watchFetchProperties } from './sagas/propertiesSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, {}, enhancers);

sagaMiddleware.run(watchFetchProperties);

export default store;
