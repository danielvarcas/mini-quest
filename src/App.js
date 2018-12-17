import React, { Component } from 'react';
import './App.css';
import Inventory from './components/Inventory';
import Character from './components/Character';
import Event from './components/Event';
import Actions from './components/Actions';

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
    },
    currentMob: {
      name: "Chicken",
      hp: 5,
      maxHp: 5,
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
        <Event currentMob={this.state.currentMob} />
        <Actions onClick={this.attackMob} />
      </div>
    );
  }
  saveData = () => {
    localStorage.setItem('data', JSON.stringify(this.state))
  }

  componentDidUpdate = () => {
    this.saveData();
  }

  // componentDidMount = () => {
  //   const data = localStorage.getItem('data');
  //   if (data) {
  //     const state = JSON.parse(data);
  //     this.setState(state);
  //   }
  // }

  increaseStat = (stat) => {
    const newState = { ...this.state }
    newState.stats[stat] += 1;
    this.setState({
      newState
    })
  }
  attackMob = () => {
    const mobHP = this.state.currentMob.hp;
    if (mobHP > 0) {
      const newState = { ...this.state }
      newState.currentMob.hp -= 1;
      this.setState({
        newState
      })
    }
    if (mobHP === 0) {
      console.log("You win!")
    }
  }

}

export default App;
