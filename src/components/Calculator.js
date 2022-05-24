import React, { Component } from 'react';
import './Calculator.css';
import Digit from './Digit';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <form className="calculator">
          <input type="text" value={value} className="value" readOnly />
          <Digit digitText="AC" />
          <Digit digitText="+/-" />
          <Digit digitText="%" />
          <Digit digitText="÷" symbole />
          <Digit digitText="7" />
          <Digit digitText="8" />
          <Digit digitText="9" />
          <Digit digitText="x" symbole />
          <Digit digitText="4" />
          <Digit digitText="5" />
          <Digit digitText="6" />
          <Digit digitText="-" symbole />
          <Digit digitText="1" />
          <Digit digitText="2" />
          <Digit digitText="3" />
          <Digit digitText="+" symbole />
          <Digit digitText="0" clear />
          <Digit digitText="." />
          <Digit digitText="=" symbole />
        </form>
      </div>
    );
  }
}

export default Calculator;
