/* eslint-disable no-useless-constructor, react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Digit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      digitText, symbole, clear, handleInput,
    } = this.props;
    let myclass = 'num';
    if (symbole) {
      myclass += ' symbole';
    } else if (clear) {
      myclass += ' clear';
    }

    return (
      <button type="button" className={myclass} onClick={() => handleInput(digitText)}>
        {digitText}
      </button>
    );
  }
}

Digit.defaultProps = {
  symbole: false,
  clear: false,
  handleInput: null,
};

Digit.propTypes = {
  digitText: PropTypes.string.isRequired,
  handleInput: PropTypes.func,
  symbole: PropTypes.bool,
  clear: PropTypes.bool,
};

export default Digit;
