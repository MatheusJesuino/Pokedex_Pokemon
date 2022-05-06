import React from "react";
import {
  goToDetalhes,
  goToHomePage
} from "../Coordinator/Coordinator";
import { useNavigate } from "react-router-dom";
import { ContextPokemons } from "../global/GlobalContext";
import { useState } from "react";
import { useContext } from "react";
import { Box, Button, ButtonGroup, Flex, Image } from "@chakra-ui/react";

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

  return (
    <div>
      <h1>Seus Pokemons</h1>

      <Button
        colorScheme="blue"
        variant={"outline"}
        size="sm"
        onClick={() => goToHomePage(navigate)}>Voltar</Button>

      <Flex justify={"space-around"} direction={"row"} wrap={"wrap"}>
        {pokedex.map((pokemon) => {
          return (
            <Box
              bg={"teal"}
              key={pokemon.id}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              margin={"5px"}
              >
              <Box>
                <Image
                  boxSize={"150px"}
                  src={pokemon.sprites.other.dream_world.front_default}
                />
              </Box>

              <strong>{pokemon.name}</strong>
              
              <Flex>
                <ButtonGroup>
                  <Button
                    colorScheme="blue"
<<<<<<< HEAD
                    onClick={() => goToDetalhes(navigate,pokemon.name)}
=======
                    size="sm"
                    onClick={() => goToDetalhes(navigate)}
>>>>>>> master
                  >
                    Detalhes
                  </Button>
                  <Button
                    colorScheme="blue"
<<<<<<< HEAD
                    variant="outline"
=======
                    size="sm"
>>>>>>> master
                    onClick={() => onClickApagar(pokemon.id)}
                  >
                    Excluir pokemon
                  </Button>
                </ButtonGroup>
              </Flex>              
            </Box>
          );
        })}
      </Flex>
    </div>
  );
};

export default Pokedex;
