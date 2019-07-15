import React, { Component } from 'react';

import Square from './Square';

export default class Board extends Component {

    state = {
        X: '',
        O: '',
        values: []
    }

    handleClick = () => {
        
    }

    render() {
        return (
            this.state.values.map( (value, index) => {
                return <Square name={value} key={index} />
            })
        )
    }
}

