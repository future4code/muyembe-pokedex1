import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { CardImagem, ImgPokemon, DivCard, DivNomeImagem, DivBotoes } from './styles'

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
    <Card style={{ 
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        backgroundColor: '#232323',
        height: '30vh',
        width: '30vh'
        }} className={classes.root}>
      <CardActionArea>
        <DivNomeImagem>
          <CardImagem>
            <ImgPokemon src={props.fotoPokemon} alt={props.nomePokemon}/>
          </CardImagem>
          <CardContent>
            <Typography style={{ color: '#f2f2f2'}} gutterBottom variant="h5" component="h2">
              {props.nomePokemon}
            </Typography>
            {/* <Chip label="Basic">{props.tipoPokemon}</Chip> */}
          </CardContent>
        </DivNomeImagem>
      </CardActionArea>
      <DivBotoes>
        <Button variant="contained" style={{backgroundColor: '#f2f2f2'}}>
          Capturar
        </Button>
        <Button color="secondary">
          Ver detalhes
        </Button>
      </DivBotoes>
    </Card>
    </DivCard>
  );
}