import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import PokeCard from './cardComponent/PokeCard'
import GlobalStateContext from '../../Global/globalStateContext'
import { ContainerHome } from './cardComponent/styles'
import ButtonAppBar from './barraHeader/barraHeader'

const TelaHome = () => {  
  const { states, setters, requests } = useContext(GlobalStateContext)

  useEffect(() => {
    requests.listaPokemons()
  }, [])

  return (
    <div>
      <ButtonAppBar/>
      <ContainerHome>{
      states.pokemons.map((pokemon) => {
          return (
            <PokeCard
              nome={pokemon.name}
            />
          )
        })}
      </ContainerHome>
    </div>
  )
}

export default TelaHome;