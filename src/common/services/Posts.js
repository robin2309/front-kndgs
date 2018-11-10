import request from './request';

class Posts {
  /**
   * Get top posts
   * @returns promise with response data
   */
  getTop() {
    return request('/posts', 'GET');
  }
}

export default Posts;
