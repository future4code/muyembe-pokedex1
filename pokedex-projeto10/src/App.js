import TelaDetalhe from '../src/components/detalhe/telaDetalhe/telaDetalhes'
import TelaHome from './components/home/telaHome';
import GlobalState from './Global/globalState';

function App() {
  return (
    <GlobalState>
      <div>
      <TelaDetalhe/>
      {/* <TelaHome/> */}
      </div>
    </GlobalState>
  );
}

export default App;
