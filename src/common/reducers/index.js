import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import auth from './auth';

const myApp = combineReducers({
  auth,
  form: formReducer
});

export default myApp;
