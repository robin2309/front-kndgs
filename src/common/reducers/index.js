import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import user from './user';
import showLoginForm from './showLoginForm';

const myApp = {
  user,
  form: formReducer,
  showLoginForm
};

export default myApp;
