import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { ButtonsContainer, PokeCardContainer, PokeImg, ImgContainer, BotaoIcones, BotaoTexto } from "./Styled"
import { goToDetails } from "../Coordinator"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import {RiAddFill} from 'react-icons/ri'
import { PokemonDetails } from "../Pages/Detalhes/PokemonDetails";


export function Card({pokemon}){
    
    const navigate = useNavigate()

    const { addToPokedex } = useContext(GlobalStateContext)

    return (
        <PokeCardContainer type={pokemon?.types[0].type.name}>
        <ImgContainer  type={pokemon?.types[0].type.name}>
            <PokeImg
                src={pokemon.sprites && pokemon.sprites.front_default}
                alt={pokemon.name}
            />
        </ImgContainer>
        <ButtonsContainer>
            <BotaoIcones type={pokemon?.types[0].type.name} onClick={() => addToPokedex(pokemon.name)}>
                <RiAddFill size="35px" />
            </BotaoIcones>
            <BotaoTexto type={pokemon?.types[0].type.name} onClick={()=>goToDetails(navigate, pokemon.name)}>
                Detalhes
            </BotaoTexto>
        </ButtonsContainer> 
        </PokeCardContainer>)
}