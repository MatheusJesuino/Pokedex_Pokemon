import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState, useNavigate } from "react";
import axios from "axios";
import { goToDetalhes, goToPokedex, goToHomePage } from "../Coordinator/Coordinator"
import { BASE_URL } from "../Contants/contants";

export const Detalhes = () => {
    const navigate = useNavigate()

    const [getDetalhes, setGetDetalhes] = useState([])

    useEffect(() => {
        detalhesPokemon()
    }, [])

    const detalhesPokemon = () => {
        axios
            .get(`${BASE_URL}/{id ou nome}/`)
            .then((res) => {
                console.log(res.data.id)
                setGetDetalhes(res.data.id)
            })
            .catch((err) => {
                alert(err.data.id)
            })
    }
 const detalhes = getDetalhes.map((detalhe)=>{
return(
    <div key={detalhe.id} >
        {/* <li>Poderes : {detalhe.planet}</li> */}
        <li>Principais Abilidades : {detalhe.abilities}</li>
        <li>Tipo : {detalhe.species}</li>
    </div>
)
 })

    return (
        <div>
            <h1>Detalhes do Pokemon</h1>
            {detalhes}
            <button onClick = {()=> goToPokedex(navigate)}>Ir a Pokédex</button>
            <button onClick={()=> goToHomePage(navigate) }>Voltar</button>
          
         
        </div>
    );
}

export default Detalhes;