import React, { useEffect, useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../requisições/requisicoes";
import { Progress } from "../progressBar/progressBar";
import {StyledP, StyledStat, MovesList} from  './styles'
import GlobalStateContext from '../../../Global/globalStateContext'

export default function SimpleContainer(props) {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonImage, setPokemonImage] = useState("");
  const { states, setters, requests } = useContext(GlobalStateContext)
  const [isShiny, setIsShiny] = useState(false)
  const [shiny, setShiny] = useState(pokemonImage.front_shiny)

  useEffect(()=> {
    buscaPokemon()
  }, [])
  

  const buscaPokemon = () => {
    axios
      .get(`${BASE_URL}/pokemon/charizard`)
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

 const onClickShinyFront = () => {
  setIsShiny(!isShiny)
   if(isShiny) {
     setPokemonImage(shiny)
   }
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
              onClick={onClickShinyFront}
              style={{ width: "9vw", height: "20vh", cursor: 'pointer' }}
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

        {pokemon && pokemon.data && pokemon.data.stats.length > 0 ?  <Box
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
          <StyledStat>Stats</StyledStat>
          
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
          
        </Box> : ''}
        
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

            {pokemon && pokemon.data && pokemon.data.types.length > 0 ? <StyledStat>{`${pokemon.data.types[0].type.name}`}
            </StyledStat> : ''}
            
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
          > 
          {pokemon && pokemon.data && pokemon.data.moves.length > 0 ? <div style={{
            display: "flex",
            flexDirection: "column",
            placeContent: "center",
            placeItems: "center",
            marginLeft: '2vw',
            marginTop: '4vh'
          }}> 
            
            <div><StyledStat>Moves</StyledStat></div>
            <MovesList>{pokemon.data.moves[0].move.name.toUpperCase()}</MovesList>
            <MovesList>{pokemon.data.moves[1].move.name.toUpperCase()}</MovesList>
            <MovesList>{pokemon.data.moves[2].move.name.toUpperCase()}</MovesList>
            <MovesList>{pokemon.data.moves[3].move.name.toUpperCase()}</MovesList>

            </div> : '' }
          
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
