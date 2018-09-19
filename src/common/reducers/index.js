import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import showLoginForm from './showLoginForm';

const myApp = {
  auth,
  form: formReducer,
  showLoginForm
};

export default myApp;
