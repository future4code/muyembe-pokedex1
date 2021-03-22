import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Card from './CardCompleto'
import CardCompleto from './CardCompleto'

const PokeCard = (props) => {

    const [fotoPokemon, setFotoPokemon] = useState()
    const [tipoPokemon, setTipoPokemon] = useState()
    const [habilidadePokemon, setHabilidadePokemon] = useState()

    useEffect(() => {
        pegarFotoPokemon()
    }, [])

    const pegarFotoPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.nome}`)
        .then((res) => {
            setFotoPokemon(res.data.sprites.versions['generation-v']['black-white'].animated.front_default)
            setTipoPokemon(res.data.types[0])
            setHabilidadePokemon(res.data.abilities)
        }).catch((err) => {
            console.log(err)
        })
    }

    console.log(tipoPokemon)
    console.log(habilidadePokemon)

    return (
        <div>
            <CardCompleto 
                fotoPokemon={fotoPokemon}
                nomePokemon={props.nome.toUpperCase()}
            />
        </div>
    )
}

export default PokeCard