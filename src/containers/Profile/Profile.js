import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Col, Row } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { reduxForm } from 'redux-form';
import * as authActions from 'redux/modules/auth';
import * as notifActions from 'redux/modules/notifs';
import InputBox from '../../components/FormComponents/InputBox';
import { getUserDetailFormConfig, userDetailValidation } from '../../formConfig/UserDetail';
import config from '../../config';
import styles from './Profile.scss';

@reduxForm({
  form: 'userdetail',
  validate: userDetailValidation
})
@connect(
  (state, props) => ({
    user: state.auth.user,
    accessToken: state.auth.accessToken,
    isLogin: state.auth.isLogin
  }),
  { ...notifActions, ...authActions, pushState: push }
)
export default class Profile extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    accessToken: PropTypes.string,
    isLogin: PropTypes.bool,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    notifSend: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: null,
    accessToken: null,
    isLogin: false
  };

  static contextTypes = {
    router: PropTypes.object
  };

  saveUser = data => {
    // evt.preventDefault();
    console.log('======= user data ======', data);
  };

  render() {
    const idIcon = require('../../../static/id-icon.png');
    const mobileIcon = require('../../../static/mobile-icon.png');
    const { handleSubmit, user } = this.props;
    const userDetailFormConfig = getUserDetailFormConfig(this);
    return (
      <div className={`${styles.profilePage} container`}>
        <Helmet {...config.app.head} title="Profile" />
        <div className={styles.profileContainer}>
          <Col sm={12} className={`m-t-45 ${styles.profileSection}`}>
            <div className={styles.alignMiddle}>
              <div className={styles.userAvatar}>
                <i className="fa fa-user-o" aria-hidden="true" />
              </div>
              <div className={styles.userName}>
                John Doe
              </div>
            </div>
          </Col>
          <Col sm={12} xs={12} className={`m-t-45 ${styles.verifySection}`}>
            <div className={styles.headline}>
              Profile verification
            </div>
            <div className={`m-t-10 ${styles.infoMsg}`}>
              Please verify your account before you can start trading.
            </div>
            <div className={`m-t-25 ${styles.verification}`}>
              <Col md={6} sm={6} xs={12} className="p-l-r-0">
                <div className={styles.mobileId}>
                  <Row className={styles.header}>
                    <Col md={1} sm={1} xs={1}>
                      1
                    </Col>
                    <Col lg={9} md={9} sm={8} xs={8}>
                      Mobile verification
                    </Col>
                    <Col md={1} sm={1} xs={1}>
                      <i className="fa fa-question-circle-o" aria-hidden="true" />
                    </Col>
                  </Row>
                  <Row className={styles.content}>
                    <Col lg={3} md={3} sm={3} xs={3}>
                      <img src={mobileIcon} alt="mobile" />
                    </Col>
                    <Col md={8} sm={8} xs={8} className={styles.label}>
                      <button
                        className="btn"
                      >Verify mobile
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={6} sm={6} xs={12} className="p-l-r-0">
                <div className={styles.mobileId}>
                  <Row className={styles.header}>
                    <Col md={1} sm={1} xs={1}>
                      2
                    </Col>
                    <Col lg={9} md={9} sm={8} xs={8}>
                      ID Verification
                    </Col>
                    <Col md={1} sm={1} xs={1}>
                      <i className="fa fa-question-circle-o" aria-hidden="true" />
                    </Col>
                  </Row>
                  <Row className={styles.content}>
                    <Col lg={3} md={3} sm={3} xs={3}>
                      <img src={idIcon} alt="id-icon" />
                    </Col>
                    <Col md={8} sm={8} xs={8} className={styles.label}>
                      <button
                        className="btn"
                      >Upload photo
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </div>
          </Col>
          <Col sm={12} xs={12} className={`m-t-45 ${styles.largeBtn}`}>
            <button
              className="btn blue-bg"
            ><i className="fa fa-lock p-r-10" aria-hidden="true" />Change password
            </button>
          </Col>
          <Col sm={12} xs={12} className={`m-t-45 ${styles.detailSection}`}>
            <div className={styles.headline}>
              Personal details
            </div>
            <form className={styles.userForm} onSubmit={handleSubmit(this.saveUser)}>
              <Row className={`m-0 ${styles.formRow}`}>
                <Col lg={2} md={2} sm={4} xs={12} className={styles.label}>
                  First name
                </Col>
                <Col lg={4} md={4} sm={8} xs={12} className={styles.field}>
                  <InputBox {...userDetailFormConfig.fields.firstname} />
                </Col>
                <Col lg={2} md={2} sm={4} xs={12} className={styles.label}>
                  Last name
                </Col>
                <Col lg={4} md={4} sm={8} xs={12} className={styles.field}>
                  <InputBox {...userDetailFormConfig.fields.lastname} />
                </Col>
              </Row>
              <Row className={`m-0 ${styles.formRow}`}>
                <Col lg={2} md={2} sm={4} xs={12} className={styles.label}>
                  Email address
                </Col>
                <Col lg={5} md={4} sm={8} xs={12} className={styles.field}>
                  <InputBox {...userDetailFormConfig.fields.email} />
                </Col>
                <Col lg={1} md={2} sm={4} xs={12} className={styles.label}>
                  DOB
                </Col>
                <Col lg={4} md={4} sm={8} xs={12} className={styles.field}>
                  <InputBox {...userDetailFormConfig.fields.dob} />
                </Col>
              </Row>
              <Row className={`m-0 ${styles.formRow}`}>
                <Col lg={2} md={2} sm={4} xs={12} className={styles.label}>
                  Mobile number
                </Col>
                <Col lg={5} md={4} sm={8} xs={12} className={styles.field}>
                  <InputBox {...userDetailFormConfig.fields.mobile} />
                </Col>
              </Row>
              <Row className={`m-0 ${styles.formRow}`}>
                <Col lg={2} md={2} sm={4} xs={12} className={styles.label}>
                  Address
                </Col>
                <Col lg={5} md={4} sm={8} xs={12} className={styles.field}>
                  <InputBox {...userDetailFormConfig.fields.address} />
                </Col>
                <Col lg={1} md={2} sm={4} xs={12} className={styles.label}>
                  City
                </Col>
                <Col lg={4} md={4} sm={8} xs={12} className={styles.field}>
                  <InputBox {...userDetailFormConfig.fields.city} />
                </Col>
              </Row>
              <Row className={`m-0 ${styles.formRow}`}>
                <Col lg={2} md={2} sm={4} xs={12} className={styles.label}>
                  Postcode
                </Col>
                <Col lg={2} md={4} sm={8} xs={12} className={styles.field}>
                  <InputBox {...userDetailFormConfig.fields.postcode} />
                </Col>
                <Col lg={2} md={2} sm={4} xs={12} className={styles.label}>
                  Country
                </Col>
                <Col lg={6} md={4} sm={8} xs={12} className={styles.field}>
                  <InputBox {...userDetailFormConfig.fields.country} />
                </Col>
              </Row>
              <Row className={`m-0 ${styles.formRow}`}>
                <Col lg={3} md={3} sm={6} xs={6} className={styles.label}>
                  Agree to terms
                </Col>
                <Col lg={3} md={3} sm={6} xs={6} className={styles.label}>
                  <input
                    type="checkbox"
                    name="readterms"
                  />
                  <a href="/" className={styles.readTerms}>Read terms</a>
                </Col>
                <Col lg={3} md={3} sm={6} xs={12} className={styles.field}>
                  <button
                    className="btn gray-bg"
                  >Cancel
                  </button>
                </Col>
                <Col lg={3} md={3} sm={6} xs={12} className={styles.field}>
                  <button
                    className="btn theme-bg"
                  >Update
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
          <Col sm={12} xs={12} className={`m-t-45 ${styles.largeBtn}`}>
            <button
              className="btn gray-bg"
            ><i className="fa fa-trash p-r-10" aria-hidden="true" />Delete account
            </button>
          </Col>
        </div>
      </div>
    );
  }
}
