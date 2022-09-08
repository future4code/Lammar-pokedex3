import React from "react";
import { useNavigate } from 'react-router-dom'
import {HeaderContainer, RightHeaderButton} from "./Styled"

export const Header = ()=>{

    const navigate = useNavigate()

    return (
        <HeaderContainer>
            <h1>Pokemons</h1>
            <RightHeaderButton 
                onClick={() => navigate('/pokedex')}>
                Ir para pokedex
            </RightHeaderButton>
        </HeaderContainer>)
}