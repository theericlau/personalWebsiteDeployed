import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <ul className="header">
          <li><Link to="/portfolio" className="header-link">Portfolio</Link></li>
          <li><Link to="/photography" className="header-link">Photography</Link></li>
        <li><a href="/" className="header-name">Eric Lau</a></li>
          <li><Link to="/about" className="header-link">About</Link></li>
          <li><Link to="/contact" className="header-link">Contact</Link></li>
      </ul>
    )
  }
}

Header.propTypes = {

};

export default Header;