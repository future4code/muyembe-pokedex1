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

  useEffect(() => {
    buscaPokemon();
  }, [])

  const buscaPokemon = () => {
    axios
      .get(`${BASE_URL}/pokemon/${params.nomePokemon}`)
      .then((response) => {
        setPokemon(response);
        setPokemonImage(
          response.data.sprites.versions["generation-v"]["black-white"].animated
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
