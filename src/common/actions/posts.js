import constants from './constants';
import helpers from './nameHelpers';

export const getPostsActionCreator = () => (dispatch, getState, {Posts}) => {
  dispatch(helpers.actionPending(constants.GET_POSTS));
  Posts.getTop()
  .then(
    response => dispatch(helpers.actionFulfilled(constants.GET_POSTS, response.data)),
    error => {
      dispatch(helpers.actionRejected(constants.GET_POSTS, error));
      throw new Error(error);
    }
  );
};
