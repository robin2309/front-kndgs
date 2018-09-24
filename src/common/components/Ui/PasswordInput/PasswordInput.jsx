import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const PasswordInput = ({input}) => {
  const { value, onChange, name } = input;
  const upperCaseName = name.charAt(0).toUpperCase() + name.substr(1);
  return (
    <div>
      <TextField
        label={upperCaseName}
        value={value}
        onChange={onChange}
        margin='normal'
        type='password'
        />
    </div>
  );
};

PasswordInput.propTypes = {
  input: PropTypes.object.isRequired
};

export default PasswordInput;
