import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Detalhes from "../Pages/Detalhes";
import Pokedex from "../Pages/Pokedex"

export const Router = () => {


    return (
        <div>
            <BrowserRouter>
                <Routes>
                    < Route index element={<HomePage />} />
                    <Route path="pokedex" element={<Pokedex />} />
                    <Route path="detalhes/:name" element={<Detalhes />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

