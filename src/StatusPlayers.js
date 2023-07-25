import './StatusPlayers.css';
import Player from './Players';
import React, { useState } from 'react';


function StatusPlayers(){
    const [numPlayers, setNumPlayers] = useState(1);
    const handleNumPlayersChange = (e) => {
        setNumPlayers(Number(e.target.value));
    };
    const generatePlayers = () => {
        const players = [];
        for (let i = 0; i < numPlayers; i++) {
          players.push(<Player key={i} />);
        }
        return players;
    };
    return(
        <div>
            <label>Players: </label>
            <input type='number' min={1} id='numPlayers' value={numPlayers} onChange={handleNumPlayersChange} />
            <hr/>
            {generatePlayers()}
        </div>
    );
}

export default StatusPlayers;