import './App_styled.js';
import Router from '../src/router/Router';
import GlobalSyle from './globalStyles/globalStyles.js';


function App() {
  return (
    <div className="App">
      <GlobalSyle/>
      <Router/>
    </div>
  );
}

export default App;
