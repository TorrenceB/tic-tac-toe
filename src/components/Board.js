import React from 'react';

import Square from './Square';

export const Board = (props) => (
    <div className="board-container">
        <div className="row">
            <div className="col-12">
                <Square />
                <Square /> 
                <Square />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <Square />
                <Square /> 
                <Square />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <Square />
                <Square /> 
                <Square />
            </div>
        </div>
    </div>
)

export default Board; 