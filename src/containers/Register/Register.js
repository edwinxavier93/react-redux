import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import * as authActions from 'redux/modules/auth';
import * as notifActions from 'redux/modules/notifs';
import styles from './Register.scss';
import config from '../../config';

@connect(() => ({}), { ...notifActions, ...authActions, pushState: push })
export default class Register extends Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.object
    }).isRequired,
    register: PropTypes.func.isRequired,
    notifSend: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  getInitialValues = () => {
    const { location } = this.props;
    return location.state && location.state.oauth;
  };

  register = data => {
    console.log('======= reg data 1111 ======', data);
    // this.props.register(data);
    this.successRegister();
  };

  successRegister = () => {
    this.props.notifSend({
      message: 'You\'r now registered !',
      kind: 'success',
      dismissAfter: 2000
    });
    this.props.pushState('/login');
  };

  render() {
    return (
      <div className="container">
        <Helmet {...config.app.head} title="Register" />
        <div className={styles.register}>
          <div className={`${styles.registerPage} container`}>
            <div className={`align-middle ${styles.registerForm}`}>
              <div className={`jumbotron ${styles.registerBody}`} >
                <h2>Create a new account</h2>
                <RegisterForm onSubmit={this.register} initialValues={this.getInitialValues()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
