import React, { useState } from 'react';
import Digit from './Digit';
import calculate from '../logic/calculate';
import './Calculator.css';

function Calculator() {
  const [state, setState] = useState({});

  const handleInput = (digitText) => {
    setState(calculate(state, digitText));
  };

  const { total, next, operation } = state;
  return (
    <div>
      <div className="calculator">
        <div className="operant">{total || next || operation}</div>
        <Digit digitText="AC" handleInput={handleInput} />
        <Digit digitText="+/-" handleInput={handleInput} />
        <Digit digitText="%" handleInput={handleInput} />
        <Digit digitText="÷" symbole handleInput={handleInput} />
        <Digit digitText="7" handleInput={handleInput} />
        <Digit digitText="8" handleInput={handleInput} />
        <Digit digitText="9" handleInput={handleInput} />
        <Digit digitText="x" symbole handleInput={handleInput} />
        <Digit digitText="4" handleInput={handleInput} />
        <Digit digitText="5" handleInput={handleInput} />
        <Digit digitText="6" handleInput={handleInput} />
        <Digit digitText="-" symbole handleInput={handleInput} />
        <Digit digitText="1" handleInput={handleInput} />
        <Digit digitText="2" handleInput={handleInput} />
        <Digit digitText="3" handleInput={handleInput} />
        <Digit digitText="+" symbole handleInput={handleInput} />
        <Digit digitText="0" clear handleInput={handleInput} />
        <Digit digitText="." handleInput={handleInput} />
        <Digit digitText="=" symbole handleInput={handleInput} />
      </div>
    </div>
  );
}

export default Calculator;
