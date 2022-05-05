import React, { useContext } from "react"
import { goToDetalhes, goToPokedex } from "../Coordinator/Coordinator"
import {useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../Contants/contants"
import styled from "styled-components"
import { ContextPokemons } from "../global/GlobalContext"
const CardPokemons = styled.div`
    border: 1px solid black;
`
export const HomePage = () => {
    const navigate = useNavigate()
    const {pokemons, pokedex} = useContext(ContextPokemons)
    return (
        <div>
            <h1>Lista Pokemons</h1>
            <button onClick = {()=> goToPokedex(navigate)}>Ir a Pokédex</button>
            <ul>
            {pokemons.map((pokemon)=>{
return(
    <div key={pokemon.id} >
        <li><img src = {pokemon.sprites.other.dream_world.front_default}></img></li>
        <li>Nome : {pokemon.name}</li>
        <button>Adicionar a Pokédex</button><button onClick= {()=>goToDetalhes(navigate)}>Ver Detalhes</button>
    </div>
)
 })}    </ul>
        </div>
    );
}
export default HomePage;