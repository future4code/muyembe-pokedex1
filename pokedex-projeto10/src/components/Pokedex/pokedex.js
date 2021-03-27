import React, { useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import GlobalStateContext from '../../Global/globalStateContext'
import ButtonAppBar from './barraHeaderPokedex/barraHeader'
import CardCompleto from './CardCompleto'
import {ContainerHome} from './card/styles'

function Pokedex() { 
  const { setters, states, requests } = useContext(GlobalStateContext)

  const history = useHistory()

  const onClickVoltar = () => {
    history.push('/')
  }

  return (
    <div>
      <ButtonAppBar
        onClickVoltar={onClickVoltar}
      />
      <ContainerHome>
      {states.pokedex && states.pokedex.map((pokemon) => {
        return (
          <CardCompleto  
            fotoPokemon={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
            nomePokemon={pokemon.name}
            tipoPokemon={pokemon.types[0].type.name}
        />
        )
      })}
      </ContainerHome>
    </div>
  )
}

export default Pokedex;