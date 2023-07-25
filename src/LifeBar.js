import React, { useState } from "react";
import './LifeBar.css';

function LifeBar(){
    const [lifePoints, setLife] = useState(0);

    const formatLifePoints = (value) => {
        return value.toString().padStart(2, '0');
    };

    const barWidth = `${lifePoints*8}%`;

    return(
        <div id="lifepoints">
            <p>: {formatLifePoints(lifePoints)}</p><button id="btnLife" onClick={() => setLife(lifePoints-1)}>◄</button><button id="btnLife" onClick={() => setLife(lifePoints+1)}>►</button>
            <div id="lifeBarContainer">
                <div id="lifeBar" style={{ width: barWidth }} />
            </div>
        </div>
    );
}

export default LifeBar;