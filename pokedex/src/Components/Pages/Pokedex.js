import React from "react";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { Card } from "../Card/Card";
import { Header } from "../Header/Header"
import { PokeListContainer } from "./HomePage/styled"

export function Pokedex() {

    const navigate = useNavigate()

    const { pokedex } = useContext(GlobalStateContext)

    return (
        <>
            <Header/>
            <PokeListContainer>
            <h1>Pokedex</h1>
            {pokedex.length < 1 && <p>A Pokedex está vazia.</p>}
            <>
                {
                pokedex&&pokedex.map((poke)=>{
                    return <Card key={poke.name} pokemon={poke}/>
                })
                } 
            </>
            </PokeListContainer>
        </>
    );
}