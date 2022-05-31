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
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>

    );
  }
}
export default App;
