import React from "react";
import './Condicoes.css';

function Condicoes(){
    return(
        <div id="divCondicoes">
            <input type="checkbox" id="inCondicoes"/><label id="lblCondicoes">Envenenado</label>
            <input type="checkbox" id="inCondicoes"/><label id="lblCondicoes">Caído</label>
            <input type="checkbox" id="inCondicoes"/><label id="lblCondicoes">Confuso</label>
            <input type="checkbox" id="inCondicoes"/><label id="lblCondicoes">Morrendo</label>
        </div>
    );
}

export default Condicoes;