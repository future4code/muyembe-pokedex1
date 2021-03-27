import React, { useContext, useEffect} from 'react'
import PokeCard from './cardComponent/PokeCard'
import GlobalStateContext from '../../Global/globalStateContext'
import { ContainerHome } from './cardComponent/styles'
import ButtonAppBar from './barraHeader/barraHeader'
import {useHistory} from 'react-router-dom'

const TelaHome = () => {  
  const { states, requests } = useContext(GlobalStateContext)
  const history = useHistory()

  useEffect(() => {
    requests.listaPokemons()
  }, [])
  
  let arrayPokemons = states.pokemons.filter((pokemon) => {
    const estaNaPokedex = states.pokedex.some((pokemonPokedex) => {
      return pokemonPokedex.name === pokemon.name
    })
      if(estaNaPokedex) {
        return false        
    } else {
        return true
    }
  })

  const onClickPokedex = () => {
    history.push("/pokedex")
}
  return (
    <div>
      <ButtonAppBar onClickPokedex={onClickPokedex}/>
      <ContainerHome>{
      arrayPokemons.map((pokemon) => {
          return (
            <PokeCard
             key={pokemon.name} nome={pokemon.name}
            />
          )
        })}
      </ContainerHome>
    </div>
  )
}

export default TelaHome;