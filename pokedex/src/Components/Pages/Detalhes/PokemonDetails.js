import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonIcones, Header } from "./Style";
import { BiArrowBack } from 'react-icons/bi'

export function PokemonDetails() {
    const navigate=useNavigate()

    const voltar =()=>{
        navigate(-1)
    }
    return (
        <>
            <Header>
                <ButtonIcones onClick={voltar}><BiArrowBack size="40px" /></ButtonIcones>
                <Button>Adicionar/Remover da Pokedéx</Button>
            </Header>
        </>
    );
}