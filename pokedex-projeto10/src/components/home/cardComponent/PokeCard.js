import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import CardCompleto from './CardCompleto'
import GlobalStateContext from '../../../Global/globalStateContext'
import {onClickDetalhes}  from '../../../funcoesNavegacao/navegacao'
import { useHistory } from 'react-router'

const PokeCard = (props) => {
    const { requests } = useContext(GlobalStateContext)

    const history = useHistory()

    const [dadosPokemon, setDadosPokemon] = useState()

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
    
    return (
        <div>
            {dadosPokemon &&
                <CardCompleto  
                    fotoPokemon={dadosPokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
                    nomePokemon={dadosPokemon.name}
                    tipoPokemon={dadosPokemon.types[0].type.name}
                    onClickDetalhes={() => onClickDetalhes(history, dadosPokemon.name)}
                    onClickAdicionar={() => requests.addPokedex(dadosPokemon)}
                /> }
        </div>
    )
}

export default PokeCard