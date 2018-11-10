import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._logOut = this._logOut.bind(this);

    this.state = {
      anchorEl: null
    };
  }

  _handleClick(event) {
    const { user, openLoginForm } = this.props;
    if ((user.data || {}).name) this.setState({ anchorEl: event.currentTarget });
    else openLoginForm();
  }

  _handleClose() {
    this.setState({ anchorEl: null });
  }

  _logOut() {
    window.location.href = '/logout';
  }

  render() {
    const { anchorEl } = this.state;
    const { user } = this.props;
    return (
      <div className='user-menu'>
        <IconButton
          onClick={this._handleClick}
          className='user-menu__image'
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup='true'
        >
          <Icon>account_circle</Icon>
        </IconButton>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={this._handleClose}
        >
          <MenuItem disabled>{user && user.data && user.data.name}</MenuItem>
          <MenuItem onClick={this._logOut}>
            <ListItemIcon>
              <Icon>exit_to_app</Icon>
            </ListItemIcon>
            <ListItemText inset primary='Sign out' />
          </MenuItem>
        </Menu>
      </div>
    );
  }
};

UserMenu.propTypes = {
  user: PropTypes.object,
  openLoginForm: PropTypes.func.isRequired
};

export default UserMenu;
