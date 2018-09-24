import request from 'Reducers/requestThunk';

class User {
  constructor() {
    console.log('ce genre de user');
  }

  logIn(data) {
    return request('/CONFIG');
  }
};

export default User;
