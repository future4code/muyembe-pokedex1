import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../requisições/requisicoes";
import { Progress } from "../progressBar/progressBar";
import {StyledP} from  './styles'

export default function SimpleContainer() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonImage, setPokemonImage] = useState("");


  useEffect(() => {
    buscaPokemon()
}, []);

  const buscaPokemon = () => {
    axios
      .get(`${BASE_URL}/pokemon/bulbasaur`)
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
  }

 

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
              boxShadow: '0 0 60px rgba(0, 0, 0, 0.9)',
              display: 'flex',
              placeContent: 'center',
              placeItems: 'center'
            }}
          >
            <img
              style={{ width: "9vw", height: "20vh" }}
              src={pokemonImage.front_default}

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
              boxShadow: '0 0 60px rgba(0, 0, 0, 0.9)',
              display: 'flex',
              placeContent: 'center',
              placeItems: 'center'
            }}
          >
            <img
              style={{ width: "8vw", height: "20vh" }}
              src={pokemonImage.back_default}
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
            boxShadow: '0 0 60px rgba(0, 0, 0, 0.9)'
          }}
        >
          <p>Stats</p>
          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              placeContent: "start-end",
              placeItems: "flex-start",
              marginLeft: '1vw',
            }}
          >
            
            <StyledP>HP:{<Progress done={pokemon.data.stats[0].base_stat}/>}</StyledP>
            <StyledP>Attack: {<Progress done={pokemon.data.stats[1].base_stat}/>}</StyledP>
            <StyledP>Defense:{<Progress done={pokemon.data.stats[2].base_stat}/>}</StyledP>
            <StyledP>SP Attack: {<Progress done={pokemon.data.stats[3].base_stat}/>}</StyledP>
            <StyledP>SP Defense:{<Progress done={pokemon.data.stats[4].base_stat}/>}</StyledP>
            <StyledP>Speed:{<Progress done={pokemon.data.stats[5].base_stat}/>}</StyledP>
          </div>
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
              boxShadow: '0 0 60px rgba(0, 0, 0, 0.9)'
            }}
          >
            {/* <p>{`Type: ${pokemon.data.types[0].type.name}`} and {pokemon.data.types[1].type.name} 
            </p> */}
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
              boxShadow: '0 0 60px rgba(0, 0, 0, 0.9)'
            }}
          > <div style={{
            display: "flex",
            flexDirection: "column",
            placeContent: "start-end",
            placeItems: "flex-start",
            marginLeft: '2vw',
            marginTop: '4vh'
          }}> 
            <p>Moves</p>
            <p>Vine whip</p>
            <p>Razor-leaf</p>
            <p>Solar Beam</p>
            </div>
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
