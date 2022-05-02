import React from "react";
import { goToDetalhes, goToPokedex } from "../Coordinator/Coordinator"
import {useNavigate } from "react-router-dom";

export const Pokedex = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Seus Pokemons</h1>            
         
        </div>
    );
}

export default Pokedex;