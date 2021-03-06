/*
// {/* <a href="/" className="header-name"> */
// <Link to="/" className="header-link">
// <span> Eric Lau </span>
// {/* Eric Lau */}
// {/* </a> */}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <ul className="header">
          <li>
            <Link to="/portfolio" className="header-link">
              <span>
              PORTFOLIO
              </span>
            </Link>
          </li>
          <li>
            <Link to="/photography" className="header-link">
              <span>PHOTOGRAPHY</span>
            </Link>
          </li>
          <li>
            <div className="middle">
              <Link to="/" className="header-link header-name">
                Eric Lau
              </Link>
            </div>
          </li>
          <li>
            <Link to="/about" className="header-link">
            <span>ABOUT</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="header-link">
            <span>CONTACT</span>
            </Link>
          </li>
      </ul>
    )
  }
}

Header.propTypes = {

};

export default Header;