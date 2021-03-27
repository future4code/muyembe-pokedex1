import React, { useState } from 'react'
import axios from 'axios'
import GlobalStateContext from './globalStateContext'

const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    const listaPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
        .then((res) => {
            setPokemons(res.data.results)
        }).catch((err) => {
            console.log(err)
        })
    }

    const addPokedex = (pokemon) => { 
        const novaPokedex = [...pokedex, pokemon]
        setters.setPokedex(novaPokedex)  
    }

    const states = { pokemons, pokedex }
    const setters = { setPokemons, setPokedex}
    const requests = { listaPokemons, addPokedex }

    const dados = { states, setters, requests }
    
    return(
        <GlobalStateContext.Provider value={dados}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState