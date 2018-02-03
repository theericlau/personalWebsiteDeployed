import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';


class Portfolio extends Component {
  componentDidMount() {
    document.title = 'Eric Lau — Portfolio';
  }

  render() {
    return (
      <div>
        <Header />
        Portfolio
      </div>
    );
  }
}

Portfolio.propTypes = {

};

export default Portfolio;
