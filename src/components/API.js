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
        console.log(result);
      });
  }, [cityInfo.city]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <p>{weather.name}</p>
      <p>{weather.weather[0].main}</p>
      <p>{weather.main.temp}</p>
    </div>
  );
}
