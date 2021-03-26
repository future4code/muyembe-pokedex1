import React, {useState, useEffect} from "react";
import ButtonAppBar from "../barraHeader/barraHeader";
import SimpleContainer from "../containerPrincipal/containerPrincipal";
import axios from 'axios'
import {BASE_URL} from '../../requisições/requisicoes'
import {useParams} from 'react-router-dom'

const TelaDetalhe = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonImage, setPokemonImage] = useState("");
  const params = useParams();

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
      .get(`${BASE_URL}/evolution-chain/1`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <ButtonAppBar name={pokemon?.data?.name } />
      <SimpleContainer pokemon={pokemon} pokemonImage={pokemonImage}/>
    </div>
  );
};

export default TelaDetalhe;
