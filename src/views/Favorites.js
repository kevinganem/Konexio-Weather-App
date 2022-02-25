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
import "../App.css";
// COMPONENTS
import CityCard from "../components/CityCard";

export default function Favorites() {
  const cityInfo = useContext(CityContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const card = () => {
    return data.length > 0
      ? data.map((res, i) => {
          return (
            <div key={i}>
              <CityCard onClick={removeFavorites} index={i} info={res} />;
            </div>
          );
        })
      : null;
  };

  function handleData(dataMap) {
    return setData((prevState) => {
      return [...prevState, dataMap];
    });
  }

  function removeFavorites(param) {
    cityInfo.setFavorites((prevState) => {
      let array = [...prevState];
      array.splice(param, 1);
      return array;
    });
    setData([]);
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
          })
          .catch((err) => console.log(err));
      });
    } else {
      return null;
    }
  }, [cityInfo.favorites]);

  return loading ? (
    <Container>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  ) : (
    <Container>{card()}</Container>
  );
}

// CSS PART

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;
