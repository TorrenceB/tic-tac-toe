import React, { Component } from 'react';
import './App.css';

import Board from './components/Board';
import Scoreboard from './components/Player';

export default class App extends Component {

render() {
    return (
      <div className="container-fluid">
        <Board />
        <Scoreboard />
      </div>
    );
  }
}
