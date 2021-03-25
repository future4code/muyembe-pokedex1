import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import CardCompleto from './CardCompleto'

const PokeCard = (props) => {

    const [dadosPokemon, setDadosPokemon] = useState()
    
    const history = useHistory()

    useEffect(() => {
        pegarDadosPokemon()
    }, [])

    const pegarDadosPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.nome}`)
        .then((res) => {
            setDadosPokemon(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const onClickDetalhes = () => {
      history.push(`/detalhes/${props.nome.toLowerCase()}`)
    }

    return (
        <div>
            {dadosPokemon &&
                <CardCompleto  
                    fotoPokemon={dadosPokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
                    nomePokemon={props.nome}
                    tipoPokemon={dadosPokemon.types[0].type.name}
                    onClickDetalhes={onClickDetalhes}
                /> }
        </div>
    )
}

export default PokeCard