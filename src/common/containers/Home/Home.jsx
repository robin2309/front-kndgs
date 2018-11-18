import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getPostsActionCreator} from 'Actions/posts';
import PostItem from 'Components/PostItem/PostItem';

class Home extends React.Component {
  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const {posts} = this.props;
    return (
      <div className='home'>
        {
          posts.data && posts.data.items &&
          posts.data.items.map((post, i) => (
            <PostItem key={post.id} {...post} />
          ))
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsActionCreator())
});

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
