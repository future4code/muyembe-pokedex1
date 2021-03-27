import React, { useContext, useEffect} from 'react'
/* import PokeCard from './cardComponent/PokeCard' */
import GlobalStateContext from '../../Global/globalStateContext'
/* import { ContainerHome } from './cardComponent/styles' */
import ButtonAppBar from './barraHeaderPokedex/barraHeader'
import CardCompleto from './CardCompleto'

function Pokedex() { 
  const { setters, states, requests } = useContext(GlobalStateContext)

// //   useEffect(() => {
// //     requests.listaPokemons()
// //   }, [requests])

// // const removerPokedex = (novoPokemon) => {
// //     const index = states.listaPokemons.findIndex((i) => i.id === novoPokemon.id);
// //     const novaPokedex = [...states.pokedexHomeList, novoPokemon]
// //     setters.setDadosPokemon(novaPokedex);
// //     states.listaPokemons.splice(index, 1)
// //   };
console.log (states.pokedex)
  return (
    <div>
      <ButtonAppBar/>
      {states.pokedex && states.pokedex.map((pokemon) => {
        return (
          <CardCompleto  
          fotoPokemon={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
          nomePokemon={pokemon.name}
          tipoPokemon={pokemon.types[0].type.name}
          // onClickDetalhes={onClickDetalhes}
          // onClickAdicionar={() => addPokedex(dadosPokemon)}
        />
        )
      })}
    </div>
  )
}

export default Pokedex;