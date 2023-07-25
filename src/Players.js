import React, {useState} from "react";
import './Players.css'
import LifeBar from "./LifeBar";
import Condicoes from "./Condicoes";

function Player(){
    const [exp, setExp] = useState(0);
    const [inputValue, setInputValue] = useState(0);

    const handleInputChange = (event) => {
        const value = event.target.value;
        // Verifica se o valor é um número válido antes de atualizar o estado do input
        if (!isNaN(value)) {
            setInputValue(parseInt(value));
        }
    };

    const handleAddExp = () => {
        setExp(exp + inputValue);
        setInputValue(0); // Reinicia o valor do input após adicionar ao estado `exp`
    };

    const handleRemoveExp = () =>{
        setExp(exp - inputValue);
        setInputValue(0); // Reinicia o valor do input após adicionar ao estado `exp`
    }

    return(
        <div>
            <input id="namePlayer" type="text" placeholder="Player"/>
            <div id="divStatus" className="lifePoints">
                <p>CA:</p> <input id="inCA" placeholder="00"></input>
            </div>

            <div id="divStatus" className="lifePoints">
                <p>HP</p><LifeBar/>
            </div>
            <div id="divStatus" className="exp">
                <p>XP: {exp}</p> <p id="separador">/</p><input id="valor" value={inputValue} onChange={handleInputChange}/><button onClick={handleAddExp}>Adicionar</button><button onClick={handleRemoveExp}>Remover</button>
            </div>
            <div id="divStatus">
                <p>Condições:</p><Condicoes/>
            </div>
            <hr/>
        </div>
    );
}

export default Player;