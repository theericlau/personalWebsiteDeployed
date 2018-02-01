import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Portfolio extends Component {
  componentDidMount() {
    document.title = 'Eric Lau — Portfolio';
  }

  render() {
    return (
      <div>
        Portfolio
      </div>
    );
  }
}

Portfolio.propTypes = {

};

export default Portfolio;
