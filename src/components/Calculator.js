import React, { Component } from 'react';
import Digit from './Digit';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(digitText) {
    const { total, next, operation } = this.state;
    const calculator = calculate({ total, next, operation }, digitText);
    this.setState({
      total: calculator.total,
      next: calculator.next,
      operation: calculator.operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <div className="calculator">
          <div className="operant">{total || next || operation}</div>
          <Digit digitText="AC" handleInput={this.handleInput} />
          <Digit digitText="+/-" handleInput={this.handleInput} />
          <Digit digitText="%" handleInput={this.handleInput} />
          <Digit digitText="÷" symbole handleInput={this.handleInput} />
          <Digit digitText="7" handleInput={this.handleInput} />
          <Digit digitText="8" handleInput={this.handleInput} />
          <Digit digitText="9" handleInput={this.handleInput} />
          <Digit digitText="x" symbole handleInput={this.handleInput} />
          <Digit digitText="4" handleInput={this.handleInput} />
          <Digit digitText="5" handleInput={this.handleInput} />
          <Digit digitText="6" handleInput={this.handleInput} />
          <Digit digitText="-" symbole handleInput={this.handleInput} />
          <Digit digitText="1" handleInput={this.handleInput} />
          <Digit digitText="2" handleInput={this.handleInput} />
          <Digit digitText="3" handleInput={this.handleInput} />
          <Digit digitText="+" symbole handleInput={this.handleInput} />
          <Digit digitText="0" clear handleInput={this.handleInput} />
          <Digit digitText="." handleInput={this.handleInput} />
          <Digit digitText="=" symbole handleInput={this.handleInput} />
        </div>
      </div>
    );
  }
}

export default Calculator;
