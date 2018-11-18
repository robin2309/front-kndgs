import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

const Vote = ({upVotes, downVotes, idPost, onUpVote, onDownVote}) => {
  const votes = upVotes - downVotes;
  return (
    <div className='vote'>
      <Icon>keyboard_arrow_up</Icon>
      {votes}
      <Icon>keyboard_arrow_down</Icon>
    </div>
  );
};

Vote.propTypes = {
  idPost: PropTypes.string.isRequired,
  upVotes: PropTypes.number.isRequired,
  downVotes: PropTypes.number.isRequired
};

export default Vote;
