import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Eric Lau',
    };
  }

  componentDidMount() {
    document.title = 'Eric Lau — Contact';
  }

  render() {
    return (
      <div>
        Contact : {this.state.name}
      </div>
    );
  }
}

Contact.propTypes = {

};

export default Contact;
