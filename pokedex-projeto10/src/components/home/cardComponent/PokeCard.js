import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardCompleto from './CardCompleto'

const PokeCard = (props) => {
    
    const [fotoPokemon, setFotoPokemon] = useState()
    /* const [tipoPokemon, setTipoPokemon] = useState() */

    useEffect(() => {
        pegarFotoPokemon()
        /* pegarTipoPokemon() */
    }, [])

    const pegarFotoPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.nome}`)
        .then((res) => {
            setFotoPokemon(res.data.sprites.versions['generation-v']['black-white'].animated.front_default)
        }).catch((err) => {
            console.log(err)
        })
    }

    /* const pegarTipoPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/type/${props.nome}`)
        .then((res) => {
            setTipoPokemon(res.data)
        }).catch((err) => {
            console.log(err)
        })
    } */
    
    return (
        <div>
            <CardCompleto 
                fotoPokemon={fotoPokemon}
                nomePokemon={props.nome.toUpperCase()}
                /* tipoPokemon={tipoPokemon} */
            />
        </div>
    )
}

export default PokeCard