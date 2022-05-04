import React from "react";
import { goToDetalhes, goToPokedex } from "../Coordinator/Coordinator";
import { useNavigate } from "react-router-dom";
import { ContextPokemons } from "../global/GlobalContext";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";

export const Pokedex = () => {
  const { pokemons, pokedex } = useContext(ContextPokemons);

  const navigate = useNavigate();

  // const url = "https://pokeapi.co/api/v2/pokemon/"
  //     axios
  //     .get(url)
  //     .then((res)=>{
  //         setPokemons(res.data.result)
  //     })
  //     .catch((err)=>{
  //         console.log(err)
  //     })

  return (
    <div>
      <h1>Seus Pokemons</h1>

      <ul>
        {pokedex.map((pokemon) => {
            
          return<div>
              <img src = {pokemon.sprites.other.dream_world.front_default}></img>
          
          </div> 
        })}
      </ul>
    </div>
  );
};

export default Pokedex;
