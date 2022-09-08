import React, {useContext} from "react";
import { Header } from "../../Header/Header";
import {PokeListContainer} from "./styled"
import { Card } from "../../Card/Card";
import { GlobalStateContext } from "../../../Global/GlobalStateContext";

export function HomePage() {
    const {pokemons} = useContext(GlobalStateContext)
    return (
    <>
     <Header/>
     <PokeListContainer>
        {
         pokemons&&pokemons.map((poke)=>{
             return <Card key={poke.name} pokemon={poke}/>
         })
        }   
     </PokeListContainer>
     </>
     )
 }