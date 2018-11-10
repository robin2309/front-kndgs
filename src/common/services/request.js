import axios from 'axios';

import nameHelpers from 'Actions/nameHelpers';
import { API_URL } from 'Configs';

const actionPending = actionName => ({
  type: nameHelpers.pendingType(actionName),
  payload: {}
});

const actionRejected = (actionName, error) => ({
  type: nameHelpers.rejectedType(actionName),
  payload: {
    error
  }
});

const actionFulfilled = (actionName, items) => ({
  type: nameHelpers.fulfilledType(actionName),
  payload: {
    items
  }
});

export default (url, method, params, data) => {
  //dispatch(actionPending(actionName));

  const config = Object.assign(
    {url: `${API_URL}/${url}`},
    {method},
    params ? {params} : null,
    data ? {data} : null
  );

  console.log(config);

  return axios(config);/*.then(
    response => dispatch(actionFulfilled(actionName, response.data)),
    error => {
      dispatch(actionRejected(actionName, error));
      throw new Error(error);
    }
  );*/
};
