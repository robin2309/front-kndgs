
export const loginActionCreator = (data) => (dispatch, getState, {User}) => {
  console.log(User);
  console.log(data);
  console.log(dispatch);
  console.log(getState());
  console.log('mamen');
};