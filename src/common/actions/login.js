import request from 'Reducers/requestThunk';
import constants from './constants';

export const loginActionCreator = (data) => (dispatch, getState, {User}) => {
  dispatch(request(
    constants.LOGIN_USER,
    User.logIn.url,
    User.logIn.method,
    null,
    data
  ));
};
