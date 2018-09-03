import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import {compose} from 'Utils/compose';
import UserMenu from 'Components/UserMenu/UserMenu';
import {showLoginForm, hideLoginForm} from 'Actions/setShowLoginForm';

const styles = {
  logo: {
    height: '40px'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};

class Header extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    auth: PropTypes.object,
    openLoginForm: PropTypes.func.isRequired,
    hideLoginForm: PropTypes.func.isRequired
  };

  render() {
    const {classes, auth, openLoginForm} = this.props;

    return (
      <div>
        <AppBar position='static' color='primary'>
          <Toolbar className={classes.toolbar}>
            <div>
              <Link to='/about'>
                <img className={classes.logo} src='/static/logo.png' alt='logo' />
              </Link>
            </div>
            <div>
              <UserMenu auth={auth} openLoginForm={openLoginForm} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openLoginForm: () => dispatch(showLoginForm()),
  hideLoginForm: () => dispatch(hideLoginForm())
});

const mapStateToProps = state => ({
  auth: state.auth,
  showLoginForm: state.showLoginForm
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Header);
