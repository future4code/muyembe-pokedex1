import { Switch, Route, BrowserRouter } from 'react-router-dom'
import TelaHome from '../components/home/telaHome'
import TelaDetalhe from '../components/detalhe/telaDetalhe/telaDetalhes'

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/">
            <TelaHome/>
          </Route> */}
        {/*   <Route exact path="/pokedex">
            <PaginaDeFormulario/>
          </Route> */}
          {/* <Route exact path="/detalhes/:nomePokemon">
            <TelaDetalhe/>
          </Route> */}
          <Route>
            <TelaDetalhe/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
}

export default Router
