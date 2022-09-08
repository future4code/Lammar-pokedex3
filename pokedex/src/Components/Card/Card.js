import React from "react";
import {useNavigate} from "react-router-dom"
import {ButtonsContainer, PokeCardContainer, PokeImg, ImgContainer} from "./Styled"
import {goToDetails} from "../Coordinator"
export function Card({pokemon}){
    const navigate = useNavigate()
    return (
    <PokeCardContainer>
       <ImgContainer>
       <PokeImg
       src={pokemon.sprites && pokemon.sprites.front_default}
       alt={pokemon.name}
       />
       </ImgContainer>
       <ButtonsContainer>
            <button>
            Adicionar a Pokedex
            </button>
        <button onClick={()=>goToDetails(navigate, pokemon.name)}>
            Ver detalhes
            </button>
       </ButtonsContainer> 
    </PokeCardContainer>)
}