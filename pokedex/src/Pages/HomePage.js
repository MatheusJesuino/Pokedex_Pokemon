import React from "react";
import { goToDetalhes, goToPokedex } from "../Coordinator/Coordinator"
import {useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Lista Pokemons</h1>
            <button onClick = {()=> goToPokedex(navigate)}>Ir a Pokédex</button>
            <button>Adicionar a Pokédex</button>
            <button onClick= {()=>goToDetalhes(navigate)}>Ver Detalhes</button>
         
        </div>
    );
}

export default HomePage;
