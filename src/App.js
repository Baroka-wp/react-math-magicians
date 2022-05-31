/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './components/Calculator.css';
import Calculator from './components/Calculator';
import './App.css';
import Quotes from './components/Quotes';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/react-math-magicians" element={<Home />} />
        <Route path="/react-math-magicians/calculator" element={<Calculator />} />
        <Route path="/react-math-magicians/quotes" element={<Quotes />} />
      </Routes>

    );
  }
}
export default App;
