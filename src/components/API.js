// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      API.JS     -------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useState, useEffect, useContext } from "react";
// CONTEXT
import { CityContext } from "../context/CityContext";
// COMPONENTS
import CityCard from "./CityCard";
// CSS
import "../App.css";
import styled from "styled-components";

export default function API(props) {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const cityInfo = useContext(CityContext);

  useEffect(() => {
    console.log("Initializing");
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityInfo.city}&units=metric&appid=ad8626239bcb7decd5836f5d1b59e222`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setLoading(false);
      });
  }, [cityInfo.city]);

  return loading ? (
    <Container>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  ) : (
    <CityCard info={weather}></CityCard>
  );
}

// CSS PART

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;
