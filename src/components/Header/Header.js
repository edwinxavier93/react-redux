import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import styles from './Header.scss';

export default class Header extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    handleLogout: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: null
  };

  render() {
    const { user } = this.props;
    const logoImg = require('../../../static/Logo.png');
    return (
      <div className={styles.headerSection}>
        <div className={styles.topHeader}>
          <div className={styles.headerBar} />
        </div>
        <Navbar fluid className={styles.menuSection}>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLinkContainer to="/" activeStyle={{ color: '#33e0ff' }} className={styles.title}>
                <div className={styles.brand}>
                  {/* <span>{config.app.title}</span> */}
                  <img src={logoImg} alt="presentation" />
                </div>
              </IndexLinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar pullRight>
              {!user && (
                <LinkContainer to="/home">
                  <NavItem>Home</NavItem>
                </LinkContainer>
              )}
              {!user && (
                <LinkContainer to="/faq">
                  <NavItem>FAQ</NavItem>
                </LinkContainer>
              )}
              {!user && (
                <LinkContainer to="/community">
                  <NavItem>Community</NavItem>
                </LinkContainer>
              )}
              {!user && (
                <LinkContainer to="/register">
                  <NavItem>Sign up</NavItem>
                </LinkContainer>
              )}
              {!user && (
                <LinkContainer to="/login">
                  <NavItem className={styles.login}>
                    <button className={`btn ${styles.loginBtn}`}>Log in</button>
                  </NavItem>
                </LinkContainer>
              )}
              {user && (
                <NavItem><i className="fa fa-user-o p-r-10" aria-hidden="true" />Jhon Doe</NavItem>
              )}
              {user && (
                <NavItem className={styles.login}>
                  <button className={`btn ${styles.loginBtn}`} onClick={this.props.handleLogout}>
                    Log out
                  </button>
                </NavItem>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {user && (
          <Navbar fluid className={styles.userMenu}>
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav navbar>
                <LinkContainer to="/search">
                  <NavItem>Search</NavItem>
                </LinkContainer>
                <LinkContainer to="/buysell">
                  <NavItem>Buy & Sell</NavItem>
                </LinkContainer>
                <LinkContainer to="/outofhours">
                  <NavItem>Out of hours</NavItem>
                </LinkContainer>
                <LinkContainer to="/portfolio">
                  <NavItem>Portfolio</NavItem>
                </LinkContainer>
                <LinkContainer to="/wallet">
                  <NavItem>Wallet</NavItem>
                </LinkContainer>
                <LinkContainer to="/profile">
                  <NavItem>Profile</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )}
      </div>
    );
  }
}
