import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TextInput = ({input}) => {
  const { value, onChange } = input;
  return (
    <div>
      <TextField
        id='standard-name'
        label='Name'
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
