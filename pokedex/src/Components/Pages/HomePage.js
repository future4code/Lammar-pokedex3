import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../Constants";
import useRequestData from "../Hooks/useRequestData"


export function HomePage() {

    // const [pokemons, setPokemons] = useState([])
    // let [pokemonImageUrl, setPokemonImageUrl] = useState('')

    const [dataPokemons, isLoading, errorPokemon] = useRequestData(baseUrl)
    
    let pokemonImageUrl = ''
    const renderPokemons = dataPokemons && dataPokemons.data.results.map((item, index) => {
        
        axios.get(`${baseUrl}${item.name}`).then(response => {
            pokemonImageUrl = response.data.sprites.front_default
            // setPokemonImageUrl(response.data.sprites.front_default)
            // {console.log(response.data.sprites.front_default)}
            // {console.log(pokemonImageUrl)}
        })
        
        return (
            <>
                <p>{item.name}</p>
                <img src={pokemonImageUrl} alt=""/>
                {console.log(pokemonImageUrl)}
            </>
        )
    })

    return (
        <>
            <h1>HomePage</h1>
            {isLoading&&'Carregando...'}
            {!isLoading&&dataPokemons&&
                <>
                    <ul>
                        {renderPokemons}
                    </ul>
                </>
            }
        </>
    );
}