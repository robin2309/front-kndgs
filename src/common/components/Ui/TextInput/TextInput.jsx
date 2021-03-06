import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TextInput = ({input}) => {
  const { value, onChange, name } = input;
  const upperCaseName = name.charAt(0).toUpperCase() + name.substr(1);
  return (
    <div>
      <TextField
        label={upperCaseName}
        value={value}
        onChange={onChange}
        margin='normal'
        />
    </div>
  );
};

TextInput.propTypes = {
  input: PropTypes.object.isRequired
};

export default TextInput;
