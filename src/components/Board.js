import React, { Component } from 'react';

import Square from './Square';

export default class Board extends Component {

    state = {
        values: Array(9).fill(null), 
        value: '',
        isPlayerX: true,
        gameFinished: false,
        winner: null,
    }

    gameFinishedHandler = () => {}

    handleClick = () => {
        let state = this.state;
        let turnCount = 0;
        let value = state.value;
        let values = [...state.values, ...value];
        //Player 1 --> Even #'s
        //Player 2 --> Odd #'s
        if(turnCount/2 === 0){
            //Player 1
            //value = 'X'
            this.setState( { values: values, value: 'X'} );
        } else {
            //Player 2
            //value = 'O'
            this.setState( {value: 'O'} );
        }
    }

    render() {
        let squares = this.state.values.map( (value, index) => {
            return <Square value={value} key={index} onClick={this.handleClick} />
        });

        return (
            <div className="container">
            {/* Row 1 */}
            <div className="row">
              <div className="square">
                {squares}
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
          </div>
        )
    }
}

//Issues:
//1. Build Tic Tac Toe data structure using method acheived thus far.
//2. Render Board to screen upon mounting.
//3. Get 'X' or 'O' to appear when square is clicked.