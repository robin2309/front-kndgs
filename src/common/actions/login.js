import constants from './constants';
import helpers from './nameHelpers';
import {hideLoginForm} from './setShowLoginForm';

export const loginActionCreator = (data) => (dispatch, getState, {User}) => {
  dispatch(helpers.actionPending(constants.LOGIN_USER));
  User.logIn(data)
  .then(
    response => {
      dispatch(helpers.actionFulfilled(constants.LOGIN_USER, response.data));
      dispatch(hideLoginForm());
    },
    error => {
      dispatch(helpers.actionRejected(constants.LOGIN_USER, error));
      throw new Error(error);
    }
  );
};
