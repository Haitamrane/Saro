import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import './App.css';
import Loading from "./Pages/loading";
import Connexion from "./Pages/connexion";
import Inscription from "./Pages/inscription";
import HomeJeu from "./Pages/homejeu";
import Messages from "./Pages/messages";
import Profils from "./Pages/profils";
import Demande from "./Pages/demande";
import Parametre from "./Pages/parametre";



function App() {
  return (
    <div>
      <Router>
      <GlobalStyle />
        <Switch>

        <Route exact path='/'>
          <Loading />
        </Route>

        <Route exact path='/connexion'>
          <Connexion />
        </Route>

        <Route exact path='/inscription'>
          <Inscription />
        </Route>

        <Route exact path='/homejeu'>
          <HomeJeu />
        </Route>

        <Route exact path='/messages'>
          <Messages />
        </Route>

        <Route exact path='/profils'>
          <Profils />
        </Route>

        <Route exact path='/demande'>
          <Demande />
        </Route>

        <Route exact path='/parametre'>
          <Parametre />
        </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
