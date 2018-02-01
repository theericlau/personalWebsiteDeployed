import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// const Header = props => {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li><Link to='/'>Portfolio</Link></li>
//           <li><Link to='/photography'>Photography</Link></li>
//           <li><Link to='/about'>About</Link></li>
//           <li><Link to='/contact'>Contact</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

class Header extends Component {
  render() {
    return (
      <div>
          <div><Link to="/portfolio">Portfolio</Link></div>
          <div><Link to="/photography">Photography</Link></div>
          <div><Link to="/about">About</Link></div>
          <div><Link to="/contact">Contact</Link></div>
      </div>
    )
  }
}

Header.propTypes = {

};

export default Header;