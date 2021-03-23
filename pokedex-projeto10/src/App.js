import './App.css';
import GlobalState from './Global/globalState';
import Router from '../src/router/router'

function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
