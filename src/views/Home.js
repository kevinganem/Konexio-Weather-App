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
// CONTEXT
import { CityContext } from "../context/CityContext";
// CSS
import styled from "styled-components";
import "../App.css";
// TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// COMPONENTS
import API from "../components/API";

export default function Home() {
  const [Search, setSearch] = useState("");
  const cityInfo = useContext(CityContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const notify = () => toast("🦄 Added to favorites! 🦄");

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
        notify();
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
        </InputDiv>
        <SpanDiv>{<Span>{errors.city?.message}</Span>}</SpanDiv>
        <ButtonDiv>
          <Button onClick={handleCity}>Search</Button>
          <Button onClick={handleFavorite}>Favorite</Button>
          <ToastContainer />
        </ButtonDiv>
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
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0);
  height: 2.5rem;
`;

const SpanDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Span = styled.span`
  color: red;
`;
