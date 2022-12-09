import "./App_styled.js";
import Router from "../src/router/Router";
import GlobalSyle from "./globalStyles/globalStyles.js";
import { AppProvider } from "./context/AppContext";
import CompareApp from "../src/components/CompareApp/CompareApp"

function App() {
   return (
      <AppProvider>
         <div className="App">
            <GlobalSyle />
            <Router />
         </div>
      </AppProvider>
      
      
   );
}

export default App;
