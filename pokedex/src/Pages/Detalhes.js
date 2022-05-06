import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { goToPokedex, goToHomePage } from "../Coordinator/Coordinator"
import { BASE_URL } from "../Contants/contants";
import { useNavigate } from "react-router-dom";


const ContainerHeader = styled.div`
display:flex;
justify-content: space-between;
width: 100%;
background: #D60606;
height: 100px;
`

const ContainerPokemons = styled.div`
display:flex;
justify-content: space-around;
width: 100%;
`

const ContainerImg = styled.div`
width: 200px;
height: 500px;
flex-direction: column;
align-items: center;
margin-top: 100px;
`

const ImgPokemons = styled.img`
width : 200px;
height: 200px;
`
const ContainerStats = styled.div`
width: 200px;
height: 300px;
flex-direction: column;
align-items: center;
margin-top: 150px;
border: 2px solid black;
padding: 50px;
`
const ContainerTypes = styled.div`
width: 200px;
height: 300px;
flex-direction: column;
align-items: center;
margin-top: 150px;
border: 2px solid black;
padding-left: 50px;
`


export const Detalhes = () => {
    const navigate = useNavigate()


    const [detalhePokemon, setDetalhePokemon] = useState({})

    useEffect(() => {
        pegaPokemon()
    }, [])

    const pegaPokemon = (() => {

        axios
            .get(`${BASE_URL}/1/`)
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
            <button onClick={() => goToHomePage(navigate)}>Voltar</button>
            <p>{detalhePokemon.name}</p>
            <button onClick={() => goToPokedex(navigate)}>Ir a Pokédex</button>
            </ContainerHeader>
            <ContainerPokemons>
                <ContainerImg>
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
                <h1>Stats</h1>
               
            {detalhePokemon.stats && <li>{detalhePokemon.stats[0].stat.name}</li>}
            {detalhePokemon.stats && <li>{detalhePokemon.stats[1].stat.name}</li>}
            {detalhePokemon.stats && <li>{detalhePokemon.stats[2].stat.name}</li>}
            {detalhePokemon.stats && <li>{detalhePokemon.stats[3].stat.name}</li>}
            {detalhePokemon.stats && <li>{detalhePokemon.stats[4].stat.name}</li>}
            {detalhePokemon.stats && <li>{detalhePokemon.stats[5].stat.name}</li>}
            </ContainerStats>
            <ContainerTypes>
                <h1>Types</h1>
            <li>{detalhePokemon.types && detalhePokemon.types[0].type.name}</li>
            {detalhePokemon.types && (detalhePokemon.types.length > 1 ? <li>{detalhePokemon.types[1].type.name}</li> : null)}
            </ContainerTypes>
            {detalhePokemon.types && <p>{detalhePokemon.moves[0].move.name}</p>}
            {detalhePokemon.types && <p>{detalhePokemon.moves[1].move.name}</p>}
            {detalhePokemon.types && <p>{detalhePokemon.moves[2].move.name}</p>}
            </ContainerPokemons>
        </div>

    );
}

export default Detalhes