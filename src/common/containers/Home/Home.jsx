import React from 'react';
import { connect } from 'react-redux';
import {getPostsActionCreator} from 'Actions/posts';

class Home extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>HOME</div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: dispatch(getPostsActionCreator())
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
