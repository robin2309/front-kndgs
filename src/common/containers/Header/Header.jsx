import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Modal from 'Ui/Modal/Modal';

import {compose} from 'Utils/compose';
import UserMenu from 'Components/UserMenu/UserMenu';
import {showLoginForm, hideLoginForm} from 'Actions/setShowLoginForm';
import LoginForm from 'Components/LoginForm/LoginForm';
import {loginActionCreator} from 'Actions/login';

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
    user: PropTypes.object,
    onLogin: PropTypes.func.isRequired,
    openLoginForm: PropTypes.func.isRequired,
    hideLoginForm: PropTypes.func.isRequired,
    showLoginForm: PropTypes.bool.isRequired
  };

  render() {
    const {classes, user, onLogin, hideLoginForm, showLoginForm, openLoginForm} = this.props;
    const showModal = showLoginForm;
    return (
      <div>
        <Modal
          open={showModal}
          onClose={hideLoginForm}
          onEscapeKeyDown={hideLoginForm}
          onBackdropClick={hideLoginForm}
        >
          <LoginForm onSubmit={onLogin} />
        </Modal>
        <AppBar position='static' color='primary'>
          <Toolbar className={classes.toolbar}>
            <div>
              <Link to='/about'>
                <img className={classes.logo} src='/static/logo.png' alt='logo' />
              </Link>
            </div>
            <div>
              <UserMenu user={user} openLoginForm={openLoginForm} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openLoginForm: () => dispatch(showLoginForm()),
  hideLoginForm: () => dispatch(hideLoginForm()),
  onLogin: (data) => dispatch(loginActionCreator(data))
});

const mapStateToProps = state => ({
  user: state.user,
  showLoginForm: state.showLoginForm
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Header);
