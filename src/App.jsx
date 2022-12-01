import './App_styled.js';
import Router from '../src/router/Router';
import GlobalSyle from './globalStyles/globalStyles.js';
import CardApp from './components/cardApp/CardApp'

function App() {
  return (
    <div className="App">
      <CardApp/>
      <GlobalSyle/>
      <Router/>
    </div>
  );
}

export default App;
