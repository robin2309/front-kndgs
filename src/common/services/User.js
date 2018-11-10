import request from './request';

class User {
  logIn(data) {
    return request('/auth', 'POST', null, data);
  }
}

export default User;
