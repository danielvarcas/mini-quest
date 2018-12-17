import React, { Component } from 'react';
import './App.css';
import Inventory from './components/Inventory';
import Character from './components/Character';

class App extends Component {
  state = {
    equipped: {
      weapon: "none",
      armour: "none"
    },
    stats: {
      strength: 1,
      magic: 1,
      defense: 1
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">miniQuest
        </header>
        <Inventory equipped={this.state.equipped} />
        <Character stats={this.state.stats} onClick={this.increaseStat} />
      </div>
    );
  }

  increaseStat = (stat) => {
    const newState = { ...this.state }
    newState.stats[stat] += 1;
    this.setState({
      newState
    })
  }
}

export default App;
