import React from "react";
import { goToDetalhes, goToHomePage, goToPokedex } from "../Coordinator/Coordinator"
import {useNavigate } from "react-router-dom";

export const Detalhes = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Detalhes do Pokemon</h1>
            <button onClick = {()=> goToPokedex(navigate)}>Ir a Pokédex</button>
            <button onClick={()=> goToHomePage(navigate) }>Voltar</button>
          
         
        </div>
    );
}

export default Detalhes;