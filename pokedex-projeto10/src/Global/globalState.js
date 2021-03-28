import React, { useState } from 'react'
import axios from 'axios'
import GlobalStateContext from './globalStateContext'

const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [pagina, setPagina] = useState(0)

    const listaPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${pagina}&limit=20`)
        .then((res) => {
            setPokemons(res.data.results)
        }).catch((err) => {
            console.log(err)
        })
    }

    const addPokedex = (pokemon) => { 
        const estaNaPokedex = pokedex.some((pokemonPokedex) => {
            return pokemonPokedex.name === pokemon.name
          })
        if(!estaNaPokedex) {
            const novaPokedex = [...pokedex, pokemon]
            setPokedex(novaPokedex)
            alert(`${pokemon.name} foi adicionado a pokedex!!!`)       
        }else{
            alert(`${pokemon.name} já foi adicionado a pokedex.`) 
          }
    }

    const removerPokemon = (novoPokemon) => {
        const estaNaPokedex = pokedex.some((pokemonPokedex) => {
            return pokemonPokedex.name === novoPokemon.name
          })
        if(estaNaPokedex) {
            const indexPokemon = pokedex.findIndex((pokemon) => pokemon.name === novoPokemon.name);
            const novaListaPokemons = [...pokemons, novoPokemon]
        
            setPokemons(novaListaPokemons)
            pokedex.splice(indexPokemon, 1)

            alert(`${novoPokemon.name} foi removido da pokedex!!!`)       
        }else{
            alert(`${novoPokemon.name} já foi removido da pokedex.`) 
          }
        
      };

    const botao1 = () => {
        setPagina(0)
    }

    const botao2 = () => {
        setPagina(20)
    }

    const botao3 = () => {
        setPagina(40)
    }
    
    const botao4 = () => {
        setPagina(60)
    }

    const botao5 = () => {
        setPagina(80)
    }

    const states = { pokemons, pokedex, pagina }
    const setters = { setPokemons, setPokedex, setPagina }
    const requests = { listaPokemons, addPokedex, removerPokemon }
    const funcoes = { botao1, botao2, botao3, botao4, botao5 }

    const dados = { states, setters, requests, funcoes }
    
    return(
        <GlobalStateContext.Provider value={dados}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState