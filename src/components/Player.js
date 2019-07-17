import React from 'react';

//Scoreboard
//Maybe we allow player option to enter name and dispay user name in Player 1/2 fields?
export const Scoreboard = (props) => (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Player 1:</h1>
                <h3>3</h3>
            </div>
            <div className="col">
                <h1>Player 2:</h1>
                <h3>6</h3>
            </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <button className="btn btn-success btn-lg">Play Again</button>
            <button className="btn btn-danger btn-lg  ml-3">Restart</button>
          </div>
        </div>
    </div>
)

export default Scoreboard

//Restart Button 
//Play Again Button
//Winner Modal 
//Validation Message