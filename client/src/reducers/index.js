import { combineReducers } from 'redux';
import propertiesReducer from './propertiesReducer';
import authReducer from './authReducer';

export default combineReducers({
  properties: propertiesReducer,
  auth: authReducer
});
