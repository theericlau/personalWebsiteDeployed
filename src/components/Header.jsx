import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
          <div className="header"><Link to="/portfolio">Portfolio</Link></div>
          <div className="header"><Link to="/photography">Photography</Link></div>
          <div className="header"><Link to="/about">About</Link></div>
          <div className="header"><Link to="/contact">Contact</Link></div>
      </div>
    )
  }
}

Header.propTypes = {

};

export default Header;