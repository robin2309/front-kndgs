import defaultState from './defaultState';
import constants from 'Actions/constants';
import nameHelpers from 'Actions/nameHelpers';

const initialState = {
  ...defaultState
};

const handlers = {
  [nameHelpers.pendingType(constants.GET_POSTS)]: (state, action) => {
    return {
      ...initialState,
      isPending: true
    };
  },
  [nameHelpers.rejectedType(constants.GET_POSTS)]: (state, action) => {
    return {
      ...initialState,
      isRejected: true
    };
  },
  [nameHelpers.fulfilledType(constants.GET_POSTS)]: (state, action) => {
    return {
      ...initialState,
      isFulfilled: true,
      data: action.payload
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
