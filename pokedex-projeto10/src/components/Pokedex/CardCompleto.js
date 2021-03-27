import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  CardImagem,
  ImgPokemon,
  DivCard,
  DivType,
  DivNomeImagem,
  DivBotoes,
  DivBottom
} from "./card/styles";
import TipoDoPokemon from './card/pokemonTypesHome'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CardCompleto(props) {
  const classes = useStyles();

  return (
    <DivCard>
      <Card
        style={{
          display: "flex",
          "flex-direction": "column",
          "justify-content": "center",
          "align-items": "center",
          backgroundColor: "#232323",
          height: "49vh",
          width: "20vw",
          borderRadius: "20px",
          boxShadow: "0 0 60px rgba(0, 0, 0, 0.9)",
          marginTop: "3vh",
        }}
        className={classes.root}
      >
        <CardActionArea
          style={{ backgroundColor: "#454545", paddingTop: "5vh" }}
        >
          <DivNomeImagem>
            <CardImagem>
              <ImgPokemon src={props.fotoPokemon} alt={props.nomePokemon} />
            </CardImagem>
            <Typography
              style={{
                color: "#f2f2f2",
              }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {props.nomePokemon}
            </Typography>
          </DivNomeImagem>
        </CardActionArea>
        <DivBotoes style={{ color: "#f2f2f2" }}>
          <DivType>
            <div>Type:</div>
            {<TipoDoPokemon tipoPokemon ={props.tipoPokemon}/>}
          </DivType>
        </DivBotoes>
        <DivBottom>
          <Button
            onClick={props.onClickAdicionar}
            variant="contained"
            style={{
              backgroundColor: "#f2f2f2",
              width: '50%',
              marginRight: '10px'
            }}
          >
            Capturar
          </Button>
          <Button onClick={props.onClickDetalhes} 
          color="secondary"
          style={{border:'1px solid green', width: '50%', margin: '0'}}
          >
            Ver detalhes
          </Button>
        </DivBottom>
      </Card>
    </DivCard>
  );
}
