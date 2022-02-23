// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      APP.JS     -------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useState, useEffect, useContext, createContext } from "react";
// ROUTER
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// CONTEXT

// CSS

// COMPONENTS
import API from "./components/API";
// VIEWS
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import NotFound from "./views/NotFound";
// CONTEXT
import { CityContext } from "./context/CityContext";

export default function App() {
  const [city, setCity] = useState("Paris");
  const value = {
    city: city,
    setCity: setCity,
  };
  return (
    <CityContext.Provider value={value}>
      <BrowserRouter>
        <nav className="">
          <Link className="" to="/">
            Home
          </Link>
          <Link className="" to="/favorites">
            Favorites
          </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
          <Route path="*" component={NotFound} />
        </Switch>
        <footer>
          <p>Kevin GANEM</p>
          <p>{new Date().toLocaleDateString("fr")}</p>
        </footer>
      </BrowserRouter>
    </CityContext.Provider>
  );
}
