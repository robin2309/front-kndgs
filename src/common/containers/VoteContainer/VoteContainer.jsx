import { connect } from 'react-redux';

import Vote from 'Components/Vote/Vote';

const mapDispatchToProps = (dispatch) => ({
  onUpVote: () => dispatch({}),
  onDownVote: () => dispatch({})
});

export default connect(null, mapDispatchToProps)(Vote);
