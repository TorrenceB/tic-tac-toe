import React, { Component } from 'react';
import './App.css';

import Board from './components/Board';
import Scoreboard from './components/Player';

export default class App extends Component {

render() {
    return (
      <div className="container">
        {/* Row 1 */}
        <div className="row">
          <div className="square">
            <h1 className="display-1 text-center">X</h1>
          </div>
          <div className="square">
            <h1 className="display-1 text-center">X</h1>
          </div>
          <div className="square">
            <h1 className="display-1 text-center">O</h1>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="square">
            <h1 className="display-1 text-center">O</h1>
          </div>
          <div className="square">
            <h1 className="display-1 text-center">X</h1>
          </div>
          <div className="square">
            <h1 className="display-1 text-center">X</h1>
          </div>
        </div>
        {/* Row 3 */}
        <div className="row">
          <div className="square">
            <h1 className="display-1 text-center">O</h1>
          </div>
          <div className="square">
            <h1 className="display-1 text-center">O</h1>
          </div>
          <div className="square">
            <h1 className="display-1 text-center">X</h1>
          </div>
        </div>
        <Scoreboard />
      </div>
    );
  }
}
