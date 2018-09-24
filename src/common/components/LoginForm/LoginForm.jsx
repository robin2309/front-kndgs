import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import TextInput from 'Ui/TextInput/TextInput';
import PasswordInput from 'Ui/PasswordInput/PasswordInput';
import {compose} from 'Utils/compose';

const styles = {
  container: {
    width: '300px'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  fieldsContainer: {
    display: 'flex'
  }
};

class LoginForm extends Component {
  render() {
    const {handleSubmit, classes} = this.props;
    return (
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <Field name='username' component={TextInput} />
          <Field name='password' component={PasswordInput} />
          <div className={classes.buttonContainer}>
            <Button type='submit' variant='contained' color='primary'>
              Log in
            </Button>
          </div>
        </form>
      </div>
    );
  }
};

export default compose(
  withStyles(styles),
  reduxForm({ form: 'login' })
)(LoginForm);
