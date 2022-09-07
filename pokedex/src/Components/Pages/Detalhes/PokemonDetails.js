import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { Button, ButtonIcones, DivDados, DivDetalhes, DivImagemCostas, DivImagemFrontal, DivImagens,  DivMovimentos,  DivTipos,  Header } from "./Style"
import { BiArrowBack } from 'react-icons/bi'



export const PokemonDetails=()=>{
    const navigate=useNavigate()
    const param=useParams()
    const [detalhes, setDetalhes]=useState()

    useEffect(()=>{
        requisicaoDetalhes()
    }, [])

    function requisicaoDetalhes(){
        const UrlPokemon= `https://pokeapi.co/api/v2/pokemon/${param.name}`

            axios.get(UrlPokemon).then((response)=>{
            setDetalhes(response.data)
            console.log(response.data)
        })
    }
    const voltar =()=>{
        navigate(-1)
    }

    return(
        <>
            <Header>
                <ButtonIcones onClick={voltar}><BiArrowBack size="40px" /></ButtonIcones>
                <h1>{detalhes?.name[0].toUpperCase(0) + detalhes?.name.substr(1)}</h1>
                <Button>Adicionar/Remover da pokedex</Button>
            </Header>
            <DivDetalhes>
                <DivImagens>
                    <DivImagemFrontal
/*                     style={detalhes?.types[0].type.name === "fire" ? {backgroundImage: r}:{}}
 */
                    >
                        <h1>Imagem frontal:</h1>
                        <img src={detalhes?.sprites.other.home.front_default} alt={detalhes?.name}/>
                    </DivImagemFrontal>
                    <DivImagemCostas>
                        <h1>  Imagem de costas: </h1>
                        <img src={detalhes?.sprites.back_default} alt={detalhes?.name}/>
                    </DivImagemCostas>
                </DivImagens>
                <DivDados>
                    <h1>Dados:</h1>
                    <p>Experience: {detalhes?.base_experience}</p>   
                    <p>XP: {detalhes?.stats[0].base_stat}</p>
                    <p>Attack: {detalhes?.stats[1].base_stat}</p>
                    <p>Defense: {detalhes?.stats[2].base_stat}</p>
                    <p>Special Attack: {detalhes?.stats[3].base_stat}</p>
                    <p>Special Defense: {detalhes?.stats[4].base_stat}</p>
                    <p>Speed: {detalhes?.stats[5].base_stat}</p>
                </DivDados>
                <DivTipos>
                    <p>Tipo: {detalhes?.types[0].type.name[0].toUpperCase(0) + detalhes?.types[0].type.name.substr(1)}</p>
{/*                     <p>Tipo: {detalhes?.types[1].type.name[0].toUpperCase(0) + detalhes?.types[1].type.name.substr(1)}</p>
 */}                </DivTipos>
                <DivMovimentos>
                    <h1>Movimentos</h1>
                    <p>{detalhes?.moves[0].move.name[0].toUpperCase(0) + detalhes?.moves[0].move.name.substr(1)}</p>
                    <p>{detalhes?.moves[1].move.name[0].toUpperCase(0) + detalhes?.moves[0].move.name.substr(1)}</p>
                    <p>{detalhes?.moves[2].move.name[0].toUpperCase(0) + detalhes?.moves[0].move.name.substr(1)}</p>
                    <p>{detalhes?.moves[3].move.name[0].toUpperCase(0) + detalhes?.moves[0].move.name.substr(1)}</p>
                    <p>{detalhes?.moves[4].move.name[0].toUpperCase(0) + detalhes?.moves[0].move.name.substr(1)}</p>
                    <p>{detalhes?.moves[5].move.name[0].toUpperCase(0) + detalhes?.moves[0].move.name.substr(1)}</p>
                    <p>{detalhes?.moves[6].move.name[0].toUpperCase(0) + detalhes?.moves[0].move.name.substr(1)}</p>
                    <p>{detalhes?.moves[7].move.name[0].toUpperCase(0) + detalhes?.moves[0].move.name.substr(1)}</p>
                    <p>{detalhes?.moves[8].move.name[0].toUpperCase(0) + detalhes?.moves[0].move.name.substr(1)}</p>
                    <p>{detalhes?.moves[9].move.name[0].toUpperCase(0) + detalhes?.moves[0].move.name.substr(1)}</p>
                </DivMovimentos>


            </DivDetalhes>
 

        </>
    )
}