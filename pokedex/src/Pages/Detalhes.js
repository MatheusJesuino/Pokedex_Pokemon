import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { goToDetalhes, goToPokedex, goToHomePage } from "../Coordinator/Coordinator"
import { BASE_URL } from "../Contants/contants";
import { useNavigate } from "react-router-dom";

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
            <h1>Detalhes do Pokemon</h1>

            <button onClick={() => goToPokedex(navigate)}>Ir a Pokédex</button>
            <p>{detalhePokemon.name}</p>
            <button onClick={() => goToHomePage(navigate)}>Voltar</button>
            <br/>
            {detalhePokemon.sprites && (
                <img
                    src={detalhePokemon.sprites.front_default}
                    alt={detalhePokemon.name}
                />
            )}
            {detalhePokemon.sprites && (
                <img
                    src={detalhePokemon.sprites.back_default}
                    alt={detalhePokemon.name}
                />
            )}
            {detalhePokemon.stats && <p>{detalhePokemon.stats[0].stat.name}</p>}
            {detalhePokemon.stats && <p>{detalhePokemon.stats[1].stat.name}</p>}
            {detalhePokemon.stats && <p>{detalhePokemon.stats[2].stat.name}</p>}
            {detalhePokemon.stats && <p>{detalhePokemon.stats[3].stat.name}</p>}
            {detalhePokemon.stats && <p>{detalhePokemon.stats[4].stat.name}</p>}
            {detalhePokemon.stats && <p>{detalhePokemon.stats[5].stat.name}</p>}
            {detalhePokemon.types && <p>{detalhePokemon.types[0].type.name}</p>}
            {detalhePokemon.types && <p>{detalhePokemon.types[1].type.name}</p>}
            {detalhePokemon.types && <p>{detalhePokemon.moves[0].move.name}</p>}
            {detalhePokemon.types && <p>{detalhePokemon.moves[1].move.name}</p>}
            {detalhePokemon.types && <p>{detalhePokemon.moves[2].move.name}</p>}  

     
        </div>

    );
}

export default Detalhes;