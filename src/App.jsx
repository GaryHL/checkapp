import './App_styled.js';
import Router from '../src/router/Router'
import CardApp from './components/cardApp/CardApp'

function App() {
  return (
    <div className="App">
      <CardApp/>
      <Router/>
    </div>
  );
}

export default App;
