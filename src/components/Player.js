import React from 'react';

//Scoreboard
//Maybe we allow player option to enter name and dispay user name in Player 1/2 fields?
export const Scoreboard = (props) => (
    <div className="sb-container">
        <div className="col-12">
            <div className="row">
                <h1>Player 1</h1>
                <li>Player 1 Score</li>
                <h1>Player 2</h1>
                <li>Player 2 Score</li>
            </div>
        </div>
        <div className="btn-container">
            <button className="restart-btn">Restart</button>
            <button className="play-btn">Play Again</button>
        </div>
    </div>
)

export default Scoreboard

//Restart Button 
//Play Again Button
//Winner Modal 
//Validation Message