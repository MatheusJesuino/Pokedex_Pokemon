import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { goToPokedex, goToHomePage } from "../Coordinator/Coordinator"
import { BASE_URL } from "../Contants/contants";
import { useNavigate, useParams } from "react-router-dom";
import { Badge, Box, Button, ButtonGroup, Flex, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { ContextPokemons } from "../global/GlobalContext";




const ContainerHeader = styled.div`
display:flex;
justify-content: space-between;
width: 100%;
background: #D60606;
height:100px;
font-family: 'Press Start 2P', cursive;   
`

const ContainerPokemons = styled.div`
display:flex;
justify-content: space-around;
width: 100%;
height: 100VH;
font-family: 'Press Start 2P', cursive;    
background-color:#FFD700;
`

const ContainerImg = styled.div`
width: 250px;
height: 460px;
flex-direction: column;
align-items: center;
margin-top: 20px;
background-color: #9FB6CD;

`

const ImgPokemons = styled.img`
width : 200px;
height: 180px;
padding-left: 30px;
`
const ContainerStats = styled.div`
width: 300px;
height: 400px;
flex-direction: column;
align-items: center;
margin: 20px 0px 0px 0px;
background-color: #9FB6CD;
padding: 30px;
display:flex;
align-items: center;

`
const ContainerTypes = styled.div`
width: 300px;
height: 400px;
flex-direction: column;
align-items: center;
background-color: #9FB6CD;
padding: 30px;
margin: 20px 0px 0px 0px;
display:flex;
align-items: center;
`
const ContainerMoves = styled.div`
width: 300px;
height: 400px;
flex-direction: column;
align-items: center;
background-color: #9FB6CD;
padding: 30px;
margin: 20px 0px 0px 0px;
display:flex;
align-items: center;
`
const Fontes = styled.li`
font-size: 18px;
`
const NomePokemon = styled.p`
color: white;
display: flex;
align-items: center;
font-size: 34px;
`

export const Detalhes = () => {
    const { name } = useParams()
    const navigate = useNavigate()



    const [detalhePokemon, setDetalhePokemon] = useState({})

    useEffect(() => {
        pegaPokemon()
    }, [])

    const pegaPokemon = (() => {

        axios
            .get(`${BASE_URL}/${name}`)
            .then((res) => {
                console.log(res.data)
                setDetalhePokemon(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    })


    return (
        <div>

            <ContainerHeader>
                <Button
                    colorScheme={"blue"}
                    size="sm"
                    margin={"30px"}
                    onClick={() => goToHomePage(navigate)}
                >
                    Voltar
                </Button>
                <NomePokemon>{detalhePokemon.name}</NomePokemon>
                <Button
                    colorScheme={"blue"}
                    size="sm"
                    margin={"30px"}
                    onClick={() => goToPokedex(navigate)}
                >
                    Ver sua Pokedex
                </Button>
            </ContainerHeader>
            <ContainerPokemons>
                <ContainerImg>
                    <br /><br />
                    {detalhePokemon.sprites && (
                        <ImgPokemons
                            src={detalhePokemon.sprites.front_default}
                            alt={detalhePokemon.name}
                        />
                    )}

                    {detalhePokemon.sprites && (
                        <ImgPokemons

                            src={detalhePokemon.sprites.back_default}
                            alt={detalhePokemon.name}
                        />
                    )}
                </ContainerImg>
                <ContainerStats>
                    <h2>Poderes</h2>
                    <br />
                    {detalhePokemon.stats && <Fontes>{detalhePokemon.stats[0].stat.name}</Fontes>}<br />
                    {detalhePokemon.stats && <Fontes>{detalhePokemon.stats[1].stat.name}</Fontes>}<br />
                    {detalhePokemon.stats && <Fontes>{detalhePokemon.stats[2].stat.name}</Fontes>}<br />
                    {detalhePokemon.stats && <Fontes>{detalhePokemon.stats[3].stat.name}</Fontes>}<br />
                    {detalhePokemon.stats && <Fontes>{detalhePokemon.stats[4].stat.name}</Fontes>}<br />
                    {detalhePokemon.stats && <Fontes>{detalhePokemon.stats[5].stat.name}</Fontes>}<br />
                </ContainerStats>
                <ContainerTypes>
                    <h2>Tipo</h2><br />
                    <Fontes>{detalhePokemon.types && detalhePokemon.types[0].type.name}</Fontes><br />
                    {detalhePokemon.types && (detalhePokemon.types.length > 1 ? <Fontes>{detalhePokemon.types[1].type.name}</Fontes> : null)}
                </ContainerTypes>
                <ContainerMoves>
                    <h2>Habilidades</h2>
                    <br />
                    {detalhePokemon.types && <Fontes>{detalhePokemon.moves[0].move.name}</Fontes>}<br />
                    {detalhePokemon.types && <Fontes>{detalhePokemon.moves[1].move.name}</Fontes>}<br />
                    {detalhePokemon.types && <Fontes>{detalhePokemon.moves[2].move.name}</Fontes>}<br />
                </ContainerMoves>
            </ContainerPokemons>
        </div>

    );
}

export default Detalhes