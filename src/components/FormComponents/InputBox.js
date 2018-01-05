import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

const renderField = ({
  input, placeholder, className, errorMessage, type, meta: { touched, error }
}) =>
  (
    <div>
      <input
        {...input}
        placeholder={placeholder}
        className={className}
        type={type}
      />
      {touched && (error && <div className="error-message">{errorMessage || error}</div>)}
    </div>
  );

renderField.defaultProps = {
  placeholder: '',
  className: '',
  errorMessage: ''
};

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  meta: PropTypes.object.isRequired,
  className: PropTypes.string
};

const InputBox = ({
  label, name, type, className, placeholder, errorMessage, isRequired
}) =>
  (
    <div>
      {label ?
        <label htmlFor={name}>{label}{isRequired ? <span>*</span> : ''}</label>
        : null
      }
      <div>
        <Field
          name={name}
          component={renderField}
          type={type}
          className={className}
          placeholder={placeholder}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );

InputBox.defaultProps = {
  className: '',
  errorMessage: '',
  isRequired: false,
  placeholder: '',
  label: ''
};

InputBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  isRequired: PropTypes.bool
};

export default InputBox;
