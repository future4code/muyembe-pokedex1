import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {useState} from 'react'
import axios from "axios";
import { BASE_URL } from "../../requisições/requisicoes";

export default function SimpleContainer() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonImage, setPokemonImage] = useState('')

  useEffect(()=> {
    axios.get(`${BASE_URL}/pokemon/bulbasaur`).then((response) => {
      console.log(response)
      setPokemon(response)
      setPokemonImage(response.data.sprites.versions['generation-v']['black-white'].animated.front_default)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xl"
        style={{
          padding: "0",
          display: "flex",
          placeItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Box
            style={{
              backgroundColor: "#f2f2f2",
              width: "15vw",
              height: "30vh",
              border: "1px solid black",
              borderRadius: "15px",
              backgroundColor: "#232323",
              color: "#f2f2f2",
              margin: "20px",
            }}
          >
            <img style={{width: '15vw', height: '30vh'}}
              src={pokemonImage}
            />
          </Box>
          <Box
            style={{
              backgroundColor: "#f2f2f2",
              width: "15vw",
              height: "30vh",
              border: "1px solid black",
              borderRadius: "15px",
              backgroundColor: "#232323",
              color: "#f2f2f2",
              margin: "20px",
            }}
          >
            <img style={{width: '15vw', height: '30vh'}}
              src={"https://cdn.bulbagarden.net/upload/e/e9/Spr_b_5b_001.png"}
            />
          </Box>
        </div>
        <Box
          style={{
            backgroundColor: "#f2f2f2",
            width: "20vw",
            height: "64vh",
            border: "1px solid black",
            borderRadius: "15px",
            backgroundColor: "#232323",
            color: "#f2f2f2",
            margin: "20px",
          }}
        >
          <p>Stats</p>
          <p>HP</p>
          <p>Attack</p>
          <p>defense</p>
          <p>special-attack</p>
          <p>special-defense</p>
          <p>speed</p>

        </Box>
        <div>
          <Box
            style={{
              backgroundColor: "#f2f2f2",
              width: "30vw",
              height: "10vh",
              border: "1px solid black",
              borderRadius: "15px",
              backgroundColor: "#232323",
              color: "#f2f2f2",
              margin: "20px",
            }}
          >
            <p>Type: Grass</p>
          </Box>
          <Box
            style={{
              backgroundColor: "#f2f2f2",
              width: "30vw",
              height: "50vh",
              border: "1px solid black",
              borderRadius: "15px",
              backgroundColor: "#232323",
              color: "#f2f2f2",
              margin: "20px",
            }}
          >
            <p>Moves</p>
            <p>Vine whip</p>
            <p>Razor-leaf</p>
            <p>Solar Beam</p>
          </Box>
        </div>
        <Typography
          component="div"
          style={{ backgroundColor: "#f2f2f2", height: "100vh" }}
        />
      </Container>
    </React.Fragment>
  );
}
