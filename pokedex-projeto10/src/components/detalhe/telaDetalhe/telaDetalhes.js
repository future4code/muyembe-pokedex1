import React, {useState, useEffect, useContext} from "react";
import ButtonAppBar from "../barraHeader/barraHeader";
import SimpleContainer from "../containerPrincipal/containerPrincipal";
import axios from 'axios'
import {BASE_URL} from '../../requisições/requisicoes'
import {useParams} from 'react-router-dom'
import GlobalStateContext from "../../../Global/globalStateContext";

const TelaDetalhe = () => {

  const { requests } = useContext(GlobalStateContext)

  const [pokemon, setPokemon] = useState([]);
  const [pokemonImage, setPokemonImage] = useState("");
  const params = useParams();
  const [evolutionChain, setEvolutionChain] = useState([])

  useEffect(() => {
    buscaPokemon();
    evolution()
  }, []);

  const buscaPokemon = () => {
    axios
      .get(`${BASE_URL}/pokemon/${params.nomePokemon}`)
      .then((response) => {
        console.log(response);
        setPokemon(response);
        setPokemonImage(
          response.data.sprites.versions["generation-v"]["black-white"].animated
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const evolution = () => { 
    axios
      .get(`${BASE_URL}/pokemon/${params.nomePokemon}`)
      .then((response) => {
        const url = response.data.species.url
        console.log('primeira requisição com params.nomePokemon', response)
        console.log(url)
        return axios.get(url)
      })
      .then((response) => {
        const url = response.data.evolution_chain.url
        return axios.get(url)
      })
      .then((response) => {
        setEvolutionChain(response.data.chain)
      })
      .catch()
    // axios.get(url).then((response) => {
    //   const url = response.data.evolution_chain.url
    //   console.log('Resposta evolution', response)
    //   axios.get(url).then((response) => {
    //     setEvolutionChain(response.data.chain)
    //     console.log("evolution Chain aqui!!", response)
        
    //   }).catch((error) => {
    //     console.log(error)
    //   })
    // }).catch((error) => {
    //   console.log("resposta evolution", error)
    // })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  console.log(evolutionChain)
  return (
    <div>
      <ButtonAppBar 
        name={pokemon?.data?.name }
        onClickAdicionar={() => requests.addPokedex(pokemon.data)}
        onClickRemover={() => requests.removerPokemon(pokemon.data)}
      />
      <SimpleContainer pokemon={pokemon} pokemonImage={pokemonImage}/>
    </div>
  );
};

export default TelaDetalhe;
