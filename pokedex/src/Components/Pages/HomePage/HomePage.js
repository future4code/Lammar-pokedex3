import React, {useContext} from "react";
import { Header } from "../../Header/Header";
import {PokeListContainer} from "./styled"
import { Card } from "../../Card/Card";
import { GlobalStateContext } from "../../../Global/GlobalStateContext";
import { goToPokedex  } from "../../Coordinator"
import { useNavigate } from "react-router-dom";
import { Botao } from "../../Header/Styled";

export function HomePage() {
    const navigate = useNavigate()

    const {pokemons, nextPage, previousPage} = useContext(GlobalStateContext)
    
    return (
        <>
            <Header >
                <Botao onClick={()=>goToPokedex(navigate("/pokedex"))}> Pokedéx </Botao>
                Lista de Pokemons
            </Header>
            <button onClick={nextPage}>Next</button>
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