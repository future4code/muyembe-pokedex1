import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themes/theme';
import { DivHeader } from './style';

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


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar style={{backgroundColor: '#232323' }}>
          <DivHeader>
            <img alt="pokemon-logo" style={{height: '5vh'}} src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1"></img> 
            <Button style={{backgroundColor: '#f2f2f2'}} variant="contained" color="secondary">
              Ir pra Pokedex
            </Button>
          </DivHeader>
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}