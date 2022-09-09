import axios from "axios"
import React, {useEffect, useState} from "react"
import {baseUrl} from "../Components/Constants"
import { GlobalStateContext } from "./GlobalStateContext"


export const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    

    useEffect(()=>{
        getPokemonNames()
    },[])

    useEffect(()=>{
        const newList = []
        pokemonNames.forEach((item)=>{
            axios.get(`${baseUrl}${item.name}`)
            .then((response)=>{
                newList.push(response.data)
                if(newList.length === 100){
                    const orderedList = newList.sort((a, b) =>{
                        return a.id - b.id
                    })
                    setPokemons(orderedList)
                }
            })
            .catch((error)=> console.log(error.message))
        })
    },[pokemonNames])

    const getPokemonNames = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
        .then((response)=> setPokemonNames(response.data.results))
        .catch((error)=> console.log(error.message))
    }

    const addToPokedex = (name) =>{
        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].name === name) {
                if (!pokedex.includes(pokemons[i])) {
                    setPokedex([...pokedex, pokemons[i]])
                    alert('Pokemon adicionado a Pokedex!')
                }else{
                    alert('Pokedex já possui esse Pokemon.')
                }
            }
        }
    }

    const data = {pokemons, setPokemons, pokedex, setPokedex, addToPokedex}
    
    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}