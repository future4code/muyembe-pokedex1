import React, { useContext, useEffect} from 'react'
/* import PokeCard from './cardComponent/PokeCard' */
import GlobalStateContext from '../../Global/globalStateContext'
/* import { ContainerHome } from './cardComponent/styles' */
import ButtonAppBar from './barraHeaderPokedex/barraHeader'

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

  return (
    <div>
      <ButtonAppBar/>
        <p> Pokedex </p>
    </div>
  )
}

// export default Pokedex;