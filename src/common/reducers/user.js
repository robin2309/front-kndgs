import defaultState from './defaultState';
import constants from 'Actions/constants';
import nameHelpers from 'Actions/nameHelpers';

const initialState = {
  ...defaultState
};

const handlers = {
  [nameHelpers.pendingType(constants.LOGIN_USER)]: (state, action) => {
    return {
      ...initialState,
      isPending: true
    };
  },
  [nameHelpers.rejectedType(constants.LOGIN_USER)]: (state, action) => {
    return {
      ...initialState,
      isRejected: true
    };
  },
  [nameHelpers.fulfilledType(constants.LOGIN_USER)]: (state, action) => {
    return {
      ...initialState,
      isFulfilled: true,
      data: action.payload.items
    };
  }
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (handler) {
    return handler(state, action);
  }
  return state;
};
