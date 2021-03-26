// // import React, { useContext, useEffect} from 'react'
// // // import PokeCard from './cardComponent/PokeCard'
// // import GlobalStateContext from '../../Global/globalStateContext'
// // import { ContainerHome } from './cardComponent/styles'
// // // import ButtonAppBar from './Pokedex/barraHeaderPokedex/barraHeader'

// // function Pokedex() { 
// //   const { setter, states, requests } = useContext(GlobalStateContext)

// //   useEffect(() => {
// //     requests.listaPokemons()
// //   }, [requests])

// // const removerPokedex = (novoPokemon) => {
// //     const index = states.listaPokemons.findIndex((i) => i.id === novoPokemon.id);
// //     const novaPokedex = [...states.pokedexHomeList, novoPokemon]
// //     setters.setDadosPokemon(novaPokedex);
// //     states.listaPokemons.splice(index, 1)
// //   };

//   return (
//     <div>
//         <p> Pokedex </p>
//     </div>
//   )
// }

// export default Pokedex;