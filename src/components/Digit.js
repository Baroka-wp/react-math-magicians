/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Digit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { digitText, symbole, clear } = this.props;
    let myclass = 'num';
    if (symbole) {
      myclass += ' symbole';
    } else if (clear) {
      myclass += ' clear';
    }

    return (
      <span className={myclass}>{digitText}</span>
    );
  }
}

Digit.propTypes = {
  digitText: PropTypes.string.isRequired,
  symbole: PropTypes.bool.isRequired,
  clear: PropTypes.bool.isRequired,
};

export default Digit;
