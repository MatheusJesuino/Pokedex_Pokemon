import React from "react";
import {
  goToDetalhes,
  goToPokedex,
  goToHomePage,
} from "../Coordinator/Coordinator";
import { useNavigate } from "react-router-dom";
import { ContextPokemons } from "../global/GlobalContext";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { ButtonGroup, Button, Stack } from "@chakra-ui/react";

export const Pokedex = () => {
  const { pokemons, pokedex, setPokedex, setPokemons } =
    useContext(ContextPokemons);

  const navigate = useNavigate();


  const onClickApagar = (id) => {
    const index = pokedex.findIndex((pokemon) => pokemon.id === id);
    const pokemon = pokedex[index];
    pokedex.splice(index, 1);
    setPokedex(pokedex);
    setPokemons((list) => [pokemon, ...list]);
  };

//   return (
//     <div>
//       <h1>Seus Pokemons</h1>

      <ul>
        {pokedex.map((pokemon) => {
          return (
            <div>
              <img src={pokemon.sprites.other.dream_world.front_default} />
              <li> {pokemon.name} </li>
              <Stack spacing={4} direction="row" align="center">
                <ButtonGroup>
                  <Button
                    colorScheme="blue"
                    onClick={() => goToDetalhes(navigate)}
                  >
                    Detalhes
                  </Button>
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    onClick={() => onClickApagar(pokemon.id)}
                  >
                    Excluir pokemon
                  </Button>
                </ButtonGroup>
              </Stack>
              <ButtonGroup>
                <Button onclick={() => goToHomePage(navigate)}>Voltar</Button>
              </ButtonGroup>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Pokedex;
