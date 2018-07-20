import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FlagGame from '../FlagGame/FlagGame';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FlagGame />
      </div>
    );
  }
}

export default App;
