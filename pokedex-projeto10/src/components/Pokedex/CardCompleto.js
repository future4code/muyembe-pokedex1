import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { CardImagem, ImgPokemon, DivCard, DivNomeImagem, DivBotoes } from './styles'
/* import GlobalStateContext from '../../Global/globalStateContext'
 */
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

  const corBotao = () => {
    switch(props.tipoPokemon){
      case "grass":
        return "#009705"
      case "fire":
        return "#D87508"
      case "water":
        return "#09D7F5"
      case "bug": 
        return "#01E309"
      default:
        return 
    }
  }

  const corTextoBotao = () => {
    switch(props.tipoPokemon){
      case "grass":
        return "white"
      default: 
        return
    }
  }

  return (
    <DivCard>
      <Card 
        style={{ 
          display: 'flex',
          'flex-direction': 'column',
          'justify-content': 'center',
          'align-items': 'center',
          backgroundColor: '#232323',
          height: '28vh',
          width: '28vh'
          }} 
          className={classes.root}>
        <CardActionArea>
          <Chip 
            style={{
              'background-color': corBotao(),
              'margin-left': '2vh',
              'color': corTextoBotao()
            }}
            label={props.tipoPokemon}
          />
            <DivNomeImagem>
              <CardImagem>
                <ImgPokemon
                  src={props.fotoPokemon}
                  alt={props.nomePokemon}
                />
              </CardImagem>
                <Typography 
                  style={{
                    color: '#f2f2f2'
                  }} 
                  gutterBottom variant="h5" 
                  component="h2">
                  {props.nomePokemon}
                </Typography>
                
            </DivNomeImagem>
        </CardActionArea>
        <DivBotoes>
          <Button
            variant="contained" 
              style={{
                backgroundColor: '#f2f2f2'
              }}>
            Capturar
          </Button>
          <Button onClick={props.onClickDetalhes} color="secondary">
            Ver detalhes
          </Button>
        </DivBotoes>
      </Card>
    </DivCard>
  );
}