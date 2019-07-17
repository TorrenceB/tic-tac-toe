import React, { Component } from 'react';

import Square from './Square';

export default class Board extends Component {

    state = {
        value: '',
        values: Array(9).fill(null), 
        gameFinished: false,
    }

    handleClick = () => {
        // let state = this.state;
        // let value = state.value;
        // let values = state.values;
        // values.push(value);
        // this.setState({values:values,value:'X'});
    }

    render() {
        return (
            this.state.values.map( (value, index) => {
                return <Square value={value} key={index} onClick={this.handleClick} />
            })
        )
    }
}

//Issues:
//1. Build Tic Tac Toe data structure using method acheived thus far.
//2. Render Board to screen upon mounting.
//3. Get 'X' or 'O' to appear when square is clicked.