// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      APP.JS     -------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useState } from "react";
// ROUTER
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// CSS
import styled from "styled-components";
import "./App.css";
// VIEWS
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import NotFound from "./views/NotFound";
// CONTEXT
import { CityContext } from "./context/CityContext";

export default function App() {
  const [city, setCity] = useState("Paris");
  const [favorites, setFavorites] = useState([]);

  const value = {
    city: city,
    setCity: setCity,
    favorites: favorites,
    setFavorites: setFavorites,
  };

  return (
    <Container>
      <CityContext.Provider value={value}>
        <BrowserRouter>
          <NavBar>
            <Link className="link" to="/">
              <NavLink>Home</NavLink>
            </Link>
            <Link className="link" to="/favorites">
              <NavLink>Favorites</NavLink>
            </Link>
          </NavBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer>
            <Para>Kevin GANEM</Para>
            <Para>{new Date().toLocaleDateString("fr")}</Para>
          </Footer>
        </BrowserRouter>
      </CityContext.Provider>
    </Container>
  );
}

// CSS PART

const Container = styled.div`
  background-image: url("https://cdn.wallpapersafari.com/26/89/2t05m8.jpg");
  background-size: cover;
  position: relative;
  height: 100vh;
`;

const NavBar = styled.nav`
  width: 100%;
  height: 4rem;
  font-size: 18px;
  text-align: center;
  display: flex;
  flex-direction: inline;
  justify-content: center;
`;

const NavLink = styled.h1`
  margin: 1rem;
  color: white;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: inline;
  height: 4rem;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Para = styled.p`
  margin: 1rem;
  color: white;
  font-family: "Montserrat";
`;
