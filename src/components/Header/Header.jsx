import './Header.css';

import React from 'react';
import { render } from 'react-dom';
import { PropTypes, Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <div className="header-wrapper">
        <Navbar fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand className="brand-wrap">
              <a href="#"><div className="brand-logo" /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav className="nav-menu">
            <li><Link eventKey={1} to="/" activeClassName="active" onlyActiveOnIndex={true}>HOME</Link></li>
            <li><Link eventKey={2} to="/faq" activeClassName="active">FAQ</Link></li>
            <li><Link eventKey={4} to="contactUs" activeClassName="active">CONTACT US</Link></li>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

Header.contextTypes = { history: PropTypes.history }
