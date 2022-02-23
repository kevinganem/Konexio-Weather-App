// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      APP.JS     -------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useState, useEffect, useContext } from "react";
// ROUTER
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// CONTEXT

// CSS

// COMPONENTS

// VIEWS
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import NotFound from "./views/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="">
        <Link className="" to="/">
          Home
        </Link>
        <Link className="" to="/favorites">
          Favorites
        </Link>
      </nav>
      <footer>
        <p>Kevin GANEM</p>
        <p>Date</p>
      </footer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
