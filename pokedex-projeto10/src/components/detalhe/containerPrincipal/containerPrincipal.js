import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import { Progress } from "../progressBar/progressBar";
import {StyledP, StyledStat, MovesList} from  './styles'
import PokemonTypes from './pokemontypes'


export default function SimpleContainer(props) {
  const [isShiny, setIsShiny] = useState(false)
 
  const onClickShinyFront = () => {
  setIsShiny(!isShiny)
 }
 

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        style={{
          padding: "0",
          display: "flex",
          placeItems: "center",
          justifyContent: "center",
        }}
      >
       
        <div>
          <Box
            key={props.pokemon.name}
            style={{
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
            {isShiny ? <img
              onClick={onClickShinyFront}
              style={{ width: "9vw", height: "20vh", cursor: 'pointer' }}
              src={props.pokemonImage.front_shiny}
              alt={props.pokemon.name}
            /> : <img
            onClick={onClickShinyFront}
            style={{ width: "9vw", height: "20vh", cursor: 'pointer' }}
            src={props.pokemonImage.front_default}
            alt={props.pokemon.name}
          /> }
            
            
          </Box>
          <Box
            key={props.pokemon.name}
            style={{
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
            {isShiny ? <img
              onClick={onClickShinyFront}
              style={{ width: "8vw", height: "16vh", cursor: 'pointer' }}
              src={props.pokemonImage.back_shiny}
              alt={props.pokemon.name}

            /> : <img
            onClick={onClickShinyFront}
            style={{ width: "8vw", height: "16vh", cursor: 'pointer' }}
            src={props.pokemonImage.back_default}
            alt={props.pokemon.name}
          /> }
          </Box>
        </div>

        {props.pokemon && props.pokemon.data && props.pokemon.data.stats.length > 0 ?  <Box
          key={props.pokemon.name}
          style={{
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
            
            <StyledP key={props.pokemon.name}>HP:{<Progress done={props.pokemon.data.stats[0].base_stat}/>}</StyledP>
            <StyledP key={props.pokemon.name}>Attack: {<Progress done={props.pokemon.data.stats[1].base_stat}/>}</StyledP>
            <StyledP key={props.pokemon.name}>Defense:{<Progress done={props.pokemon.data.stats[2].base_stat}/>}</StyledP>
            <StyledP key={props.pokemon.name}>SP Attack: {<Progress done={props.pokemon.data.stats[3].base_stat}/>}</StyledP>
            <StyledP key={props.pokemon.name}>SP Defense:{<Progress done={props.pokemon.data.stats[4].base_stat}/>}</StyledP>
            <StyledP key={props.pokemon.name}>Speed:{<Progress done={props.pokemon.data.stats[5].base_stat}/>}</StyledP>
          </div>
          
        </Box> : ''}
        
        <div>
          <Box
            style={{
              width: "30vw",
              height: "10vh",
              border: "1px solid black",
              borderRadius: "15px",
              backgroundColor: "#232323",
              color: "#f2f2f2",
              margin: "20px",
              boxShadow: '0 0 60px rgba(0, 0, 0, 0.9)',
              display: 'flex',
              placeContent: 'space-evenly',
              placeItems: 'space-evenly'
            }}
          >
            
            {props.pokemon && props.pokemon.data && props.pokemon.data.types.length > 0 ? <div>{<PokemonTypes pokemon={props.pokemon}/>} </div> : ''}
            
          </Box>

          <Box
            key={props.pokemon.name}
            style={{
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
          {props.pokemon && props.pokemon.data && props.pokemon.data.moves.length > 0 ? <div style={{
            display: "flex",
            flexDirection: "column",
            placeContent: "center",
            placeItems: "center",
            marginLeft: '2vw',
            marginTop: '4vh'
          }}> 
            
            <div><StyledStat>Moves</StyledStat></div>
            <MovesList key={props.pokemon.name}>{props.pokemon.data.moves[0].move.name.toUpperCase()}</MovesList>
            <MovesList key={props.pokemon.name}>{props.pokemon.data.moves[1].move.name.toUpperCase()}</MovesList>
            <MovesList key={props.pokemon.name}>{props.pokemon.data.moves[2].move.name.toUpperCase()}</MovesList>
            <MovesList key={props.pokemon.name}>{props.pokemon.data.moves[3].move.name.toUpperCase()}</MovesList>

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
