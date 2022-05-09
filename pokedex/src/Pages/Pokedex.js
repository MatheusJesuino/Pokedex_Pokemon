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
import styled from "styled-components";

const Container = styled.div `
h1{
  text-align: center;
  color:#D69E2E;
  
}
`

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
    <Container>
      <h1>Seus Pokemons</h1>

      <Button
      margin={'5'}
        colorScheme="blue"
        variant={"outline"}
        size="sm"
        onClick={() => goToHomePage(navigate)}>Voltar</Button>

      <Flex justify={"space-around"} direction={"row"} wrap={"wrap"}>
        {pokedex.map((pokemon) => {
          return (
            <Box
              bg={"#EBF8FF"}
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

                    onClick={() => goToDetalhes(navigate,pokemon.name)}

                  >
                    Detalhes
                  </Button>
                  <Button
                    colorScheme="blue"
                    variant="outline"
                    size="sm"
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
    </Container>
  );
};

export default Pokedex;