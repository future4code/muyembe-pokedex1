import React, { useState } from 'react'
import axios from 'axios'
import GlobalStateContext from './globalStateContext'

const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])
    const [pokemonsDados, setPokemonsDados] = useState()
    const [pokedex, setPokedex] = useState([])

    const listaPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((res) => {
            setPokemons(res.data.results)
        }).catch((err) => {
            console.log(err)
        })
    }
    
    const pokeDados = (nome) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        .then((res) => {
            setPokemonsDados(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const states = { pokemons, pokemonsDados, pokedex }
    const setters = { setPokemons, setPokemonsDados, setPokedex}
    const requests = { listaPokemons, pokeDados }

    const dados = { states, setters, requests }
    
    return(
        <GlobalStateContext.Provider value={dados}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState