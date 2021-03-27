import React, { useContext, useEffect} from 'react'
import PokeCard from './cardComponent/PokeCard'
import GlobalStateContext from '../../Global/globalStateContext'
import { ContainerHome } from './cardComponent/styles'
import ButtonAppBar from './barraHeader/barraHeader'
import { onClickPokedex } from '../../funcoesNavegacao/navegacao'
import { useHistory } from 'react-router'
import { Loading } from '../Loading/telaLoading'

const TelaHome = () => {  
  const { states, requests } = useContext(GlobalStateContext)

  const history = useHistory()

  useEffect(() => {
    requests.listaPokemons()
  }, [requests])
  
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

  return (
    <div>
      <ButtonAppBar onClickPokedex={() => onClickPokedex(history)}/>
      <ContainerHome>{
        states.pokemons.length === 0 ? <Loading/> : (
          arrayPokemons.map((pokemon) => {
            return (
              <PokeCard
              key={pokemon.name} nome={pokemon.name}
              />
            )
          }))}
      </ContainerHome>
    </div>
  )
}

export default TelaHome;