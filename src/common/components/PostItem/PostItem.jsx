import React from 'react';
import PropTypes from 'prop-types';

import VoteContainer from 'Containers/VoteContainer/VoteContainer';

const PostItem = ({createdAt, id, upVotes, downVotes, link, title}) => {
  return (
    <div className='post-item'>
      <VoteContainer
        upVotes={upVotes}
        downVotes={downVotes}
        idPost={id}
      />
      <a className='post-item__link' href={link} target='_blank'>
        <h2 className='post-item__title'>{title}</h2>
      </a>
    </div>
  );
};

PostItem.propTypes = {
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  upVotes: PropTypes.number.isRequired,
  downVotes: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PostItem;
