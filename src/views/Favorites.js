// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// ------------------------      FAVORITES.JS     ---------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useState, useContext, useEffect } from "react";
// CONTEXT
import { CityContext } from "../context/CityContext";
// CSS
import styled from "styled-components";
// COMPONENTS
import CityCard from "../components/CityCard";
// VIEWS

export default function Favorites() {
  const cityInfo = useContext(CityContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const card = () => {
    return data.length > 0
      ? data.map((res, i) => {
          return <CityCard key={i} info={res} />;
        })
      : null;
  };

  function handleData(dataMap) {
    return setData((prevState) => {
      return [...prevState, dataMap];
    });
  }

  useEffect(() => {
    if (cityInfo.favorites.length > 0) {
      cityInfo.favorites.map((result) => {
        return fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${result}&units=metric&appid=ad8626239bcb7decd5836f5d1b59e222`
        )
          .then((res) => res.json())
          .then((res) => {
            handleData(res);
            setLoading(false);
            console.log("result :", res);
            console.log("setData :", setData);
          })
          .catch((err) => console.log(err));
      });
    } else {
      return null;
    }
  }, [cityInfo.favorites]);

  return loading ? <p>Loading...</p> : <Container>{card()}</Container>;
}

// CSS PART

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;
