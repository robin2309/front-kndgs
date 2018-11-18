import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import user from './user';
import showLoginForm from './showLoginForm';
import posts from './posts';

const myApp = {
  user,
  form: formReducer,
  showLoginForm,
  posts
};

export default myApp;
