import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themes/theme';
import GlobalStateContext from '../../../Global/globalStateContext'
import {useHistory} from 'react-router-dom'
import {onClickVoltar} from '../../../funcoesNavegacao/navegacao'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar(props) {
  const classes = useStyles();
  const history = useHistory()

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar style={{textAlign: 'center'}} position="fixed">
        <Toolbar style={{backgroundColor: '#232323' }}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Button variant="contained" style={{backgroundColor: '#f2f2f2'}} onClick={() => onClickVoltar(history)}>VOLTAR</Button>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           <p>{props.name?.toUpperCase()}</p>
          </Typography>
          <Button 
            style=
            {{
              backgroundColor: '#f2f2f2'
            }} 
            variant="contained" 
            color="secondary"
            onClick={props.onClickAdicionar}
            >
        Adicionar
      </Button>
      <Button
         style={{
          marginLeft: '10px',
          backgroundColor: '#f2f2f2'
          }} 
          variant="contained"
          color="secondary"
          onClick={props.onClickRemover}
          >
        Remover da Pokedex
      </Button>
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}