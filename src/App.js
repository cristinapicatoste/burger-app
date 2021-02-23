import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import * as route from "./routes/routes";
import { Landing } from './pages/Landing/Landing';
import { Menu } from './pages/Menu/Menu';
import { Profile } from './pages/Profile/Profile';
import { NavBar } from './components/NavBar/NavBar';


const App = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path={route.LANDING} component={Landing} />
          <Route exact path={route.MENU} component={Menu} />
          <Route exact path={route.PROFILE} component={Profile} />
          <Redirect to={route.LANDING} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
