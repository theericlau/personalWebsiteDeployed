import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {
  componentDidMount() {
    document.title = 'Eric Lau — About';
  }

  render() {
    return (
      <div>
        About
      </div>
    );
  }
}

About.propTypes = {

};

export default About;