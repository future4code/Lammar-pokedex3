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
                if(newList.length === 20){
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
        axios.get(`${baseUrl}`)
        .then((response)=> setPokemonNames(response.data.results))
        .catch((error)=> console.log(error.message))
    }

    const addToPokedex = (name) =>{
        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].name === name) {
                setPokedex([...pokedex, pokemons[i]])
                alert('Pokemon added to Pokedex!')
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