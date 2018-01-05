import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './Footer.scss';

export default class Footer extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string
    })
  };

  static defaultProps = {
    user: null
  };

  render() {
    const { user } = this.props;
    return (
      <div className={styles.footerSection}>
        {user ?
          <div className={styles.authFooter}>
            <Col md={8} sm={7} xs={6} className={styles.pad_R_0}>
              <Col mdOffset={1} md={11} sm={11} smOffset={1} xs={12} className={styles.pad_0}>
              © 2017 Cantwaittotrade
              </Col>
            </Col>
            <Col md={4} sm={5} xs={6} className={styles.pad_0}>
              <Col md={2} sm={2} xs={3} smOffset={2} className={styles.pad_0}>
                <LinkContainer to="/about"><div className={styles.link}>Home</div></LinkContainer>
              </Col>
              <Col md={2} sm={2} xs={3} className={styles.pad_0}>
                <LinkContainer to="/terms"><div className={styles.link}>Terms</div></LinkContainer>
              </Col>
              <Col md={2} sm={2} xs={2} className={styles.pad_0}>
                <LinkContainer to="/faq"><div className={styles.link}>FAQ</div></LinkContainer>
              </Col>
              <Col md={2} sm={2} xs={2} className={styles.pad_0}>
                <LinkContainer to="/contact"><div className={styles.link}>Contact</div></LinkContainer>
              </Col>
            </Col>
          </div>
          :
          <div className={styles.footer}>
            <Col
              lg={6}
              lgOffset={3}
              md={8}
              mdOffset={2}
              sm={10}
              smOffset={1}
              xs={12}
              className={styles.footerContainer}
            >
              <Col md={6} sm={6} xs={12} className={styles.email}>
                <LinkContainer to="/contact">
                  <div className={styles.link}>Contact us at info@cantwaitotrade.com</div>
                </LinkContainer>
              </Col>
              <Col md={2} sm={2} xs={4} className={styles.footerMenu}>
                <LinkContainer to="/faq"><div className={styles.link}>FAQ</div></LinkContainer>
              </Col>
              <Col md={2} sm={2} xs={3} className={styles.footerMenu}>
                <LinkContainer to="/terms"><div className={styles.link}>Terms</div></LinkContainer>
              </Col>
              <Col md={2} sm={2} xs={3}>
                <a href="https://twitter.com/" className={styles.whiteColor}>
                  <i className={`fa fa-twitter ${styles.twitterIcon}`} aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/" className={styles.whiteColor}>
                  <i className={`fa fa-linkedin ${styles.linkedIcon}`} aria-hidden="true" />
                </a>
              </Col>
              <Col md={12} sm={12} xs={12} className={styles.about}>
                  Cantwaitotrade is a company registered in England and Wales (No. 08256820). Cantwaitotrade Ltd is
                  authorised by the Prudential Regulation Authority (PRA) and regulated by the Financial
                  Conduct Authority and the PRA. Our Financial Services Register number is 1849273.
              </Col>
            </Col>
          </div>
        }
      </div>
    );
  }
}
