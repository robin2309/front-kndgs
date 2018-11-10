const pendingType = name => `${name}_PENDING`;
const rejectedType = name => `${name}_REJECTED`;
const fulfilledType = name => `${name}_FULFILLED`;

const actionPending = actionName => ({
  type: pendingType(actionName),
  payload: {}
});

const actionRejected = (actionName, error) => ({
  type: rejectedType(actionName),
  payload: {
    error
  }
});

const actionFulfilled = (actionName, items) => ({
  type: fulfilledType(actionName),
  payload: {
    items
  }
});

export default {
  pendingType,
  rejectedType,
  fulfilledType,
  actionPending,
  actionRejected,
  actionFulfilled
};
