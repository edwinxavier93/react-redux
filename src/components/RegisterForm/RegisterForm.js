import React, { Component } from 'react';
import { reduxForm, Field, propTypes, fieldPropTypes } from 'redux-form';
import { Col } from 'react-bootstrap';
import registerValidation from './registerValidation';
import styles from './RegisterForm.scss';

const Input = ({
  input, type, placeholder, meta: { touched, error }, label
}) => (
  <div className="m-b-20 p-0">
    <input {...input} placeholder={placeholder} type={type} />
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
  form: 'register',
  validate: registerValidation
})
export default class RegisterForm extends Component {
  static propTypes = {
    ...propTypes
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="login-form" onSubmit={handleSubmit}>
        <Field
          name="name"
          type="text"
          component={Input}
          placeholder="Your name"
          label="Name"
        />
        <Field
          name="email"
          type="text"
          component={Input}
          placeholder="Your email"
          label="Email"
        />
        <Field
          name="password"
          type="password"
          component={Input}
          placeholder="Select a password"
          label="Password"
        />
        <Field
          name="confirmpassword"
          type="password"
          component={Input}
          placeholder="Confirm password"
          label="Confirm-Password"
        />
        <div className={styles.policy}>
          <Field type="checkbox" component="input" name="policyagree" value="" id="policyagree" />
          <label htmlFor="policyagree" />
          <span className={styles.policyText}>
            I certify that I am 18 years of age or older,
            and I agree to the <b>User Agreement</b> and <b>Privacy Policy</b>.
          </span>
        </div>
        <div className={`${styles.submitBtn}`}>
          <button className="btn btn-teal">Create account</button>
        </div>
      </form>
    );
  }
}
