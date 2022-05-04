import React from "react";
import { goToDetalhes, goToHomePage, goToPokedex } from "../Coordinator/Coordinator"
import {useNavigate } from "react-router-dom";

export const Pokedex = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Seus Pokemons</h1>    
            <button onClick = {()=> goToHomePage(navigate)} >Voltar a Lista de Pokémons</button>        
         
        </div>
    );
}

export default Pokedex;