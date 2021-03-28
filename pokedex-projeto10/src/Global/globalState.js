import React, { useState } from 'react'
import axios from 'axios'
import GlobalStateContext from './globalStateContext'

const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    const listaPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
        .then((res) => {
            setPokemons(res.data.results)
        }).catch((err) => {
            console.log(err)
        })
    }

    const addPokedex = (pokemon) => { 
        const novaPokedex = [...pokedex, pokemon]
        setters.setPokedex(novaPokedex)
        
        alert(`${pokemon.name} foi adicionado a pokedex!!!`)
    }

    const removerPokemon = (novoPokemon) => {
        const indexPokemon = pokedex.findIndex((pokemon) => pokemon.name === novoPokemon.name);
        const novaListaPokemons = [...pokemons, novoPokemon]
    
        setPokemons(novaListaPokemons)
        pokedex.splice(indexPokemon, 1)

        alert(`${novoPokemon.name} foi removido da pokedex!!!`)
      };

    const states = { pokemons, pokedex }
    const setters = { setPokemons, setPokedex}
    const requests = { listaPokemons, addPokedex, removerPokemon }

    const dados = { states, setters, requests }
    
    return(
        <GlobalStateContext.Provider value={dados}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState