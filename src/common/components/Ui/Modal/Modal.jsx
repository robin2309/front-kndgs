import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    boxShadow: '5px 5px 5px 0px rgba(136,136,136,1)',
    padding: '15px',
    position: 'fixed'
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0, 0.5)'
  }
};

const CustomModal = ({children, open, onClose, onEscapeKeyDown, classes}) => {
  const modalProps = {
    open,
    onClose,
    onEscapeKeyDown,
    tabIndex: 1
  };
  return (
    <Modal {...modalProps}>
      <div className={classes.modal}>
        {children}
      </div>
    </Modal>
  );
};

CustomModal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onEscapeKeyDown: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomModal);
