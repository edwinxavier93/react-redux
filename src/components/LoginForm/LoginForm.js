import React, { Component } from 'react';
import { reduxForm, Field, propTypes, fieldPropTypes } from 'redux-form';
import { Col } from 'react-bootstrap';
import styles from './LoginForm.scss';
import loginValidation from './loginValidation';

const Input = ({
  input, placeholder, type, meta: { touched, error }, label
}) => (
  <div className="m-b-20 p-0">
    <input {...input} type={type} placeholder={placeholder} />
    {error &&
      touched && (
        <div className="error-message">
          {`${label} ${error}`}
        </div>
      )}
  </div>
);

Input.propTypes = fieldPropTypes;

@reduxForm({
  form: 'login',
  validate: loginValidation
})
export default class LoginForm extends Component {
  static propTypes = {
    ...propTypes
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="login-form" onSubmit={handleSubmit}>
        <Field
          name="email"
          type="text"
          component={Input}
          placeholder="Your email"
          label="E-mail"
        />
        <Field
          name="password"
          type="password"
          component={Input}
          placeholder="Your password"
          label="Password"
        />
        <div sm={12} className={`m-b-20 ${styles.forgotLink}`}>
          Forgot password?
        </div>
        <div className={`${styles.submitBtn}`}>
          <button className="btn btn-teal">Log in</button>
        </div>
      </form>
    );
  }
}
