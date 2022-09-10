import axios from "axios"
import React, {useEffect, useState} from "react"
import {baseUrl} from "../Components/Constants"
import { GlobalStateContext } from "./GlobalStateContext"
import { toast } from 'react-toastify';




export const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [pagination, setPagination] = useState(0)

    useEffect(()=>{
        getPokemonNames()
    },[])

    useEffect(()=>{
        const newList = []
        pokemonNames.forEach((item)=>{
            axios.get(`${baseUrl}${item.name}`)
            .then((response)=>{
                newList.push(response.data)
                if(newList.length === 30){
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
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${pagination}`)
        .then((response)=> setPokemonNames(response.data.results))
        .catch((error)=> console.log(error.message))
    }

    const addToPokedex = (name) =>{
        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].name === name) {
                if (!pokedex.includes(pokemons[i])) {
                    setPokedex([...pokedex, pokemons[i]])
                    toast.success('Pokemon adicionado à Pokedéx!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }else{
                    toast.warn('Pokemon já inserido na Pokedéx!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
            }
        }
    }

    const addOrRemoveFromPokedex = (name) =>{
        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].name === name) {
                if (!pokedex.includes(pokemons[i])) {
                    setPokedex([...pokedex, pokemons[i]])
                    toast.success('Pokemon adicionado à Pokedéx!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }else{
                    let newPokedex = pokedex.filter(e => e !== pokemons[i])
                    setPokedex(newPokedex)
                    toast.warn('Pokemon removido da Pokedéx!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
            }
        }
    }

    const nextPage = () => {
        setPagination(pagination+30)
        // getPokemonNames()
    }

    const previousPage = () => {
        setPagination(pagination-30)
        // INCLUIR LOGICA PARA EVITAR NEGATIVOS
    }

    const data = {pokemons, setPokemons, pokedex,
                setPokedex, addToPokedex, addOrRemoveFromPokedex,
                nextPage, previousPage}
    
    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}