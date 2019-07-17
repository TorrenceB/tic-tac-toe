import React, { Component } from 'react';
import './App.css';

import Board from './components/Board';
import Scoreboard from './components/Player';

export default class App extends Component {

render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="column-9">
            <Board />
          </div>
        </div>
        <Scoreboard />
      </div>
    );
  }
}
