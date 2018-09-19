import constants from 'Actions/constants';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_LOGIN_FORM:
      return true;
    case constants.HIDE_LOGIN_FORM:
      return false;
    default:
      return state;
  }
};
