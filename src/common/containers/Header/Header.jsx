import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import UserMenu from 'Components/UserMenu/UserMenu';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
  }

  render() {
    const styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    };

    return (
      <div>
        <AppBar position='static' color='primary'>
          <Toolbar style={styles}>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Header);
