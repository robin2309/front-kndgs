import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';

import TextInput from 'Ui/TextInput/TextInput';
import {compose} from 'Utils/compose';

class LoginForm extends Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field name='username' component={TextInput} />
          <Field name='username' component={TextInput} />
          <Button variant='contained' color='primary' onClick={handleSubmit}>
            Log in
          </Button>
        </form>
      </div>
    );
  }
};

export default compose(
  reduxForm({ form: 'login' })
)(LoginForm);
