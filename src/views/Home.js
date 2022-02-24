// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      HOME.JS     ------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
// ROUTER

// CONTEXT
import { CityContext } from "../context/CityContext";
// CSS
import styled from "styled-components";
import "../App.css";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// COMPONENTS
import API from "../components/API";
// VIEWS

export default function Home() {
  const [Search, setSearch] = useState("");
  const cityInfo = useContext(CityContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const handleSearch = (event) => {
    return setSearch(event.target.value);
  };
  const handleCity = () => {
    cityInfo.setCity(Search);
  };
  const handleFavorite = () => {
    if (cityInfo.favorites.length < 3) {
      cityInfo.setFavorites((prevState) => {
        return [...prevState, cityInfo.city];
      });
      console.log(cityInfo.favorites);
    } else {
      return alert("Maximum of 3 cities in your favorites");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputDiv>
          <input
            className="input"
            {...register("city", {
              required: "This is required",
            })}
            placeholder="Enter city..."
            type="text"
            onChange={handleSearch}
          />
          <ButtonDiv>
            <Button onClick={handleCity}>Search</Button>
            <Button onClick={handleFavorite}>Favorite</Button>
          </ButtonDiv>
          {<Span>{errors.city?.message}</Span>}
        </InputDiv>
      </form>
      <API></API>
    </>
  );
}

// CSS PART

const InputDiv = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonDiv = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: white;
`;

const Span = styled.span`
  color: red;
`;
