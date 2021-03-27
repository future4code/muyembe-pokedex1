import React, { useContext, useEffect} from 'react'
import GlobalStateContext from '../../Global/globalStateContext'
import ButtonAppBar from './HeaderPokedex/barraHeader'


function Pokedex() { 
  const { states, setters, requests } = useContext(GlobalStateContext)


  // useEffect(() => {
  //   requests.listaPokemons()
  // }, [requests])

// // // const removerPokedex = () => {
// // //     const novoPokemonPokedex = states.pokedex.filter ((pokemon, index, array) => {
// // //       return pokemon[index] === index

// //     }) 

//     setPokedex ([... states.pokedex])
//     const index = states.listaPokemons((i) => i.id === novoPokemon.id);
//     const novaPokedex = [...states.pokedexHomeList, novoPokemon]
//     setters.setDadosPokemon(novaPokedex);
//     requests.listaPokemons.splice(index)
//   };

  return (
    <div>
        <ButtonAppBar />
        {states.pokedex && states.pokedex.map((pokemon) => {
          return (
          <CardCompleto  
            fotoPokemon={dadosPokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
            nomePokemon={props.nome}
            tipoPokemon={dadosPokemon.types[0].type.name}
            // onClickDetalhes={onClickDetalhes}
            /> 
          })

        })
        
        {removerPokedex()}

    </div>
  )
}

export default Pokedex;