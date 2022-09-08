import React from "react";
import {HeaderContainer, RightHeaderButton} from "./Styled"

export const Header = ()=>{
    return (
    <HeaderContainer>
        <h1>Pokemons</h1>
        <RightHeaderButton>Ir para pokedex</RightHeaderButton>
    </HeaderContainer>)
}