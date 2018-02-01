import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Photography extends Component {
  componentDidMount() {
    document.title = 'Eric Lau — Photography';
  }

  render() {
    return (
      <div>
        Photography
      </div>
    );
  }
}

Photography.propTypes = {

};

export default Photography;