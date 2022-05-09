import React, { useContext } from "react";
import { goToDetalhes, goToPokedex } from "../Coordinator/Coordinator";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Contants/contants";
import styled from "styled-components";
import { ContextPokemons } from "../global/GlobalContext";
import { Pokedex } from "./Pokedex";
import { Badge, Box, Button, ButtonGroup, Flex, Image } from "@chakra-ui/react";
import { Headers } from "./Headers";


const Container = styled.div `
h1{
  text-align: center;
  color:#D69E2E;
  
}
`



const CardPokemons = styled.div`
  Img {
    height: 150px;
    width: 150px;
  }
`;

export const HomePage = () => {
  const navigate = useNavigate();
  const { pokemons, pokedex, setPokemons, setPokedex, loading } =
    useContext(ContextPokemons);

  const onClickAddPokedex = (id) => {
    const index = pokemons.findIndex((pokemon) => pokemon.id === id);
    const pokemon = pokemons[index];
    pokemons.splice(index, 1);
    setPokemons(pokemons);
    setPokedex((list) => [pokemon, ...list]);
  };

  return (

    <Container>

    <div>

      <h1>Lista Pokemons</h1>
      <ButtonGroup>
        <Button margin={'5'} colorScheme={"blue"} onClick={() => goToPokedex(navigate)}>
          Ir a Pokédex
        </Button>
      </ButtonGroup>
      {loading ? (
        <Flex justify={'center'} align={'center'}>
            <h1>Carregando...</h1>
        </Flex>
      ) : (
        <Flex justify={"space-around"} direction={"row"} wrap={"wrap"}>
          {pokemons.map((pokemon) => {
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


                {pokemon.name}
                <Flex>
                  <ButtonGroup>
                    <Button
                      colorScheme={"blue"}
                      size="sm"
                      onClick={() => onClickAddPokedex(pokemon.id)}
                    >
                      Adicionar a Pokédex
                    </Button>
                    <Button
                      colorScheme={"teal"}
                      size="sm"
                      onClick={() => goToDetalhes(navigate, pokemon.name)}
                    >
                      Ver Detalhes
                    </Button>
                  </ButtonGroup>
                </Flex>
              </Box>
            );
          })}
        </Flex>
      )}
    </Container>

              {pokemon.name}
              <Flex>
                <ButtonGroup>
                  <Button
                    colorScheme={"blue"}
                    size="sm"
                    onClick={() => onClickAddPokedex(pokemon.id)}
                  >
                    Adicionar a Pokédex
                  </Button>
                  <Button
                    colorScheme={"teal"}
                    size="sm"
                    onClick={() => goToDetalhes(navigate, pokemon.name)}
                  >
                    Ver Detalhes
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
export default HomePage;
