import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (field) => {
  return (
    <div>
      <input {...field.input} type='text' />
    </div>
  );
};

TextInput.propTypes = {
  field: PropTypes.object.isRequired
};

export default TextInput;
