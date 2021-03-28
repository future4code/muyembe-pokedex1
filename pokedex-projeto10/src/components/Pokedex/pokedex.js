import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import GlobalStateContext from '../../Global/globalStateContext'
import ButtonAppBar from './barraHeaderPokedex/barraHeader'
import CardCompleto from './CardCompleto'
import {ContainerHome} from './card/styles'
import {Loading} from '../Loading/telaLoading'
import {onClickVoltar, onClickDetalhes} from '../../funcoesNavegacao/navegacao'

function Pokedex() { 
  const { states, requests } = useContext(GlobalStateContext)

  const history = useHistory()
  
  console.log(states.pokedex)

  return (
    <div>
      <ButtonAppBar
        onClickVoltar={() => onClickVoltar(history)}
      />
      <ContainerHome>
      {states.pokedex.length === 0 ? <Loading/> : (
        states.pokedex && states.pokedex.map((pokemon) => {
          return (
            <CardCompleto  
              fotoPokemon={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
              nomePokemon={pokemon.name}
              tipoPokemon={pokemon.types[0].type.name}
              onClickRemover={() => requests.removerPokemon(pokemon)}
              onClickDetalhes={() => onClickDetalhes(history, pokemon.name)}
          />
        )
      }))}
      </ContainerHome>
    </div>
  )
}

export default Pokedex;