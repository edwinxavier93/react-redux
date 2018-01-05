import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import LoginForm from 'components/LoginForm/LoginForm';
import * as authActions from 'redux/modules/auth';
import * as notifActions from 'redux/modules/notifs';
import config from '../../config';
import styles from './Login.scss';

@connect(
  state => ({
    user: state.auth.user,
    accessToken: state.auth.accessToken,
    isLogin: state.auth.isLogin
  }),
  { ...notifActions, ...authActions }
)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    accessToken: PropTypes.string,
    isLogin: PropTypes.bool,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    notifSend: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: null,
    accessToken: null,
    isLogin: false
  };

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.accessToken && this.props.isLogin && !this.props.user) {
      this.props.load();
    }
  }

  login = async data => {
    const result = await this.props.login('local', data);
    this.successLogin();
    return result;
  };

  successLogin = () => {
    this.props.notifSend({
      message: "You'r logged !",
      kind: 'success',
      dismissAfter: 2000
    });
  };

  render() {
    const { user } = this.props;
    return (
      <div className={styles.login}>
        <div className={`${styles.loginPage} container`}>
          <Helmet {...config.app.head} title="Login" />
          <div className={`align-middle ${styles.loginForm}`}>
            {
              !user && (
                <div>
                  <div className={`jumbotron ${styles.loginBody}`} >
                    <h2>Log in</h2>
                    <LoginForm onSubmit={this.login} />
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}
