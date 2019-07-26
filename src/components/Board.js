import React, { Component } from 'react';

import Square from './Square';

export default class Board extends Component {

    state = {
        values: Array(9).fill(null), 
        value: '',
        isPlayerX: true, //Boolean to flip if Player 'O'
        gameFinished: false,
        winner: null,
        boardState: {},
    }

    gameFinishedHandler = () => {}

    handleClick = () => {
      
        let state = this.state;
        let value = state.value;
        let values = [...state.values]; //Create copy of array so we don't mutate original data
        values[value] = state.isPlayerX ? 'X' : 'O';//Set index of values array to 'X' or 'O'
        //Change 'isPlayerX' to true or false, depending on state and update the state
        this.setState( { values: values, isPlayerX: !state.isPlayerX } ); 
        console.log(values[value]);
    }

    render() {
        // let squares = this.state.values.map( (value, index) => {
        //     return <Square
        //             value={value}
        //             key={index}
        //             onClick={this.handleClick} />
        // });

        return (
            <div className="container">
            {/* Row 1 */}
            <div className="row">
              <div className="square">
                <Square 
                onClick={this.handleClick} 
                value={this.state.values[this.state.value]} //Render updated state to Square component
                />
              </div>
              <div className="square">
                <Square 
                  onClick={this.handleClick} 
                  value={this.state.values[this.state.value]} //Render updated state to Square component
                />
              </div>
              <div className="square">
                <Square 
                  onClick={this.handleClick} 
                  value={this.state.values[this.state.value]} //Render updated state to Square component
                />
              </div>
            </div>
            {/* Row 2 */}
            <div className="row">
              <div className="square">
                <Square 
                  onClick={this.handleClick} 
                  value={this.state.values[this.state.value]} //Render updated state to Square component
                />
              </div>
              <div className="square">
                <Square 
                  onClick={this.handleClick} 
                  value={this.state.values[this.state.value]} //Render updated state to Square component
                />
              </div>
              <div className="square">
                <Square 
                  onClick={this.handleClick} 
                  value={this.state.values[this.state.value]} //Render updated state to Square component
                />
              </div>
            </div>
            {/* Row 3 */}
            <div className="row">
              <div className="square">
                <Square 
                  onClick={this.handleClick} 
                  value={this.state.values[this.state.value]} //Render updated state to Square component
                />
              </div>
              <div className="square">
                <Square 
                  onClick={this.handleClick} 
                  value={this.state.values[this.state.value]} //Render updated state to Square component
                />
              </div>
              <div className="square">
                <Square 
                  onClick={this.handleClick} 
                  value={this.state.values[this.state.value]} //Render updated state to Square component
                />
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