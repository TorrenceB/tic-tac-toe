import React from 'react';

export const Square = (props) => (
    <button className="game-square" onClick={props.onClick}>{props.value}</button>
)

export default Square