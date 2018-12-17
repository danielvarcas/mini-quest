import React, { Component } from 'react';
import './App.css';
import Inventory from './components/Inventory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Mini-Quest
        </header>
        <Inventory />
      </div>
    );
  }
}

export default App;
